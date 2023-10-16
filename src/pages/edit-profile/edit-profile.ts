import Handlebars from "handlebars";
import {tmpl} from "./edit-profile.tmpl.ts";

export const EditProfile = () => {
    return Handlebars.compile(tmpl)
}
