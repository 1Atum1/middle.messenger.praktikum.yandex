export function getAuthFormValues() {
    const data = {
        login: document.querySelector('[name="login"]')!.value,
        password: document.querySelector('[name="password"]')!.value
    }

    console.log(data);
}

export function getRegFormValues() {
    const data = {
        email: document.querySelector('[name="email"]')!.value,
        login: document.querySelector('[name="login"]')!.value,
        first_name: document.querySelector('[name="first_name"]')!.value,
        second_name: document.querySelector('[name="second_name"]')!.value,
        password: document.querySelector('[name="password"]')!.value,
        confirm_password: document.querySelector('[name="confirm_password"]')!.value,
    }

    console.log(data);
}
