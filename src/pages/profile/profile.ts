import {Avatar} from "../../shared/components/avatar/avatar.ts";
import {Block} from "../../shared/utils/block.ts";
import {profileDataForm} from "../../shared/constants/profile-data-form.ts";
import {Input} from "../../shared/components/input/input.ts";

export class Profile extends Block {

    constructor() {
        super('div', {} );
    }

    init() {
        this.children.avatar = new Avatar({
            name: 'John Gold',
            avatarSrc: 'vite.svg',
            events: { click: () => console.log(12) }
        });

        profileDataForm.forEach((v: any, index: number) => {
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

        return this.compile(
            `
    <main class="profile">
        {{{avatar}}}
        <form>
            <div class="row">eMail {{{input0}}}</div>
            <div class="row">Login {{{input1}}}</div>
            <div class="row">Name {{{input2}}}</div>
            <div class="row">Surname {{{input3}}}</div>
            <div class="row">Chat name {{{input4}}}</div>
            <div class="row">Phone {{{input5}}}</div>
        </form>
        <div class="links">
            <a href='/profile/edit'>Edit profile</a>
            <a href='/change-password'>Change password</a>
            <a class="logout" href='/authorization'>Logout</a>
        </div>
    </main>
`, this.props)
    }
}


