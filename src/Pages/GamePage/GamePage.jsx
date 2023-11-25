import { useState } from 'react'
import WordCardMap from '../../Components/WordCardMap/WordCardMap'

export default function GamePage({ stateWords }) {
    const [countSlider, setCountSlider] = useState(0);

    return (
        <WordCardMap
            words={words}
            position={0} />
    )
}
