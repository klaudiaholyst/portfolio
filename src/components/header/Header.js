import React from 'react';

import styles from './Header.module.css';

const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.name}><p>Klaudia Holyst</p></div>
            <div className={styles.menu}>
                <ul className={styles.list}>
                    <li className={styles.item}>Home</li>
                    <li className={styles.item}>Projects</li>
                    <li className={styles.item}>About me</li>
                    <li className={styles.item}><button className={styles.button}>Contact</button></li>
                </ul>
            </div>
            
        </header>
    )
}

export default Header;