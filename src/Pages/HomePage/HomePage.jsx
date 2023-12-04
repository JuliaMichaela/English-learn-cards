import { Link } from 'react-router-dom'
import style from '../HomePage/homePage.module.scss'

export default function HomePage() {
    return (
        <div className={style.container}>
            <div className={style.row}>
                <div className={style.column}>
                    <img className={style.img} src="../../assets/images/home.jpeg" alt="learn_language" />
                </div>
                <div className={style.column}>
                    <h1>Learning English Words</h1>
                    <p>Приложение для изучения иностранного языка и расширения словарного запаса.</p>
                    <Link to="/table">Старт</Link>
                </div>
            </div>

        </div>
    )
}
