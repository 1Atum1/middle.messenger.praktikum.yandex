import Handlebars from "handlebars";
import {Button} from "../../shared/components/button/button.ts";
import {Input} from "../../shared/components/input/input.ts";
import {tmpl} from "./registration.tmpl.ts";

export const Registration = () => {
    Input();
    Button();
    return Handlebars.compile(tmpl)
}
