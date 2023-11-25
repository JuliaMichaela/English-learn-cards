import { NavLink } from 'react-router-dom'

import style from './header.module.scss'
import logo from '../../assets/images/logo.png'

export default function Header() {
    return (
        <div className={style.header}>
            <img src={logo} alt={"logo"} />
            <div className={style.headerText}>Learning English Words</div>
            <nav className={style.navigator}>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/game'>Game</NavLink>
                <NavLink to='/table'>Table</NavLink>
            </nav>
        </div>
    )
}
