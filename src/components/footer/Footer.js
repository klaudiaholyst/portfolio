import React from 'react';
import { Switch, Route } from "react-router-dom";

import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Switch>
                <Route path="/about" >
                    <div className={styles.description}>Icons made by <a href="https://www.freepik.com" title="Freepik" className={styles.description}>Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" className={styles.description}>www.flaticon.com</a></div>
                </Route>
            </Switch>
            <div className={styles.description}>Created and coded by Klaudia Holyst, 2021</div>
        </footer>
    )
}

export default Footer;