import React from 'react';

import {useHistory} from 'react-router-dom';

import styles from './Home.module.css';

const Home = () => {
    const history = useHistory();
    return (
        <div className={styles.home}>
            <div className={styles.description}>
                <h2 className={styles.profession}>Frontend Developer</h2>
                <h1 className={styles.name}>Klaudia Holyst</h1>
                <p className={styles.welcome}>Welcome on my page! Take a look on the projects, read something
                    about me and feel free to contact me!</p>
                <button onClick={ () => history.push('/projects') } className={styles.button}>Projects</button>
            </div>
            <div className={styles.img}></div>
        </div>
    )
}

export default Home;