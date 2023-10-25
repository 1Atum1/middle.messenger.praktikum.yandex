import Handlebars from "handlebars";
import {Block} from "../shared/utils/block.ts";

export class NotFound extends Block {

    constructor() {
        super('div', {});
    }

    render(): DocumentFragment {
        return this.compile(`<h1>404</h1>
         <p>page doesn't exist</p>`, this.props)
    }
}
