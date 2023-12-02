import Table from "../../Components/Table/Table";
import style from '../TablePage/tablePage.module.scss'


export default function TablePage() {
    return (
        <div className={style.tableContainer}>
            <Table />
        </div>
    )
}
