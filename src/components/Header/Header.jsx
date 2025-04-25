import Button from "../Button/Button"
import css from "./Header.module.css"

export default function Header() {
    return (
        <div className={css.container}>
            <h1 className={css.title}>Welcome to SushiGo Score Counter!</h1>
            <p className={css.question}>Please make your choice to continue</p>
            <Button btnText="Let's Play!" />
            <Button btnText="Rules" />
            <Button btnText="Quick Summary"/>
        </div>
    )
}