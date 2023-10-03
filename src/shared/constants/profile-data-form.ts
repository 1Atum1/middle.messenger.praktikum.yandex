import {inputForm} from "./input-form.interface.ts";

export const profileDataForm: inputForm[] = [
    { inputText: 'eMail', placeholder: 'Enter eMail', type: 'text', disabled: true, nameAttr: 'email'},
    { inputText: 'Login', placeholder: 'Enter login', type: 'text', disabled: true, nameAttr: 'login' },
    { inputText: 'Name', placeholder: 'Enter your name', type: 'text', disabled: true, nameAttr: 'first_name' },
    { inputText: 'Surname', placeholder: 'Enter your surname', type: 'text', disabled: true, nameAttr: 'second_name' },
    { inputText: 'Chat name', placeholder: 'Enter chat name', type: 'text', disabled: true, nameAttr: 'display_name'},
    { inputText: 'Phone', placeholder: 'Enter phone', type: 'text', disabled: true, nameAttr: 'phone'},
]

export const editProfileDataForm: inputForm[] = [
    { inputText: 'eMail', placeholder: 'Enter eMail', type: 'text', disabled: false, nameAttr: 'email'},
    { inputText: 'Login', placeholder: 'Enter login', type: 'text', disabled: false, nameAttr: 'login' },
    { inputText: 'Name', placeholder: 'Enter your name', type: 'text', disabled: false, nameAttr: 'first_name' },
    { inputText: 'Surname', placeholder: 'Enter your surname', type: 'text', disabled: false, nameAttr: 'second_name' },
    { inputText: 'Chat name', placeholder: 'Enter chat name', type: 'text', disabled: false, nameAttr: 'display_name'},
    { inputText: 'Phone', placeholder: 'Enter phone', type: 'text', disabled: false, nameAttr: 'phone'},
]
