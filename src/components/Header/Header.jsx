import style from './header.module.scss'
import logo from '../../assets/images/logo.png'

export default function Header() {
    return (
        <div className={style.header}>
            <img src={logo} alt={"logo"} />
            <div className={style.headerText}>Learning English Words</div>
            <nav className={style.navigator}>
                <ul>
                    <li className={style.menu}>Home</li>
                    <li className={style.menu}>Game</li>
                </ul>
            </nav>
        </div>
    )
}
