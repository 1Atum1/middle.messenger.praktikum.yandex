import {tmpl} from "./chat.tmpl.ts";
import {Block} from "../../utils/block.ts";
import {Input} from "../input/input.ts";

export class Chat extends Block {

    constructor() {
        super('div', {} );
    }

    init() {
        this.children.input = new Input({
            nameAttr: 'message',
            type: 'text',
            placeholder: '..you will type here',
            cssClassName: 'for-message'
        })
    }
    // nameAttr="message" type="text" placeholder="..you will type here" class="for-message"
    render() {
        return this.compile(tmpl, this.props)
    }
}
