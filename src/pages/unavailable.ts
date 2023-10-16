import Handlebars from "handlebars";

export const Unavailable = () => {
    return Handlebars.compile(
        `<h1>500</h1>
         <p>server unavailable</p>`
    )
}
