import { Formik, Form, Field } from "formik";
import css from './SimpleCounterForm.module.css'

const scoresObj = {
    plr1rnd1Score: 0,
    plr2rnd1Score: 0,
    plr3rnd1Score: 0,
    plr4rnd1Score: 0,
    plr5rnd1Score: 0,
    plr1rnd2Score: 0,
    plr2rnd2Score: 0,
    plr3rnd2Score: 0,
    plr4rnd2Score: 0,
    plr5rnd2Score: 0,
    plr1rnd3Score: 0,
    plr2rnd3Score: 0,
    plr3rnd3Score: 0,
    plr4rnd3Score: 0,
    plr5rnd3Score: 0,
    plr1rnd4Score: 0,
    plr2rnd4Score: 0,
    plr3rnd4Score: 0,
    plr4rnd4Score: 0,
    plr5rnd4Score: 0,
}
export default function SimpleCounterForm({ player, onSubmit }) {
    console.log(player);
    // console.log(players[0]);

    // let [player1, player2, player3, player4, player5] = players;

    const handleScoresSubmit = (values, actions) => {
        console.log(values);
        const player1scores = values.plr1rnd1Score + values.plr1rnd2Score + values.plr1rnd3Score + values.plr1rnd4Score;
        const player2scores = values.plr2rnd1Score + values.plr2rnd2Score + values.plr2rnd3Score + values.plr2rnd4Score;
        const player3scores = values.plr3rnd1Score + values.plr3rnd2Score + values.plr3rnd3Score + values.plr3rnd4Score;
        const player4scores = values.plr4rnd1Score + values.plr4rnd2Score + values.plr4rnd3Score + values.plr4rnd4Score;
        const player5scores = values.plr5rnd1Score + values.plr5rnd2Score + values.plr5rnd3Score + values.plr5rnd4Score;
        console.log("Player 1 Score:", player1scores);
        console.log("Player 2 Score:", player2scores);
        console.log("Player 3 Score:", player3scores);
        console.log("Player 4 Score:", player4scores);
        console.log("Player 5 Score:", player5scores);
        onSubmit(player1scores, player2scores, player3scores, player4scores, player5scores);

        actions.resetForm();

    }
    return (
        <Formik
            initialValues={scoresObj}
            onSubmit={handleScoresSubmit}
        >
            <Form className={css.form}>
                <fieldset className={css.fieldset}>
                    <legend className={css.legend}>Round One Scores</legend>
                    <label className={css.label} htmlFor='plr1rnd1Score'>
                        Mom's Score
                    </label>
                    <Field
                        type='number'
                        name='plr1rnd1Score'
                        className={css.input}
                        id="plr1rnd1Score"
                    />
                    <label className={css.label} htmlFor="plr2rnd1Score">
                        Dad's Score
                    </label>
                    <Field
                        type='number'
                        name='plr2rnd1Score'
                        className={css.input}
                        id="plr2rnd1Score"
                    />
                    <label className={css.label} htmlFor="plr3rnd1Score">
                        Brother's Score
                    </label>
                    <Field
                        type='number' 
                        name='plr3rnd1Score' 
                        className={css.input} 
                        id="plr3rnd1Score"
                    />
                    <label className={css.label} htmlFor="plr4rnd1Score">
                        Sister's Score
                    </label>
                    <Field
                        type='number'
                        name='plr4rnd1Score'
                        className={css.input}
                        id="plr4rnd1Score"
                    />
                    <label className={css.label} htmlFor="plr5rnd1Score">
                        Guest's Score
                    </label>
                    <Field
                        type='number'
                        name='plr5rnd1Score'
                        className={css.input}
                        id="plr5rnd1Score"
                    />
                </fieldset>
                <fieldset className={css.fieldset}>
                    <legend className={css.legend}>Round Two Scores</legend>
                    <label className={css.label} htmlFor='plr1rnd2Score'>
                        Mom's Score
                    </label>
                    <Field
                        type='number'
                        name='plr1rnd2Score'
                        className={css.input}
                        id="plr1rnd2Score"
                    />
                    <label className={css.label} htmlFor="plr2rnd2Score">
                        Dad's Score
                    </label>
                    <Field
                        type='number'
                        name='plr2rnd2Score'
                        className={css.input}
                        id="plr2rnd2Score"
                    />
                    <label className={css.label} htmlFor="plr3rnd2Score">
                        Brother's Score
                    </label>
                    <Field
                        type='number' 
                        name='plr3rnd2Score' 
                        className={css.input} 
                        id="plr3rnd2Score"
                    />
                    <label className={css.label} htmlFor="plr4rnd2Score">
                        Sister's Score
                    </label>
                    <Field
                        type='number'
                        name='plr4rnd2Score'
                        className={css.input}
                        id="plr4rnd2Score"
                    />
                    <label className={css.label} htmlFor="plr5rnd2Score">
                        Guest's Score
                    </label>
                    <Field
                        type='number'
                        name='plr5rnd2Score'
                        className={css.input}
                        id="plr5rnd2Score"
                    />
                </fieldset>
                <fieldset className={css.fieldset}>
                    <legend className={css.legend}>Round Three Scores</legend>
                    <label className={css.label} htmlFor='plr1rnd3Score'>
                        Mom's Score
                    </label>
                    <Field
                        type='number'
                        name='plr1rnd3Score'
                        className={css.input}
                        id="plr1rnd3Score"
                    />
                    <label className={css.label} htmlFor="plr2rnd3Score">
                        Dad's Score
                    </label>
                    <Field
                        type='number'
                        name='plr2rnd3Score'
                        className={css.input}
                        id="plr2rnd3Score"
                    />
                    <label className={css.label} htmlFor="plr3rnd3Score">
                        Brother's Score
                    </label>
                    <Field
                        type='number' 
                        name='plr3rnd3Score' 
                        className={css.input} 
                        id="plr3rnd3Score"
                    />
                    <label className={css.label} htmlFor="plr4rnd3Score">
                        Sister's Score
                    </label>
                    <Field
                        type='number'
                        name='plr4rnd3Score'
                        className={css.input}
                        id="plr4rnd3Score"
                    />
                    <label className={css.label} htmlFor="plr5rnd3Score">
                        Guest's Score
                    </label>
                    <Field
                        type='number'
                        name='plr5rnd3Score'
                        className={css.input}
                        id="plr5rnd3Score"
                    />
                </fieldset>
                <fieldset className={css.fieldset}>
                    <legend className={css.legend}>Pudding Scores</legend>
                    <label className={css.label} htmlFor='plr1rnd4Score'>
                        Mom's Score
                    </label>
                    <Field
                        type='number'
                        name='plr1rnd4Score'
                        className={css.input}
                        id="plr1rnd4Score"
                    />
                    <label className={css.label} htmlFor="plr2rnd4Score">
                        Dad's Score
                    </label>
                    <Field
                        type='number'
                        name='plr2rnd4Score'
                        className={css.input}
                        id="plr2rnd4Score"
                    />
                    <label className={css.label} htmlFor="plr3rnd4Score">
                        Brother's Score
                    </label>
                    <Field
                        type='number' 
                        name='plr3rnd4Score' 
                        className={css.input} 
                        id="plr3rnd4Score"
                    />
                    <label className={css.label} htmlFor="plr4rnd4Score">
                        Sister's Score
                    </label>
                    <Field
                        type='number'
                        name='plr4rnd4Score'
                        className={css.input}
                        id="plr4rnd4Score"
                    />
                    <label className={css.label} htmlFor="plr5rnd4Score">
                        Guest's Score
                    </label>
                    <Field
                        type='number'
                        name='plr5rnd4Score'
                        className={css.input}
                        id="plr5rnd4Score"
                    />
                </fieldset>
                <button className={css.button} type="submit">Count!</button>
            </Form>
        </Formik>
    )
}