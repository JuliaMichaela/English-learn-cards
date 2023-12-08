import { useEffect, useState } from 'react'
import style from '../Slider/slider.module.scss';

export default function Slider({ english, transcription, russian, slideIndex }) {

    const [isVisible, setVisible] = useState(false);

    const handleShow = () => {
        setVisible(!isVisible)
    }

    useEffect(() => {
        setVisible(false);
    }, [slideIndex])


    return (
        <div key={slideIndex} className={`${style.card} ${style.animation}`}>
            <div className={style.word}>{english}</div>
            <div className={style.transcription}>{transcription}</div>
            <button className={isVisible ? "btnVisible word" : "btnTranslate"} disabled={isVisible} onClick={handleShow} >
                {isVisible ? russian : "Проверить"}
            </button>
        </div>

    )
}
