import Button from "../Button/Button"
import { useId } from "react";
import css from "./PlayersNamesForm.module.css"
import { Formik, Form, Field } from "formik";

const namesObj = {
    player1name: "",
    player2name: "",
    player3name: "",
    player4name: "",
    player5name: "",
}
export default function PlayersNamesForm({ onNamesSubmit }) {
    const gameId = useId();
    const handleSubmit = (values, actions) => {
        const player1name = values.player1name;
        const player2name = values.player2name;
        const player3name = values.player3name;
        const player4name = values.player4name;
        const player5name = values.player5name;
        onNamesSubmit(player1name, player2name, player3name, player4name, player5name);
        actions.resetForm()
    }
    return (
        <div className={css.container}>
            <h2 className={css.title}>Who's playing?</h2>
            <Formik initialValues={namesObj} onSubmit={handleSubmit}>
            <Form className={css.form}>
                <label className={css.label} htmlFor={`${ gameId }-plr1`}>Player's name</label>
                <Field className={css.input} type="text" name="player1name" id={`${ gameId }-plr1`} />
                <label className={css.label} htmlFor={`${ gameId }-plr2`}>Player's name</label>
                <Field className={css.input} type="text" name="player2name" id={`${ gameId }-plr2`} />
                <label className={css.label} htmlFor={`${ gameId }-plr3`}>Player's name</label>
                <Field className={css.input} type="text" name="player3name" id={`${ gameId }-plr3`} />
                <label className={css.label} htmlFor={`${ gameId }-plr4`}>Player's name</label>
                <Field className={css.input} type="text" name="player4name" id={`${ gameId }-plr4`} />
                <label className={css.label} htmlFor={`${ gameId }-plr5`}>Player's name</label>
                <Field className={css.input} type="text" name="player5name" id={`${gameId}-plr5`} />
                <button className={css.btn} type="submit">Submit</button>
            </Form>
            </Formik>
            
            </div>
    )
}

// Prev version
// import Button from "../Button/Button"
// import { useId } from "react";
// import css from "./PlayersNamesForm.module.css"

// export default function PlayersNamesForm({ onNamesSubmit }) {
//     const name1Id = useId();
//     const name2Id = useId();
//     const name3Id = useId();
//     const name4Id = useId();
//     const name5Id = useId();

//     const handleSubmit = (evt) => {
//         evt.preventDefault();
//         // console.log(evt);
//         const form = evt.target;
//         const { name1, name2, name3, name4, name5 } = form.elements;
//         onNamesSubmit({
//             name1: name1.value,
//             name2: name2.value,
//             name3: name3.value,
//             name4: name4.value,
//             name5: name5.value,
//         });
//         // console.log(form);
//         // console.log(name1);
//         // console.log(name1.value);
//         form.reset;
//     }
//     return (
//         <form className={css.form} onSubmit={handleSubmit}>
//             <label htmlFor={name1Id}>First player name:</label>
//             <input type="text" name="name1" id={name1Id} />

//             <label htmlFor={name2Id}>Second player name:</label>
//             <input type="text" name="name2" id={name2Id}/>

//             <label htmlFor={name3Id}>Third player name:</label>
//             <input type="text" name="name3" id={name3Id}/>

//             <label htmlFor={name4Id}>Forth player name:</label>
//             <input type="text" name="name4" id={name4Id}/>

//             <label htmlFor={name5Id}>Fifth player name:</label>
//             <input type="text" name="name5" id={name5Id}/>

//             <Button className={css.btn} btnType="submit" btnText="Submit"/>
//     </form>
//   );
// }