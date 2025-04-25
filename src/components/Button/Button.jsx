import css from "./Button.module.css"

export default function Button({btnText}) {
    return (
        <button type="button" className={css.btn}>{btnText}</button>
    )
    
}