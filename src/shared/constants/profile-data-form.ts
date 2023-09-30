interface ProfileForm {
    inputText: string;
    placeholder: string;
    type: string;
    disabled?: boolean;
}

export const profileDataForm: ProfileForm[] = [
    { inputText: 'eMail', placeholder: 'Enter eMail', type: 'text', disabled: true },
    { inputText: 'Login', placeholder: 'Enter login', type: 'text', disabled: true },
    { inputText: 'Name', placeholder: 'Enter your name', type: 'text', disabled: true },
    { inputText: 'Surname', placeholder: 'Enter your surname', type: 'text', disabled: true },
    { inputText: 'Chat name', placeholder: 'Enter chat name', type: 'text', disabled: true },
    { inputText: 'Phone', placeholder: 'Enter phone', type: 'text', disabled: true },
]

export const editProfileDataForm: ProfileForm[] = [
    { inputText: 'eMail', placeholder: 'Enter eMail', type: 'text', disabled: false },
    { inputText: 'Login', placeholder: 'Enter login', type: 'text', disabled: false },
    { inputText: 'Name', placeholder: 'Enter your name', type: 'text', disabled: false },
    { inputText: 'Surname', placeholder: 'Enter your surname', type: 'text', disabled: false },
    { inputText: 'Chat name', placeholder: 'Enter chat name', type: 'text', disabled: false },
    { inputText: 'Phone', placeholder: 'Enter phone', type: 'text', disabled: false },
]
