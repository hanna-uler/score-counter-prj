import { Formik, Form, Field } from "formik";
import css from './RoundOneForm.module.css'
// import { useId } from "react";

export default function RoundOneForm() {
    // const gameId = useId();
    const scoresObj = {
        plr1rnd1Score: 0,
        plr2rnd1Score: 0,
        plr3rnd1Score: 0,
        plr4rnd1Score: 0,
        plr1rnd2Score: 0,
        plr2rnd2Score: 0,
        plr3rnd2Score: 0,
        plr4rnd2Score: 0,
        plr1rnd3Score: 0,
        plr2rnd3Score: 0,
        plr3rnd3Score: 0,
        plr4rnd3Score: 0,
        plr1rnd4Score: 0,
        plr2rnd4Score: 0,
        plr3rnd4Score: 0,
        plr4rnd4Score: 0,
    }
    const handleScoresSubmit = (values, actions) => {
        console.log(values);
        const player1scores = values.plr1rnd1Score + values.plr1rnd2Score + values.plr1rnd3Score + values.plr1rnd4Score;
        console.log(player1scores);
        const player2scores = values.plr2rnd1Score + values.plr2rnd2Score + values.plr2rnd3Score + values.plr2rnd4Score;
        const player3scores = values.plr3rnd1Score + values.plr3rnd2Score + values.plr3rnd3Score + values.plr3rnd4Score;
        const player4scores = values.plr4rnd1Score + values.plr4rnd2Score + values.plr4rnd3Score + values.plr4rnd4Score;

        actions.formReset();
    }
    return (
        <Formik
            initialValues={scoresObj}
            onSubmit={handleScoresSubmit}
        >
            <Form>
                <fieldset className={css.fieldset}>
                    <legend className={css.legend}>Round One Scores</legend>
                    <label className={css.label} htmlFor='plr1rnd1Score'>
                        Player 1 Score
                    </label>
                    <Field
                        type='number'
                        name='plr1rnd1Score'
                        className={css.input}
                        id="plr1rnd1Score"
                    />
                    <label className={css.label} htmlFor="plr2rnd1Score">
                        Player 2 Score
                    </label>
                    <Field
                        type='number'
                        name='plr2rnd1Score'
                        className={css.input}
                        id="plr2rnd1Score"
                    />
                    <label className={css.label} htmlFor="plr3rnd1Score">
                        Player 3 Score
                    </label>
                    <Field
                        type='number' 
                        name='plr3rnd1Score' 
                        className={css.input} 
                        id="plr3rnd1Score"
                    />
                    <label className={css.label} htmlFor="plr4rnd1Score">
                        Player 4 Score
                    </label>
                    <Field
                        type='number'
                        name='plr4rnd1Score'
                        className={css.input}
                        id="plr4rnd1Score"
                    />
                </fieldset>
                <fieldset className={css.fieldset}>
                    <legend className={css.legend}>Round Two Scores</legend>
                    <label className={css.label} htmlFor='plr1rnd2Score'>
                        Player 1 Score
                    </label>
                    <Field
                        type='number'
                        name='plr1rnd2Score'
                        className={css.input}
                        id="plr1rnd2Score"
                    />
                    <label className={css.label} htmlFor="plr2rnd2Score">
                        Player 2 Score
                    </label>
                    <Field
                        type='number'
                        name='plr2rnd2Score'
                        className={css.input}
                        id="plr2rnd2Score"
                    />
                    <label className={css.label} htmlFor="plr3rnd2Score">
                        Player 3 Score
                    </label>
                    <Field
                        type='number' 
                        name='plr3rnd2Score' 
                        className={css.input} 
                        id="plr3rnd2Score"
                    />
                    <label className={css.label} htmlFor="plr4rnd2Score">
                        Player 4 Score
                    </label>
                    <Field
                        type='number'
                        name='plr4rnd2Score'
                        className={css.input}
                        id="plr4rnd2Score"
                    />
                </fieldset>
                <fieldset className={css.fieldset}>
                    <legend className={css.legend}>Round Three Scores</legend>
                    <label className={css.label} htmlFor='plr1rnd3Score'>
                        Player 1 Score
                    </label>
                    <Field
                        type='number'
                        name='plr1rnd3Score'
                        className={css.input}
                        id="plr1rnd3Score"
                    />
                    <label className={css.label} htmlFor="plr2rnd3Score">
                        Player 2 Score
                    </label>
                    <Field
                        type='number'
                        name='plr2rnd3Score'
                        className={css.input}
                        id="plr2rnd3Score"
                    />
                    <label className={css.label} htmlFor="plr3rnd3Score">
                        Player 3 Score
                    </label>
                    <Field
                        type='number' 
                        name='plr3rnd3Score' 
                        className={css.input} 
                        id="plr3rnd3Score"
                    />
                    <label className={css.label} htmlFor="plr4rnd3Score">
                        Player 4 Score
                    </label>
                    <Field
                        type='number'
                        name='plr4rnd3Score'
                        className={css.input}
                        id="plr4rnd3Score"
                    />
                </fieldset>
                <fieldset className={css.fieldset}>
                    <legend className={css.legend}>Pudding Scores</legend>
                    <label className={css.label} htmlFor='plr1rnd4Score'>
                        Player 1 Score
                    </label>
                    <Field
                        type='number'
                        name='plr1rnd4Score'
                        className={css.input}
                        id="plr1rnd4Score"
                    />
                    <label className={css.label} htmlFor="plr2rnd4Score">
                        Player 2 Score
                    </label>
                    <Field
                        type='number'
                        name='plr2rnd4Score'
                        className={css.input}
                        id="plr2rnd4Score"
                    />
                    <label className={css.label} htmlFor="plr3rnd4Score">
                        Player 3 Score
                    </label>
                    <Field
                        type='number' 
                        name='plr3rnd4Score' 
                        className={css.input} 
                        id="plr3rnd4Score"
                    />
                    <label className={css.label} htmlFor="plr4rnd4Score">
                        Player 4 Score
                    </label>
                    <Field
                        type='number'
                        name='plr4rnd4Score'
                        className={css.input}
                        id="plr4rnd4Score"
                    />
                </fieldset>
                <button type="submit">Count!</button>
            </Form>
        </Formik>
    )
}