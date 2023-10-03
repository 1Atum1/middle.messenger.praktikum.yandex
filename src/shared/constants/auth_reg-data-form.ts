
import {inputForm} from "./input-form.interface.ts";
export const authForm: inputForm[] = [
    { inputText: 'Login', placeholder: 'Enter login', type: 'text', nameAttr: 'login' },
    { inputText: 'Password', placeholder: 'Enter password', type: 'password', nameAttr: 'password' },
]

export const regForm: inputForm[] = [
    { inputText: 'eMail', placeholder: 'Enter eMail', type: 'text', nameAttr: 'email'},
    { inputText: 'Login', placeholder: 'Enter login', type: 'text', nameAttr: 'login' },
    { inputText: 'Name', placeholder: 'Enter your name', type: 'text', nameAttr: 'first_name' },
    { inputText: 'Surname', placeholder: 'Enter your surname', type: 'text', nameAttr: 'second_name' },
    { inputText: 'Password', placeholder: 'Enter password', type: 'password', nameAttr: 'password' },
    { inputText: 'Confirm password', placeholder: 'Confirm password', type: 'password', nameAttr: 'confirm_password' },
]
