import Button from "../Button/Button"
import css from "./Header.module.css"

export default function Header({onClick}) {
    const handleClick = (evt) => {
        // console.log("play");
        // console.log("evt:", evt);
        // console.log("Evt.target:", evt.target);
        // console.log("textContent:", evt.target.textContent);
        onClick(evt.target.textContent);
    }

    return (
        <div className={css.container}>
            <h1 className={css.title}>Welcome to SushiGo Score Counter!</h1>
            <p className={css.question}>Please make your choice to continue</p>
            <Button onClick={handleClick} btnType="button" btnText="Play!" />
            <Button onClick={handleClick} btnType="button" btnText="Rules" />
            <Button onClick={handleClick} btnType="button" btnText="Quick Summary"/>
        </div>
    )
}