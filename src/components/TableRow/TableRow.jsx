import { useState } from "react"


export default function TableRow(props) {

    const [inputEng, setInputEng] = useState('');
    const [inputTrans, setInputTrans] = useState('');
    const [inputRus, setInputRus] = useState('');
    const [editWord, setEditWord] = useState(false);
    return (
        <tr>
            <td>{props.engVersion}</td>
            <td>{props.transcription}</td>
            <td>{props.rusVersion}</td>
            <td>
                <button>Save</button>
                <button>Edit</button>
                <button onClick={() => props.delWord(props.id)}>Delete</button>
            </td>
        </tr>
    )
}

