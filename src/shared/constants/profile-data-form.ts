import {inputForm} from "./input-form.interface.ts";

export const profileDataForm: inputForm[] = [
    { inputText: '', placeholder: 'Enter eMail', type: 'text', disabled: true, nameAttr: 'email'},
    { inputText: '', placeholder: 'Enter login', type: 'text', disabled: true, nameAttr: 'login' },
    { inputText: '', placeholder: 'Enter your name', type: 'text', disabled: true, nameAttr: 'first_name' },
    { inputText: '', placeholder: 'Enter your surname', type: 'text', disabled: true, nameAttr: 'second_name' },
    { inputText: '', placeholder: 'Enter chat name', type: 'text', disabled: true, nameAttr: 'display_name'},
    { inputText: '', placeholder: 'Enter phone', type: 'text', disabled: true, nameAttr: 'phone'},
]

export const editProfileDataForm: inputForm[] = [
    { inputText: '', placeholder: 'Enter eMail', type: 'text', disabled: false, nameAttr: 'email'},
    { inputText: '', placeholder: 'Enter login', type: 'text', disabled: false, nameAttr: 'login' },
    { inputText: '', placeholder: 'Enter your name', type: 'text', disabled: false, nameAttr: 'first_name' },
    { inputText: '', placeholder: 'Enter your surname', type: 'text', disabled: false, nameAttr: 'second_name' },
    { inputText: '', placeholder: 'Enter chat name', type: 'text', disabled: false, nameAttr: 'display_name'},
    { inputText: '', placeholder: 'Enter phone', type: 'text', disabled: false, nameAttr: 'phone'},
]
