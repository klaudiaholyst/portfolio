import React from 'react';

import mail from '../../assets/svg/envelope-regular.svg';
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
                <a href="mailto:kklaudiaw@gmail.com"><img src={mail} className={styles.icon} alt="mail"/></a>
                <a href="mailto:kklaudiaw@gmail.com" className={styles.link}>kklaudiaw@gmail.com</a>
                <a href="https://github.com/klaudiaholyst/" rel="noreferrer" target="_blank"><img src={github} className={styles.icon} alt="github"/></a>
                <a href="https://github.com/klaudiaholyst/" rel="noreferrer" target="_blank" className={styles.link}>https://github.com/klaudiaholyst/</a>
                <a href="https://www.linkedin.com/in/klaudia-holyst/" target="_blank"><img src={linkedin} className={styles.icon} alt="linkedin"/></a>
                <a href="https://www.linkedin.com/in/klaudia-holyst/" target="_blank" className={styles.link}>https://www.linkedin.com/in/klaudia-holyst/</a>
                <img src={phone} className={styles.icon} alt="phone"/>
                <a href="tel:+43 688 64771139" className={styles.link}>+43 688 64771139</a>
            </div>
        </main>
    )
}

export default Contact;