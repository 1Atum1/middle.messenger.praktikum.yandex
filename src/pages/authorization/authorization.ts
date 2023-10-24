import {IInput, Input} from "../../shared/components/input/input.ts";
import {Button} from "../../shared/components/button/button.ts";
import {Block} from "../../shared/utils/block.ts";
import {authForm} from "../../shared/constants/auth_reg-data-form.ts";
import {onBlur} from "../../shared/utils/validation.ts";
import {getAuthFormValues} from "../../shared/utils/get-form-values.ts";

export class Authorization extends Block {

    constructor() {
        super('div', {title: 'Authorization'});
    }

    init() {
        this.children.button = new Button({
            label: 'Login',
            cssClassName: 'btn',
            events: { click: () => getAuthFormValues() }
        });

        this.props.inputs = authForm;
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
            }
        );
    }

    render() {
        return this.compile(
            `<main class="auth-reg auth-form">
        <h2>{{title}}</h2>
        <div class="form">
            <div class="input-wrapper">
                <div class="input-container">
                    {{{inputs}}}
                </div>
            </div>
            {{{button}}}
        </div>
        <a href="/registration" class="to-reg">Don't have an account?</a>
     </main>`, this.props)

    }
}
