export function getAuthFormValues() {
    const data = {
        login: (document.querySelector('[name="login"]') as HTMLInputElement).value,
        password: (document.querySelector('[name="password"]') as HTMLInputElement).value
    }

    console.log(data);
}

export function getRegFormValues() {
    const data = {
        email: (document.querySelector('[name="email"]') as HTMLInputElement).value,
        login: (document.querySelector('[name="login"]') as HTMLInputElement).value,
        first_name: (document.querySelector('[name="first_name"]') as HTMLInputElement).value,
        second_name: (document.querySelector('[name="second_name"]') as HTMLInputElement).value,
        password: (document.querySelector('[name="password"]') as HTMLInputElement).value,
        confirm_password: (document.querySelector('[name="confirm_password"]') as HTMLInputElement).value,
    }

    console.log(data);
}
