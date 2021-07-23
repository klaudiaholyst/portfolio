import React from 'react';

import {useHistory, NavLink} from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {

    const history = useHistory();

    return (
        <header className={styles.header}>
            <div onClick={ () => history.push('/') } className={styles.name}><p>Klaudia Holyst</p></div>
            <div className={styles.menu}>
                <ul className={styles.list}>
                    <li><NavLink exact to='/' activeClassName={styles.selected} className={styles.item}>Home</NavLink></li>
                    <li><NavLink to='/projects' activeClassName={styles.selected} className={styles.item}>Projects</NavLink></li>
                    <li><NavLink to='/about' activeClassName={styles.selected} className={styles.item}>About me</NavLink></li>
                    <li><NavLink to='/contact'><button className={styles.button}>Contact</button></NavLink></li>
                </ul>
            </div>
            
        </header>
    )
}

export default Header;