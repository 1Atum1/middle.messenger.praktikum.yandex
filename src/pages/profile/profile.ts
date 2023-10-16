import Handlebars from "handlebars";
import {tmpl} from "./profile.tmpl.ts";
import {Avatar} from "../../shared/components/avatar/avatar.ts";
import {Input} from "../../shared/components/input/input.ts";

export const Profile = () => {
    Avatar();
    Input();
    return Handlebars.compile(tmpl)
}


