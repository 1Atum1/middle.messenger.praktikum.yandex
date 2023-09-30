export const tmpl =
    `<main class="auth-reg auth-form">
        <h2>Authorization</h2>
        <form>
            <div class="input-wrapper">
                {{> input inputText='Login' placeholder='Enter login' type='text'}}
                {{> input inputText='Password' placeholder='Enter password' type='password'}}
            </div>
            {{> button text='Login'}}
        </form>
        <a href="/registration" class="to-reg">Don't have an account?</a>
     </main>`;
