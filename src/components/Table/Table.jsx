import style from '../Table/table.module.scss';
import words from '../../data/words.json';
import TableRow from '../TableRow/TableRow';

export default function Table({ words, setWords }) {

    function delWord(id) {
        const filterWords = words.filter((item) => item.id != id);
        setWords(filterWords);
    }

    function editWord(id, object) {
        const arrEditWords = words.map(item => {
            if (item.id === id) {
                item = object
                return item
            }
            return item
        })
    }

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
                    {words.map((item) => (
                        <TableRow
                            isEdited={false}
                            key={item.id}
                            engVersion={item.english}
                            rusVersion={item.russian}
                            transcription={item.transcription}
                            id={item.id}
                            delWord={delWord}
                            editWord={editWord}
                        >
                        </TableRow>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
