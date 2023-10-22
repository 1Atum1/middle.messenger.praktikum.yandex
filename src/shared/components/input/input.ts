import {tmpl} from './input.tmpl.ts'
import {Block} from "../../utils/block.ts";

export interface IInput {
    inputText: string,
    cssClassName?: string,
    nameAttr: string,
    disabled?: boolean,
    type?: string,
    placeholder?: string,
    events?: {
        blur: () => void
    }
}

export class Input extends Block {
    constructor(props: any) {
        // Создаём враппер дом-элемент button
        super("div", props);
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
