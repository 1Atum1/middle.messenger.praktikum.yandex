import {Block} from "../../utils/block.ts";


export class ChatListItem extends Block {

    constructor(props: { userName: string; }) {
        super('div', props);
    }

    render(): DocumentFragment {
        return this.compile(`<li><div class="img"></div>{{userName}}</li>`, this.props)
    }
}
