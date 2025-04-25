import css from "./Button.module.css"

export default function Button({btnType, btnText}) {
    return (
        <button type={btnType} className={css.btn}>{btnText}</button>
    )
    
}