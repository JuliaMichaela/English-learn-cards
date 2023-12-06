import { Link } from 'react-router-dom'
import style from '../HomePage/homePage.module.scss'
import learn from '../../assets/images/home.jpeg'

export default function HomePage() {
    return (
        <div className={style.container}>
            <div className={style.row}>
                <div className={style.column}>
                    <img className={style.img} src={learn} alt="learn_language" />
                </div>
                <div className={style.column}>
                    <h1>Learning English Words</h1>
                    <p>Приложение для изучения иностранного языка и расширения словарного запаса.</p>
                    <Link to="/game">Старт</Link>
                </div>
            </div>

        </div>
    )
}
