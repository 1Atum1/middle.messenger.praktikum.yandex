import Handlebars from "handlebars";
import {tmpl} from "./avatar.tmpl.ts";
import './avatar.scss'

export const Avatar = () => {
    Handlebars.registerPartial('avatar', tmpl)
}
