import css from './Winner.module.css'

export default function Winner({ player1, player2, player3, player4, player5 }) {
    // console.log(players);
    console.log(player1);

    return (
            <ul className={css.scoreList}>
                <li>{player1.name}: {player1.total}</li>
                <li>{player2.name}: { player2.total}</li>
                <li>{player3.name}: { player3.total}</li>
            <li>{player4.name}: {player4.total}</li>
            <li>{player5.name}: {player5.total}</li>
            </ul>
    )
}

// player1scores={ players[0].total} player2scores={ players[1].total} player3scores={ players[2].total} player4scores={ players[3].total} player5scores={ players[4].total}
// player1scores,player2scores, player3scores, player4scores,player5scores