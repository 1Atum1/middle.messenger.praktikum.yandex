import {tmpl} from './input.tmpl.ts'
import {Block} from "../../utils/block.ts";

export class Input extends Block {
    constructor(props: unknown) {
        // Создаём враппер дом-элемент button
        super("div", props);
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
