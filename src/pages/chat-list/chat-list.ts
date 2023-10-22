import {tmpl} from "./chat-list.tmpl.ts";
import {Chat} from "../../shared/components/chat/chat.ts";
import {Block} from "../../shared/utils/block.ts";


export class ChatList extends Block {

    constructor() {
        super('div', {} );
    }

    init() {
        this.children.chat = new Chat()
    }

    render() {
        return this.compile(tmpl, this.props)
    }
}
