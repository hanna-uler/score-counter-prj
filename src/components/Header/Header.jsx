import Button from "../Button/Button"
import css from "./Header.module.css"

export default function Header({}) {
    // const handleClick = (evt) => {
    //     onClick(evt.target.textContent);
    // }

    return (
        <div className={css.container}>
            <h1 className={css.title}>Welcome to SushiGo Score Counter!</h1>
            <p className={css.subtitle}>Track points with ease — round by round!</p>

            {/* <p className={css.question}>Please make your choice to continue</p> */}
            {/* <Button onClick={handleClick} btnType="button" btnText="Play!" />
            <Button onClick={handleClick} btnType="button" btnText="Rules" />
            <Button onClick={handleClick} btnType="button" btnText="Quick Summary"/> */}
        </div>
    )
}