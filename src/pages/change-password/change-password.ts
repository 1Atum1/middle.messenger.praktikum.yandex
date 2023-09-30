import Handlebars from "handlebars";
import {tmpl} from "./change-password.tmpl.ts";

export const ChangePassword = () => {
    return Handlebars.compile(tmpl)
}
