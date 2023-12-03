import { useState } from 'react'
import style from './wordCard.module.scss'


export default function WordCard(props) {

    const [isVisible, setVisible] = useState(false);

    const handleShow = () => {
        setVisible(!isVisible)
    }
    return (
        <div className={`${style.card} ${style.animation}`}>
            <div className={style.word}>{props.engVersion}</div>
            <div className={style.transcription}>{props.transcription}</div>
            <button className={isVisible ? "btnVisible word" : "btnTranslate"} disabled={isVisible} onClick={handleShow} >
                {isVisible ? props.rusVersion : "Проверить"}
            </button>
            {/* <button className={style.button}>Проверить</button> */}
        </div>
    )
}
