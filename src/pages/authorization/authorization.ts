import Handlebars from 'handlebars';
import {tmpl} from './authorization.tmpl.ts'
import {Input} from "../../shared/components/input/input.ts";
import {Button} from "../../shared/components/button/button.ts";

export const Authorization = () => {
    Input();
    Button();
    return Handlebars.compile(tmpl)
}
