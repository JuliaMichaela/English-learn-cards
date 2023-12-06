import { useState } from 'react'
import Slider from '../../Components/Slider/Slider';
import style from '../GamePage/gamePage.module.scss'
// import WordCardMap from '../../Components/WordCardMap/WordCardMap'

export default function GamePage({ stateWords }) {
    const [countSlider, setCountSlider] = useState(0);

    function prevSlider() {
        setCountSlider((prevSlider) => prevSlider - 1);
    }

    function nextSlider() {
        setCountSlider((prevSlider) => prevSlider + 1);
    }

    return (
        <div className={style.cardcontainer}>
            <button onClick={prevSlider}>Prev</button>
            <Slider {...stateWords.words[countSlider]} />
            <button onClick={nextSlider}>Next</button>

        </div>

    )
}
