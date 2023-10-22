
import {Button} from "../../shared/components/button/button.ts";
import {Input} from "../../shared/components/input/input.ts";
import {Block} from "../../shared/utils/block.ts";
import {regForm} from "../../shared/constants/auth_reg-data-form.ts";

export class Registration extends Block {

    constructor() {
        super('div', {title: "Registration"} );
    }

    init() {
        this.children.button = new Button({
            label: 'Signup',
            cssClassName: 'btn',
            events: { click: () => console.log('test') }
        });

        regForm.forEach((v: any, index: number) => {
                this.children[`input${index}`] = new Input({
                    inputText: v.inputText,
                    placeholder: v.placeholder,
                    type: v.type,
                    nameAttr: v.nameAttr,
                    events: { click: () => console.log('test') }
                })
            }
        );
    }

    render() {
        return this.compile(
            `<main class="auth-reg reg-form">
        <h2>{{title}}</h2>
        <form>
            <div class="input-wrapper">
                {{{input0}}}
                {{{input1}}}
                {{{input2}}}
                {{{input3}}}
                {{{input4}}}
                {{{input5}}}
            </div>
            {{{button}}}
        </form>
        <a href="/" class="to-auth">Login</a>
     </main>`, this.props)
    }
}
