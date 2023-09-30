export const tmpl = `
    <main class="profile">
        {{> avatar avatarSrc='../vite.svg' name=''}}
        <form>
        {{#each editProfileDataForm as |data|}}
            <div class="row">
                {{data.inputText}}
                {{> input inputText=data.text placeholder=data.placeholder type=data.type disabled=data.disabled }}
            </div>
        {{/each}}
        </form>
        <a href="/profile">
            {{> button text='Save'}}
        </a>
    </main>
`;
