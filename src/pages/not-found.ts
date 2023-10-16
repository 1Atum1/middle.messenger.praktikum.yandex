import Handlebars from "handlebars";

export const NotFound = () => {
    return Handlebars.compile(
        `<h1>404</h1>
         <p>page doesn't exist</p>`
    )
}
