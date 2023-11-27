import style from '../Slider/slider.module.scss';

export default function Slider({ english, transcription }) {
    return (
        <div className={`${style.card} ${style.animation}`}>
            <div className={style.word}>{english}</div>
            <div className={style.transcription}>{transcription}</div>
            <button className={style.button}>Проверить</button>
        </div>

    )
}
