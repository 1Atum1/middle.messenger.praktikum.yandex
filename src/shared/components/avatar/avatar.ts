import {tmpl} from "./avatar.tmpl.ts";
import './avatar.scss'
import {Block} from "../../utils/block.ts";

export interface IAvatar {
    avatarSrc: string,
    name?: string,
    events: {
        click: () => void
    }
}

export class Avatar extends Block {

    constructor(props: IAvatar) {
        // Создаём враппер дом-элемент button
        // @ts-ignore
        super("div", props);
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
