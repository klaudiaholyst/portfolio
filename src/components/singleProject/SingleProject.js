import { useState } from 'react';

import backgroundImg from '../../assets/Background.jpg';
import album from '../../assets/Album.png';
import calculator from '../../assets/Calculator.png';
import contacts from '../../assets/Contacts.png';
import responsiveSection from '../../assets/ResponsiveSection.png';
import forms from '../../assets/Forms.png';
import responsiveWebsite from '../../assets/ResponsiveWebsite.png';

import styles from './SingleProject.module.css';

const SingleProject = (props) => {
    const [images] = useState({
        'album': album,
        'calculator': calculator,
        'contacts': contacts,
        'responsiveSection': responsiveSection,
        'forms': forms,
        'responsiveWebsite': responsiveWebsite
    }
    )
    return (
        <article data-aos="fade-up" className={styles.project}>
                <div className={styles.projectDescription}>
                    <h2 className={styles.projectTitle}>{props.title}</h2>
                <div className={`${styles.imageContainer} ${styles.imageContainerMobile}`}>
                    <img src={images[props.img]} alt={props.title} className={styles.imageMobile}/>
                </div> 
                    <p className={styles.projectDetails}>
                        {props.details}
                    </p>
                    {props.list && <ul className={styles.list}>{props.list.map((item, i) =><li key={i} className={styles.projectDetails}>{item}</li>)}</ul>}
                    <h3>Technologies and tools</h3>
                    <p className={styles.projectDetails}>{props.tools}</p>
                    <div className={styles.buttonsContainer}>
                        <a href={props.liveURL} className={styles.button}>Live preview</a>
                        <a href={props.codeURL} className={styles.button}>Code</a>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <img src={backgroundImg} alt="bright background" className={styles.backgroundImage}/>
                    <img src={images[props.img]} alt={props.title} className={styles.image}/>
                </div>
            </article>
    )
}

export default SingleProject;
