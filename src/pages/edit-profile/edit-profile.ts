import {tmpl} from "./edit-profile.tmpl.ts";
import {Block} from "../../shared/utils/block.ts";
import {Avatar} from "../../shared/components/avatar/avatar.ts";
import {editProfileDataForm} from "../../shared/constants/profile-data-form.ts";
import {Input} from "../../shared/components/input/input.ts";
import {Button} from "../../shared/components/button/button.ts";
import {IInput} from "../../shared/interfaces/input.interface.ts";

export class EditProfile extends Block {

    constructor() {
        super('div', {} );
    }

    init() {
        this.children.avatar = new Avatar({
            name: 'John Gold',
            avatarSrc: '../vite.svg',
            events: { click: () => console.log('test') }
        });

        this.children.button = new Button({
            label: 'Save',
            cssClassName: 'btn',
            events: { click: () => console.log('test') }
        });

        editProfileDataForm.forEach((v: IInput, index: number) => {
                this.children[`input${index}`] = new Input({
                    inputText: v.inputText,
                    placeholder: v.placeholder,
                    type: v.type,
                    nameAttr: v.nameAttr,
                    disabled: v.disabled
                })
            }
        );
    }

    render() {
        return this.compile(tmpl, this.props)
    }
}
