import React, {useState} from 'react';

import { useHistory, NavLink } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {
    const [openNav, setOpenNav] = useState(false);
    const history = useHistory();

    return (
        <header className={styles.header}>
            <div onClick={() => history.push('/')} className={styles.name}><p>Klaudia Holyst</p></div>
            <button onClick={() => setOpenNav(!openNav)} className={styles.toggleButton}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </button>
            <div className={`${styles.menu} ${openNav && styles.active}`}>
                <ul className={styles.list}>
                    <li><NavLink exact to='/' onClick={() => setOpenNav(false)} activeClassName={styles.selected} className={styles.item}>Home</NavLink></li>
                    <li><NavLink to='/projects' onClick={() => setOpenNav(false)} activeClassName={styles.selected} className={styles.item}>Projects</NavLink></li>
                    <li><NavLink to='/about' onClick={() => setOpenNav(false)} activeClassName={styles.selected} className={styles.item}>About me</NavLink></li>
                    <li><NavLink to='/contact' onClick={() => setOpenNav(false)} className={`${styles.item} ${!openNav && styles.itemButton}`}>Contact</NavLink></li>
                </ul>
            </div>

        </header>
    )
}

export default Header;