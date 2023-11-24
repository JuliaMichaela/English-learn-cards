

export default function TableRow(props) {
    return (
        <tr>
            <td>{props.engVersion}</td>
            <td>{props.transcription}</td>
            <td>{props.rusVersion}</td>
            <td>
                <button>Save</button>
                <button>Edit</button>
                <button>Delete</button>
            </td>
        </tr>
    )
}
