
import {Button} from "../../shared/components/button/button.ts";
import {Input} from "../../shared/components/input/input.ts";
import {Block} from "../../shared/utils/block.ts";
import {regForm} from "../../shared/constants/auth_reg-data-form.ts";
import {onBlur} from "../../shared/utils/validation.ts";
import {tmpl} from "./registration.tmpl.ts";
import {getRegFormValues} from "../../shared/utils/get-form-values.ts";

export class Registration extends Block {

    constructor() {
        super('div', {title: "Registration"} );
    }

    init() {
        this.children.button = new Button({
            label: 'Signup',
            cssClassName: 'btn',
            events: { click: () => getRegFormValues() }
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
        return this.compile(tmpl, this.props)
    }
}
