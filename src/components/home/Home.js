import React, {useEffect} from 'react';

import {useHistory} from 'react-router-dom';

import Aos from 'aos';

import "aos/dist/aos.css";
import styles from './Home.module.css';

const Home = () => {
    useEffect(() => {
        Aos.init({duration:2000});
        }, [])
    const history = useHistory();
    return (
        <div className={styles.home}>
            <div className={styles.description} data-aos="fade-right">
                <h2 className={styles.profession}>Junior Frontend Developer</h2>
                <h1 className={styles.name}>Klaudia Holyst</h1>
                <div className={styles.imgMobile}></div>
                <p className={styles.welcome}>Welcome on my page! Take a look on the projects, read something
                    about me and feel free to contact!</p>
                <button onClick={ () => history.push('/projects') } className={styles.button}>Projects</button>
            </div>
            <div className={styles.img} data-aos="fade-left"></div>
        </div>
    )
}

export default Home;