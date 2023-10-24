import {Block} from "../shared/utils/block.ts";

export class Unavailable extends Block {

    constructor() {
        super('', {});
    }

    render(): DocumentFragment {
        return this.compile(`<h1>500</h1>
         <p>server unavailable</p>`, this.props)
    }
}
