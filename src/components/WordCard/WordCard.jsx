import style from './wordCard.module.scss'


export default function WordCard(props) {
    return (
        <div className={`${style.card} ${style.animation}`}>
            <div className={style.word}>{props.engVersion}</div>
            <div className={style.transcription}>{props.transcription}</div>
            <button className={style.button}>Проверить</button>
        </div>
    )
}
