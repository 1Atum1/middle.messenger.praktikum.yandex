
import {Button} from "../../shared/components/button/button.ts";
import {Input} from "../../shared/components/input/input.ts";
import {Block} from "../../shared/utils/block.ts";
import {regForm} from "../../shared/constants/auth_reg-data-form.ts";
import {onBlur} from "../../shared/utils/validation.ts";

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

        this.props.inputs = regForm;
        this.children.inputs = this.props.inputs.map((v: any, index: number) => {
                return new Input({
                    inputText: v.inputText,
                    placeholder: v.placeholder,
                    type: v.type,
                    nameAttr: v.nameAttr,
                    errors: '',
                    required: v.required,
                    events: { 'blur': (event: any) => {
                            return onBlur(v, event, index, this)}
                    }
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
            <div class="input-container">
                {{{inputs}}}
                </div>
            </div>
            {{{button}}}
        </form>
        <a href="/" class="to-auth">Login</a>
     </main>`, this.props)
    }
}
