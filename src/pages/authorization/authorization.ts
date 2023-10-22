import {Input} from "../../shared/components/input/input.ts";
import {Button} from "../../shared/components/button/button.ts";
import {Block} from "../../shared/utils/block.ts";
import {authForm} from "../../shared/constants/auth_reg-data-form.ts";
import {onBlur} from "../../shared/utils/validation.ts";

export class Authorization extends Block {

    constructor() {
        super('div', {title: "Authorization"} );
    }

    init() {
        this.children.button = new Button({
            label: 'Login',
            cssClassName: 'btn',
            events: { click: () => {return console.log('test')} }
        });

        authForm.forEach((v: any, index: number) => {
            this.children[`input${index}`] = new Input({
                inputText: v.inputText,
                placeholder: v.placeholder,
                type: v.type,
                nameAttr: v.nameAttr,
                errors: '',
                required: true,
                events: { 'blur': (event: any) => {

                    return onBlur(this, v, event, index)}
                }
            })
            }
        );

        // this.props.inputs = authForm;
        // this.children.inputs = this.props.inputs.map((v: any) => {
        //         return new Input({
        //             inputText: v.inputText,
        //             placeholder: v.placeholder,
        //             type: v.type,
        //             nameAttr: v.nameAttr
        //         })
        //     }
        // );
    }

    dispatchComponentDidMount() {

    }

    render() {
        // {{#each authForm as |data|}}
        // {{> input
        //     inputText=data.inputText
        //     placeholder=data.placeholder
        //     type=data.type
        //     nameAttr=data.nameAttr}}
        // {{/each}}
        return this.compile(
            `<main class="auth-reg auth-form">
        <h2>{{title}}</h2>
        <div>
            <div class="input-wrapper">
                <div class="input-container">
                    {{{input0}}}
                </div>
                <div class="input-container">
                    {{{input1}}}
                </div>
            </div>
            {{{button}}}
        </div>
        <a href="/registration" class="to-reg">Don't have an account?</a>
     </main>`, this.props)

    }
}
