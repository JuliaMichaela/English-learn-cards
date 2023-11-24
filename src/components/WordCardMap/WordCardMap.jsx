import WordCard from '../WordCard/WordCard';

const WordCardMap = (props) => {

    const words = props.words;


    return (
        <div className={style.cardContainer}>
            <button className={style.button}>prev</button>
            <WordCard
                key={words.id}
                engVersion={words.english}
                rusVersion={words.russian}
                transcription={words.transcription}
            />
            <button className={style.button}>next</button>

        </div>
    )
}


export default WordCardMap;