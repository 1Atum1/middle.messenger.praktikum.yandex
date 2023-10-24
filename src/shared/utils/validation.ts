import {IInput} from "../interfaces/input.interface.ts";

export function onBlur (v: IInput, event: Event | unknown, index: number, parent: unknown) {
    const errorsNode = event.target.parentNode.querySelector('.errors') as HTMLElement;
    let regex: RegExp;

    v.errors = !event.target.value && v.required ? "It's required!!!" : ""
    if (v.nameAttr === 'login') {
        regex = /^[A-Za-z][A-Za-z0-9_-]{2,19}$/;
        // if (regex.test(event.target.value)) {
        //     errorsNode.textContent = '';
        // } else {
        //     errorsNode.textContent = `${v.errors} The first letter must be capitalized, no spaces and no numbers.`;
        // }
    }

    if (v.nameAttr === 'password' || v.nameAttr === 'confirm_password') {
        regex = /^[A-Za-z][A-Za-z0-9_-]{2,19}$/;
    }

    if (v.nameAttr === 'first_name' || v.nameAttr === 'second_name') {
        console.log(1);
        regex = /^[A-ZА-ЯЁ][a-zA-ZА-ЯЁ]*$/
    }

    if (v.nameAttr === 'email') {
        regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    }

    if (v.nameAttr === 'phone') {
        regex = /^\+?\d{10,15}$/;
    }

    if (v.nameAttr === 'message') {
        regex = /^.*\S.*$/;
    }


    if (regex.test(event.target.value)) {
        errorsNode.textContent = '';
    } else {
        errorsNode.textContent = `${v.errors} Erorrs.`;
    }
    parent.children.inputs[index].setProps(v)
}
