import {tmpl} from "./chat-list.tmpl.ts";
import {Chat} from "../../shared/components/chat/chat.ts";
import {Block} from "../../shared/utils/block.ts";
import {ChatListItem} from "../../shared/components/chat-list-item/chat-list-item.ts";


export class ChatList extends Block {

    constructor() {
        super('div', {} );
    }

    init() {
        this.props.chatListItems = ['Вася', 'Петя', 'Игорь'];
        this.children.chatListItems = this.props.chatListItems.map((item: string) => {
            return new ChatListItem({
                userName: item
            })
        });
        this.children.chat = new Chat();
    }

    render() {
        return this.compile(tmpl, this.props)
    }
}
