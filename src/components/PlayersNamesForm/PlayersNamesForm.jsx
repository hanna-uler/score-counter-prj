import Button from "../Button/Button"
import { useId } from "react";
import css from "./PlayersNamesForm.module.css"

export default function PlayersNamesForm({ onNamesSubmit }) {
    const name1Id = useId();
    const name2Id = useId();
    const name3Id = useId();
    const name4Id = useId();
    const name5Id = useId();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        // console.log(evt);
        const form = evt.target;
        const { name1, name2, name3, name4, name5 } = form.elements;
        onNamesSubmit({
            name1: name1.value,
            name2: name2.value,
            name3: name3.value,
            name4: name4.value,
            name5: name5.value,
        });
        // console.log(form);
        // console.log(name1);
        // console.log(name1.value);
        form.reset;
    }
    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <label htmlFor={name1Id}>First player name:</label>
            <input type="text" name="name1" id={name1Id} />

            <label htmlFor={name2Id}>Second player name:</label>
            <input type="text" name="name2" id={name2Id}/>

            <label htmlFor={name3Id}>Third player name:</label>
            <input type="text" name="name3" id={name3Id}/>

            <label htmlFor={name4Id}>Forth player name:</label>
            <input type="text" name="name4" id={name4Id}/>

            <label htmlFor={name5Id}>Fifth player name:</label>
            <input type="text" name="name5" id={name5Id}/>

            <Button className={css.btn} btnType="submit" btnText="Submit"/>
    </form>
  );
}