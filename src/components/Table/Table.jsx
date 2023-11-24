import style from './Table/table.module.scss'
import words from '../../data/words.json'
import TableRow from '../TableRow/TableRow'

export default function Table() {
    return (
        <div className={style.table}>
            <table>
                <thead>
                    <tr>
                        <th>Слово</th>
                        <th>Транскрипция</th>
                        <th>Перевод</th>
                        <th>Кпопки</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        words.map((item) =>
                            <TableRow
                                isEdited={false}
                                key={item.id}
                                engVersion={item.english}
                                rusVersion={item.russian}
                                transcription={item.transcription}>
                            </TableRow>)}
                </tbody>
            </table>
        </div>
    )
}
