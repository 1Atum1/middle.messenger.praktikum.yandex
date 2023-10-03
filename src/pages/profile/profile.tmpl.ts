export const tmpl = `
    <main class="profile">
        {{> avatar avatarSrc='vite.svg' name='John Gold'}}
        <form>
        {{#each profileDataForm as |data|}}
            <div class="row">
                {{data.inputText}}
                {{> input inputText='' placeholder=data.placeholder type=data.type disabled=data.disabled }}
            </div>
        {{/each}}
        </form>
        <div class="links">
            <a href='/profile/edit'>Edit profile</a>
            <a href='/change-password'>Change password</a>
            <a class="logout" href='/authorization'>Logout</a>
        </div>
    </main>
`;

// {{> input inputText='' placeholder='Enter eMail' type='text'}}
// {{> input inputText='' placeholder='Enter login' type='text' }}
// {{> input inputText='' placeholder='Enter your name' type='text' }}
// {{> input inputText='' placeholder='Enter your surname' type='text' }}
// {{> input inputText='' placeholder='Enter chat name' type='text' }}
// {{> input inputText='' placeholder='Enter phone' type='text' }}
