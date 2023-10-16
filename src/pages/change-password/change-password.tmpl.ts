export const tmpl = `
    <main class="profile">
    {{> avatar avatarSrc='../public/vite.svg' name=''}}
    <form>
        <div class="row">
            Old password
            {{> input 
                inputText=''
                placeholder='Enter password'
                type='password'
                disabled=false
                nameAttr='oldPassword'}}
        </div>
        <div class="row">
            New password
            {{> input 
                inputText='' 
                placeholder='Enter password'
                type='password'
                disabled=false
                nameAttr='newPassword'}}
        </div>
        <div class="row">
            Confirm password
            {{> input 
                inputText=''
                placeholder='Enter password'
                type='password'
                disabled=false}}
        </div>
    </form>
    <a href="/profile">
        {{> button text='Save'}}
    </a>
    </main>
`
