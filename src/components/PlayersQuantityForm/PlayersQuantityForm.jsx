import css from "./PlayersQuantityForm.module.css"
import Button from "../Button/Button"

export default function PlayersQuantityForm({onQtySubmmit}) {
    const handleSubmit = (evt) => {
        evt.preventDefault();
        // console.log(evt);
        const form = evt.target;
        const { quantity } = form.elements;
        // console.log(form);
        // console.log(quantity);
        // console.log(quantity.value);
        onQtySubmmit(quantity.value);
        form.reset();
    }
    return (
    <form className={css.form} onSubmit={handleSubmit}>
            <input type="text" name="quantity" />
            <Button btnType="submit" btnText="Submit"/>
    </form>
  );
}