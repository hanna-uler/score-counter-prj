import Button from "../Button/Button"
import css from "./Header.module.css"

export default function Header({onClick}) {
    const handleClickPlay = () => {
        console.log("play");
        onClick("play");
    }

    const handleClickRules = () => {
        console.log("rules");
        onClick("rules");

    }
    return (
        <div className={css.container}>
            <h1 className={css.title}>Welcome to SushiGo Score Counter!</h1>
            <p className={css.question}>Please make your choice to continue</p>
            <Button onClick={handleClickPlay} btnType="button" btnText="Play!" />
            <Button onClick={handleClickRules} btnType="button" btnText="Rules" />
            <Button btnType="button" btnText="Quick Summary"/>
        </div>
    )
}