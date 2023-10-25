export interface IInput {
    inputText: string,
    cssClassName?: string,
    nameAttr?: string,
    disabled?: boolean,
    type?: string,
    placeholder?: string,
    required?: boolean;
    errors?: string
    events?: {
        blur: () => void
    }
}
