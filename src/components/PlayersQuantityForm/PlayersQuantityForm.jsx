import css from "./PlayersQuantityForm.module.css"
import Button from "../Button/Button"

export default function PlayersQuantityForm() {
    
    return (
        <form className={css.form}>
            <input></input>
            <Button btnType="submit" btnText="Submit"/>
        </form>
    )
}