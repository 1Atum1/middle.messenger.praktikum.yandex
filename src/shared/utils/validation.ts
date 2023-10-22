export function onBlur (this: any, v: any, event, index) {
    if (v.inputText === 'Login') {
        v.errors = !event.target.value && v.required ? "It's required!!!" : ''
        const regex = /^[A-ZА-ЯЁ][a-zA-ZА-ЯЁ\-]*$/;

        if (regex.test(event.target.value)) { // не подойдет, нужно что то общее. переделать
            document.getElementById('validationMessage').textContent = '';
        } else {
            document.getElementById('validationMessage').textContent = `${v.errors} The first letter must be capitalized, no spaces and no numbers.`;
        }
    }

    if (v.inputText === 'Password') {

    }

    this.children[`input${index}`].setProps(v)
}
