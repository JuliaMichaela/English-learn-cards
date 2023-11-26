import { useState } from 'react'
import Slider from '../../Components/Slider/Slider';
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
        <div>
            <button onClick={prevSlider}>Prev</button>
            <Slider {...stateWords.words[countSlider]} />
            {/* <WordCardMap
            words={words}
            position={0} /> */}
            <button onClick={nextSlider}>Next</button>

        </div>

    )
}
