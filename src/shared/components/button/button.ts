import {tmpl} from "./button.tmpl.ts";
import {Block} from "../../utils/block.ts";

export interface IButton {
    label: string,
    cssClassName?: string,
    events: {
        click: () => void
    }
}

export class Button extends Block{
    constructor(props: IButton) {
        // Создаём враппер дом-элемент button
        // @ts-ignore
        super("button", props);
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
