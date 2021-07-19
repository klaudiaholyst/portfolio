import React from 'react';

import {useHistory} from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {

    const history = useHistory();

    return (
        <header className={styles.header}>
            <div onClick={ () => history.push('/') } className={styles.name}><p>Klaudia Holyst</p></div>
            <div className={styles.menu}>
                <ul className={styles.list}>
                    <li onClick={ () => history.push('/') } className={styles.item}>Home</li>
                    <li onClick={ () => history.push('/projects') } className={styles.item}>Projects</li>
                    <li onClick={ () => history.push('/about') } className={styles.item}>About me</li>
                    <li onClick={ () => history.push('/contact') } className={styles.item}><button className={styles.button}>Contact</button></li>
                </ul>
            </div>
            
        </header>
    )
}

export default Header;