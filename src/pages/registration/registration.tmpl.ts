export const tmpl =
    `<main class="auth-reg reg-form">
        <h2>Registration</h2>
        <form>
            <div class="input-wrapper">
                {{#each regForm as |data|}}
                    {{> input 
                        inputText=data.inputText
                        placeholder=data.placeholder
                        type=data.type
                        nameAttr=data.nameAttr}}
                {{/each}}
            </div>
            {{> button text='Signup'}}
        </form>
        <a href="/" class="to-auth">Login</a>
     </main>`;
