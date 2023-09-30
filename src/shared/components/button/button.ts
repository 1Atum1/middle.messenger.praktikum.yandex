import Handlebars from "handlebars";
import {tmpl} from "./button.tmpl.ts";

export const Button = () => {
    return Handlebars.registerPartial('button', tmpl)
}
