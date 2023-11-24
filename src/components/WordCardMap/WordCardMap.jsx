import style from './WordCardMap.module.scss'

const WordCardMap = (props) => {

    const words = props.words;


    return (
        <div className={style.card - container}>
            <button className={style.button + style.btnPrev}>prev</button>
            <WordCard

                key={words.id}
                engVersion={words.english}
                rusVersion={words.russian}
                transcription={words.transcription}
            />
            <button className={style.button + style.btnNext}>next</button>

        </div>
    )
}


export default WordCardMap;