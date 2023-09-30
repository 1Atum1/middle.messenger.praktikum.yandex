export const tmpl =
    `<main class="auth-reg reg-form">
        <h2>Registration</h2>
        <form>
            <div class="input-wrapper">
                {{> input inputText='eMail' placeholder='Enter eMail' type='text'}}
                {{> input inputText='Login' placeholder='Enter login' type='text'}}
                {{> input inputText='Name' placeholder='Enter your name' type='text'}}
                {{> input inputText='Surname' placeholder='Enter your surname' type='text'}}
                {{> input inputText='Phone' placeholder='Enter your phone' type='text'}}
                {{> input inputText='Password' placeholder='Enter password' type='password'}}
                {{> input inputText='Confirm password' placeholder='Confirm password' type='password'}}
            </div>
            {{> button text='Signup'}}
        </form>
        <a href="/" class="to-auth">Login</a>
     </main>`;
