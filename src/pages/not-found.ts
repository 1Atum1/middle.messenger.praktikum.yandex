import {Block} from "../shared/utils/block.ts";

export class NotFound extends Block {

    constructor() {
        super('', {});
    }

    render(): DocumentFragment {
        return this.compile(`<h1>404</h1>
         <p>page doesn't exist</p>`, this.props);
    }
}
