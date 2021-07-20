import React from 'react';

import mail from '../../assets/svg/at-solid.svg';
import github from '../../assets/svg/github-brands.svg';
import linkedin from '../../assets/svg/linkedin-brands.svg';
import phone from '../../assets/svg/phone-solid.svg';

import styles from './Contact.module.css';

const Contact = () => {
    return (
        <main className={styles.contact}>
            <h1 className={styles.componentTitle}>Contact</h1>
            <p className={styles.description}>Feel free to contact me! :)</p>
            <div className={styles.container}>
                <img src={mail} className={styles.icon} alt="mail"/>
                <p className={styles.description}>Email</p>
                <p className={styles.description}>kklaudiaw@gmail.com</p>
                <img src={github} className={styles.icon} alt="github"/>
                <p className={styles.description}>GitHub</p>
                <p className={styles.description}>https://github.com/klaudiaholyst/</p>
                <img src={linkedin} className={styles.icon} alt="linkedin"/>
                <p className={styles.description}>LinkedIn</p>
                <p className={styles.description}>https://www.linkedin.com/in/klaudia-holyst-415088166/</p>
                <img src={phone} className={styles.icon} alt="phone"/>
                <p className={styles.description}>Phone</p>
                <p className={styles.description}>xxxxxxxxxxx</p>
            </div>
        </main>
    )
}

export default Contact;