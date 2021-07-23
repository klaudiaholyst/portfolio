import profilePicture from '../../assets/ProfilePicture.jpg';

import htmlLogo from '../../assets/technologies/html5.png';
import cssLogo from '../../assets/technologies/css.png';
import figmaLogo from '../../assets/technologies/figma.png';
import firebaseLogo from '../../assets/technologies/firebase.png';
import gitLogo from '../../assets/technologies/git.png';
import jsLogo from '../../assets/technologies/js.png';
import materialUiLogo from '../../assets/technologies/materialUI.png';
import reactLogo from '../../assets/technologies/react.png';
import skatesLogo from '../../assets/svg/roller-skate.svg';
import guitarLogo from '../../assets/svg/guitar.svg';
import keyLogo from '../../assets/svg/key.svg';

import styles from './About.module.css';

const About = () => {
    return (
            <main className={styles.about}>
                <h1 className={styles.componentTitle}>About</h1>
                <div className={styles.box}>
                    <div className={styles.descriptionContainer}>
                        <p className={styles.description}>I’m Klaudia Holyst,  Front End Developer, based in Vienna.
                            <br />
                            <br />
                            I graduated Management and Production Engineering on University of Science and Technology in Cracow, Poland. The curriculum of studies contained basics of SQL, R, Python and JavaScript. This is when my passion to Web Development started.
                            I was learning by myself at the beginning.
                            <br />
                            <br />
                            Since November 2020 I’ve been mentored by an experienced Full Stack Web Developer.</p>
                        <button className={styles.button}>Download my CV</button>
                    </div>
                    <div className={styles.imageContainer}>
                        <div className={styles.imageFrame}></div>
                        <img src={profilePicture} alt="woman smiling" className={styles.image} />
                    </div>
                </div>
                <h2 className={styles.subtitle}>Technolgies I've been using</h2>
                <div className={styles.technologiesContainer}>
                    <div className={styles.logoContainer}>
                        <img src={htmlLogo} alt="" className={styles.logoImg} />
                        <p className={styles.logoName}>HTML5</p>
                    </div>
                    <div className={styles.logoContainer}>
                        <img src={cssLogo} alt="" className={styles.logoImg} />
                        <p className={styles.logoName}>CSS3</p>
                    </div>
                    <div className={styles.logoContainer}>
                        <img src={jsLogo} alt="" className={styles.logoImg} />
                        <p className={styles.logoName}>JavaScript</p>
                    </div>
                    <div className={styles.logoContainer}>
                        <img src={reactLogo} alt="" className={styles.logoImg} />
                        <p className={styles.logoName}>React</p>
                    </div>
                    <div className={styles.logoContainer}>
                        <img src={gitLogo} alt="" className={styles.logoImg} />
                        <p className={styles.logoName}>git</p>
                    </div>
                    <div className={styles.logoContainer}>
                        <img src={firebaseLogo} alt="" className={styles.logoImg} />
                        <p className={styles.logoName}>Firebase</p>
                    </div>
                    <div className={styles.logoContainer}>
                        <img src={materialUiLogo} alt="" className={styles.logoImg} />
                        <p className={styles.logoName}>Material UI</p>
                    </div>
                    <div className={styles.logoContainer}>
                        <img src={figmaLogo} alt="" className={styles.logoImg} />
                        <p className={styles.logoName}>Figma</p>
                    </div>
                </div>
                <p className={styles.description}>To see my skills in action, check out the projects.</p>
                <h2 className={styles.subtitle}>Three random facts about me</h2>
                <div className={styles.factsContainer}>
                    <div className={styles.factBox}>
                        <img src={skatesLogo} alt="" className={styles.factImg} />
                        <p className={styles.logoName}>Inlineskating is my sport</p>
                    </div>
                    <div className={styles.factBox}>
                        <img src={guitarLogo} alt="" className={styles.factImg} />
                        <p className={styles.logoName}>Playing guitar and ukulele in free time</p>
                    </div>
                    <div className={styles.factBox}>
                        <img src={keyLogo} alt="" className={styles.factImg} />
                        <p className={styles.logoName}>Escape rooms fan</p>
                    </div>
                </div>
            </main>
    )
}
export default About;