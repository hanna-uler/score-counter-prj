import css from "./Button.module.css"

export default function Button({btnType, btnText, onClick}) {
    return (
        <button onClick={onClick} type={btnType} className={css.btn}>{btnText}</button>
    )
    
}