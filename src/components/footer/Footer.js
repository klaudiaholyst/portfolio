import React from 'react';

import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
        <div className={styles.description}>Klaudia Holyst, 2021</div>
        <div className={styles.description}>Icons made by <a href="https://www.freepik.com" title="Freepik" className={styles.description}>Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" className={styles.description}>www.flaticon.com</a></div>
    </footer>
                )
}

export default Footer;