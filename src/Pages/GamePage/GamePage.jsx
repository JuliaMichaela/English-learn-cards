import { useState } from 'react'
import Slider from '../../Components/Slider/Slider';
import style from '../GamePage/gamePage.module.scss'


export default function GamePage({ stateWords }) {
    const [countSlider, setCountSlider] = useState(0);

    function prevSlider() {
        if (countSlider === 0) {
            setCountSlider(stateWords.words.length - 1);
            return
        }
        setCountSlider((prevSlider) => prevSlider - 1);
    }

    function nextSlider() {
        if (countSlider >= stateWords.words.length - 1) {
            setCountSlider(0);
            return
        }
        setCountSlider((prevSlider) => prevSlider + 1);
    }

    return (
        <div className={style.cardcontainer}>
            <button onClick={prevSlider}>Prev</button>
            <Slider {...stateWords.words[countSlider]} slideIndex={countSlider} />
            <button onClick={nextSlider}>Next</button>

        </div>

    )
}
