import { useEffect, useState } from "react"


export default function TableRow(props) {

    const [inputEng, setInputEng] = useState('');
    const [inputTrans, setInputTrans] = useState('');
    const [inputRus, setInputRus] = useState('');
    const [editWord, setEditWord] = useState(false);

    useEffect(() => {
        setInputEng(props.engVersion)
        setInputTrans(props.transcription)
        setInputRus(props.rusVersion)
    }, [props]);

    function editSaveWords() {
        const obj = {
            id:
        }
        editWord(props.id,)
    }

    return (
        <>
            {!editWord ? (
                <tr>
                    <td>{props.engVersion}</td>
                    <td>{props.transcription}</td>
                    <td>{props.rusVersion}</td>
                    <td>
                        <button onClick={() => setEditWord(true)}>Edit</button>
                        <button onClick={() => props.delWord(props.id)}>Delete</button>
                    </td>
                </tr>
            ) :
                (
                    <tr>
                        <td>
                            <input
                                type="text"
                                value={inputEng}
                                onChange={(e) => setInputEng(e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                value={inputTrans}
                                onChange={(e) => setInputTrans(e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                value={inputRus}
                                onChange={(e) => setInputRus(e.target.value)}
                            />
                        </td>
                        <td>
                            <button onClick={editSaveWords}>Save</button>
                            <button onClick={() => setEditWord(false)}>Edit</button>
                            <button onClick={() => props.delWord(props.id)}>Delete</button>
                        </td>
                    </tr>
                )}
        </>
    );
}

