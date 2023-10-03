export const tmpl =
    `<main class="auth-reg auth-form">
        <h2>Authorization</h2>
        <form>
            <div class="input-wrapper">
                {{#each authForm as |data|}}
                    {{> input 
                        inputText=data.inputText
                        placeholder=data.placeholder
                        type=data.type
                        nameAttr=data.nameAttr}}
                {{/each}}
            </div>
            {{> button text='Login'}}
        </form>
        <a href="/registration" class="to-reg">Don't have an account?</a>
     </main>`;
