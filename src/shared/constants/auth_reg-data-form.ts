
import {inputForm} from "./input-form.interface.ts";
export const authForm: inputForm[] = [
    { inputText: 'Login', placeholder: 'Enter login', type: 'text', nameAttr: 'login', required: true },
    { inputText: 'Password', placeholder: 'Enter password', type: 'password', nameAttr: 'password', required: true },
]

export const regForm: inputForm[] = [
    { inputText: 'eMail', placeholder: 'Enter eMail', type: 'text', nameAttr: 'email', required: true},
    { inputText: 'Login', placeholder: 'Enter login', type: 'text', nameAttr: 'login', required: true },
    { inputText: 'Name', placeholder: 'Enter your name', type: 'text', nameAttr: 'first_name', required: true },
    { inputText: 'Surname', placeholder: 'Enter your surname', type: 'text', nameAttr: 'second_name', required: true },
    { inputText: 'Password', placeholder: 'Enter password', type: 'password', nameAttr: 'password', required: true },
    { inputText: 'Confirm password', placeholder: 'Confirm password', type: 'password', nameAttr: 'confirm_password', required: true },
]
