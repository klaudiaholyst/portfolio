import React from 'react';

import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
        <div className={styles.customShape}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" className={styles.shapeFill}></path>
            </svg>
        </div>
        <div className={styles.description}>Klaudia Holyst, 2021</div>
        <div className={styles.description}>Icons made by <a href="https://www.freepik.com" title="Freepik" className={styles.description}>Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" className={styles.description}>www.flaticon.com</a></div>
    </footer>
                )
}

export default Footer;