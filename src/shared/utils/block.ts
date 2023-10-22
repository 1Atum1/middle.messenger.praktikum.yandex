import { EventBus } from "./event-bus.ts";
import {nanoid} from "nanoid";
import Handlebars from "handlebars";

export class Block {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    };

    public id =  nanoid(6)

    _element = null;
    _meta = null;
    protected props: any;
    public children: Record<string, Block>
    private eventBus: () => EventBus;

    /** JSDoc
     * @param {string} tagName
     * @param propsWithChildren
     * @param tagNameClass
     */
    constructor(tagName: string = "div", propsWithChildren: { [s: string]: unknown; } | ArrayLike<unknown>, tagNameClass = '', ) {
        const eventBus = new EventBus();
        const { props, children } = this._getChildrenAndProps(propsWithChildren)
        this._meta = {
            tagName,
            props,
            tagNameClass
        };

        this.children = children
        this.props = this._makePropsProxy(props);

        this.eventBus = () => eventBus;

        this._init()

        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }

    _getChildrenAndProps(childrenAndProps: any) {
        let props: Record<string, unknown> = {};
        let children: Record<string, Block> = {};

        Object.entries(childrenAndProps).forEach(([key, value]) => {
            if (value instanceof Block) {
                children[key as string] = value;
            } else {
                props[key] = value;
            }
        })

        return { props: props, children }
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
                myElement?.addEventListener(eName, events[eName]);
            })
        }

    }

    _registerEvents(eventBus: { on: (arg0: string, arg1: { (): void; (): void; (oldProps: any, newProps: any): void; (): void; }) => void; }) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    _createResources() {
        const { tagName, props } = this._meta;
        this._element = this._createDocumentElement(tagName);
    }

    _init() {
        this._createResources();
        this.init();
        this._render();
    }

    init() {
    }

    _componentDidMount() {
        this.componentDidMount();
    }

// Может переопределять пользователь, необязательно трогать
    componentDidMount() {}

    dispatchComponentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
        Object.values(this.children).forEach(v => v.dispatchComponentDidMount())
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
        return this._element;
    }

    _render() {
        const block = this.render();

        this._element!.innerHTML = '';
        if (this.props.cssClassName) {
            this._element!.className += this.props.cssClassName
        }
        this._element!.append(block);

        this._addEvents()
    }

// Может переопределять пользователь, необязательно трогать
    render() {}

    getContent() {
        return this.element;
    }

    _makePropsProxy(props) {
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

    _createDocumentElement(tagName) {
        // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
        return document.createElement(tagName);
    }

    protected compile(template: string, context: any) {

        const contextAndStubs = { ...context };

        Object.entries(this.children).forEach(([name, component]) => {
            contextAndStubs[name] = `<div data-id="${component.id}"></div>`
        })

        const html = Handlebars.compile(template)(contextAndStubs);
        const temp = document.createElement('template')

        temp.innerHTML = html;

        Object.entries(this.children).forEach(([_, component]) => {
            const stab = temp.content.querySelector(`[data-id="${component.id}"]`);

            if (!stab) {
                return;
            }

            if (component instanceof Block) {
                component.getContent()?.append(...Array.from(stab.childNodes))
                stab.replaceWith(component.getContent()!);
            }
        })

        return temp.content;
    }

    show() {
        this.element!.style.display = 'block';
    }

    hide() {
        this.element!.style.display = 'none';
    }
}
