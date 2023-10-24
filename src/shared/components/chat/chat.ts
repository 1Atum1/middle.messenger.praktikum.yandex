import {tmpl} from "./chat.tmpl.ts";
import {Block} from "../../utils/block.ts";
import {Input} from "../input/input.ts";
import {onBlur} from "../../utils/validation.ts";
import {IInput} from "../../interfaces/input.interface.ts";

export const chatMessages = [
    {inputText: '', nameAttr: 'message', type: 'text', placeholder: '..you will type here', required: false,}
]

export class Chat extends Block {

    constructor() {
        super('div', {} );
    }

    init() {
        this.props.inputs = chatMessages;
        this.children.inputs = this.props.inputs.map((v: IInput, index: number) => {
            return new Input({
                inputText: v.inputText,
                placeholder: v.placeholder,
                type: v.type,
                nameAttr: v.nameAttr,
                errors: '',
                required: v.required,
                events: { 'blur': (event: Event) => {
                        return onBlur(v, event, index, this)}
                }
        })
    })
    }
    // nameAttr="message" type="text" placeholder="..you will type here" class="for-message"
    render() {
        return this.compile(tmpl, this.props)
    }
}
