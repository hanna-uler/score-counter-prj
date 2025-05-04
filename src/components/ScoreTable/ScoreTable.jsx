import css from './ScoreTable.module.css'
export default function ScoreTable({ players }) {
    return (
        <table className={css.table}>
            <thead className={css.tableHead}>
                <tr>
                    <th className={css.tableHeader}>Name</th>
                    <th className={css.tableHeader}>Round 1</th>
                    <th className={css.tableHeader}>Round 2</th>
                    <th className={css.tableHeader}>Round 3</th>
                    <th className={css.tableHeader}>Puddings</th>
                    <th className={css.tableHeader}>Total</th>
                </tr>
            </thead>
            <tbody>
                {players.map((player) => {
                    return (<tr className={css.row} key={player.id}>
                        <td className={css.tableData}>{player.name}</td>
                        <td className={css.tableData}>{player.roundOne}</td>
                        <td className={css.tableData}>{player.roundTwo}</td>
                        <td className={css.tableData}>{player.roundThree}</td>
                        <td className={css.tableData}>{player.pudding}</td>
                        <td className={css.tableData}>{player.total}</td>
                    </tr>);
                            })}
            </tbody>
        </table>
    )
}