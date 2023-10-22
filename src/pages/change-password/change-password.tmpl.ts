export const tmpl = `
    <main class="profile">
    {{{avatar}}}
    <form>
        <div class="row">
            Old password
            {{{input0}}}
        </div>
        <div class="row">
            New password
            {{{input1}}}
        </div>
        <div class="row">
            Confirm password
            {{{input2}}}
        </div>
    </form>
    <a href="/profile">{{{button}}}</a>
    </main>
`
