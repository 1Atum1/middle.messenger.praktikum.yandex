import {tmpl} from "./button.tmpl.ts";
import {Block} from "../../utils/block.ts";

export interface IButton {
    label: string,
    cssClassName?: string,
    events: {
        click: () => void
    }
}

export class Button extends Block {
    constructor(props: any) {
        // Создаём враппер дом-элемент button
        super("button", props);
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
