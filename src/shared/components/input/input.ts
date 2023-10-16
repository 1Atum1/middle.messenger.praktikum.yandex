import Handlebars from "handlebars";
import {tmpl} from './input.tmpl.ts'

export const Input = () => {
    return Handlebars.registerPartial('input', tmpl)
}
