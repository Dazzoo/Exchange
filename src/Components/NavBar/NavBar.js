import styles from './NavBar.module.css'
import {NavLink} from "react-router-dom"
import React from 'react'

const NavBar = (props) => {

    return (
        <div className={styles.NavBar}>
            <ul>
                <li><NavLink  to="/convert" className={styles.nav} activeClassName={styles.active}>Convert</NavLink></li>
                <li><NavLink  to="/parse" className={styles.nav} activeClassName={styles.active}>Parse</NavLink></li>
            </ul>
        </div>
    )
}

export default NavBar;