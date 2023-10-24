import { EventBus } from "./event-bus.ts";
import {nanoid} from "nanoid";
import Handlebars from "handlebars";
// import {Input} from "../components/input/input.ts";
// import {Button} from "../components/button/button.ts";

export class Block {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    };

    public id =  nanoid(6)

    _element = null as unknown as HTMLElement;
    _meta = null as unknown;
    protected props: any;
    public children: Record<string, Block | Block[]>
    private eventBus: () => EventBus;

    /** JSDoc
     * @param {string} tagName
     * @param propsWithChildren
     * @param tagNameClass
     */
    constructor(tagName: string = "div", propsWithChildren: any, tagNameClass = '', ) {
        const eventBus = new EventBus();
        const { props, children } = this._getChildrenAndProps(propsWithChildren)
        this._meta = {
            tagName,
            props,
            tagNameClass
        };

        this.children = children
        if (props) {
            this.props = this._makePropsProxy(props);
        }

        this.eventBus = () => eventBus;
        this._registerEvents(eventBus);
        this._init()
        eventBus.emit(Block.EVENTS.INIT);
    }

    _getChildrenAndProps(childrenAndProps: any) {
        // console.log(childrenAndProps);
        let props: Record<string, unknown> = {}; // Инициализируем props как пустой объект
        let children: Record<string, Block | Block[]> = {}; // Инициализируем children как пустой объект

        Object.entries(childrenAndProps).forEach(([key, value]) => {
            if (value instanceof Block) {
                children[key as string] = value;
            } else {
                props[key] = value;
            }
        });

        return { props, children };
    }

    _addEvents() {
        const events = this.props.events as {events: Record<string, () => {}>};

        if (events) {
            Object.keys(events).forEach(eName => {
                let myElement;
                for (const child of this._element?.children) {
                    if (child.tagName === 'INPUT' || child.tagName === 'BUTTON') {
                        myElement = child
                    }
                }
                // @ts-ignore
                myElement?.addEventListener(eName, events[eName]);
            })
        }

    }

    _registerEvents(eventBus: any) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    _createResources() {
        // @ts-ignore
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName);
    }

    _init() {
        this._createResources();
        this.init();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    init() {
    }

    _componentDidMount() {
        this.componentDidMount();
    }

// Может переопределять пользователь, необязательно трогать
    componentDidMount() {}

    public dispatchComponentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);

        // Проверяем, является ли children объектом или массивом
        if (Array.isArray(this.children)) {
            this.children.forEach((child) => {
                if (child instanceof Block) {
                    child.dispatchComponentDidMount();
                }
            });
        } else {
            // Если children - объект, обрабатываем его как объект
            Object.values(this.children).forEach((child) => {
                if (child instanceof Block) {
                    child.dispatchComponentDidMount();
                }
            });
        }
    }

    _componentDidUpdate() {
        if (this.componentDidUpdate()) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
        }
    }

// Может переопределять пользователь, необязательно трогать
    componentDidUpdate() {
        return true;
    }

    setProps = (nextProps: any) => {
        if (!nextProps) {
            return;
        }
        Object.assign(this.props, nextProps);
    };

    get element() {
        return this._element as unknown as HTMLElement;
    }

    _render() {
        const block = this.render();

        this._element.innerHTML = '';
        if (this.props.cssClassName) {
            this._element!.className += this.props.cssClassName
        }
        this._element!.append(block);

        this._addEvents()
    }

// Может переопределять пользователь, необязательно трогать
    render(): DocumentFragment {
        return {} as DocumentFragment
    }

    getContent() {
        return this.element;
    }

    _makePropsProxy(props: any) {
        // Можно и так передать this
        // Такой способ больше не применяется с приходом ES6+
        const self = this;
        props = new Proxy(props, {
            get(target, prop) {
                const value = target[prop];
                // console.log("get data: ", value);
                return typeof value === "function" ? value.bind(target) : value;
            },
            set(target, prop, value) {
                target[prop] = value;
                self.eventBus().emit(Block.EVENTS.FLOW_CDU, [self.props, target])
                return true;
            },
            deleteProperty() {
                throw new Error("Нет доступа")
            }
        });

        return props;
    }

    _createDocumentElement(tagName: any) {
        // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
        return document.createElement(tagName);
    }

    protected compile(template: string, context: any) {
        const contextAndStubs = { ...context };

        // Обработка дочерних компонентов
        for (const [name, components] of Object.entries(this.children)) {
            if (Array.isArray(components)) {
                // Если components - это массив, создаем массив стабов
                const componentStubs = components.map((component) => {
                    return `<div data-id="${component.id}"></div>`;
                });

                contextAndStubs[name] = componentStubs.join(''); // Объединяем в одну строку
            } else {
                // Если components - это объект, создаем стаб для объекта
                contextAndStubs[name] = `<div data-id="${components.id}"></div>`;
            }
        }

        const compiledTemplate = Handlebars.compile(template)(contextAndStubs);

        // Создаем и заполняем временный элемент
        const temp = document.createElement('template');
        temp.innerHTML = compiledTemplate;

        // Заменяем стабы на компоненты
        for (const [_, components] of Object.entries(this.children)) {
            if (Array.isArray(components)) {
                components.forEach((component) => {
                    const stabs = temp.content.querySelectorAll(`[data-id="${component.id}"]`);
                    stabs.forEach((stab) => {
                        const contentNodes = Array.from(stab.childNodes);
                        component.getContent()?.append(...contentNodes);
                        stab.replaceWith(component.getContent()!);
                    });
                });
            } else {
                const component = components as Block;
                const stab = temp.content.querySelector(`[data-id="${component.id}"]`);
                if (stab) {
                    const contentNodes = Array.from(stab.childNodes);
                    component.getContent()?.append(...contentNodes);
                    stab.replaceWith(component.getContent()!);
                }
            }
        }

        return temp.content;
    }


    show() {
        this.element.style.display = 'block';
    }

    hide() {
        this.element.style.display = 'none';
    }
}
