import React, { useEffect } from 'react';

import SingleProject from '../singleProject/SingleProject';

import Aos from 'aos';
import "aos/dist/aos.css";
import styles from './Projects.module.css';

const myProjects = [
    {
        title: 'Photo Album App',
        details: 'Photo album app created with React',
        list: ['Authentication using Firebase. User is able to create a profile, login, logout and change profile’s email address or password.', 'Uploading photos from local computer.',
            'Pictures are saved on Firestore Database.'],
        tools: 'React.js, react-router-dom, npm, Material UI, firebase',
        img: 'album',
        codeURL: 'https://github.com/klaudiaholyst/pictures-collection-app',
        liveURL: 'https://auth-development-2a4ee.web.app/'
    },
    {
        title: 'Contacts App',
        details: 'Contacts app created with React',
        list: ['Initial contacts are uploaded from data.json',
            'Every new contact is saved on local storage'],
        tools: 'React.js, React Hooks, React Context, npm, Material UI, local storage',
        img: 'contacts',
        codeURL: 'https://github.com/klaudiaholyst/contacts-app',
        liveURL: 'https://klaudiaholyst.github.io/contacts-app/'
    },
    {
        title: 'Calculator',
        details: 'Simple calculator made with JavaScript',
        tools: 'JavaScript, Grid CSS',
        img: 'calculator',
        codeURL: 'https://github.com/klaudiaholyst/Calculator',
        liveURL: 'https://klaudiaholyst.github.io/Calculator/'
    },
    {
        title: 'Responsive Website',
        details: 'Simple responsive website. Styling done using BEM methodology.',
        tools: 'HTML, CSS, JavaScript',
        img: 'responsiveWebsite',
        codeURL: 'https://github.com/klaudiaholyst/Weekly-WebDev-Challenge-2',
        liveURL: 'https://klaudiaholyst.github.io/Weekly-WebDev-Challenge-2/'
    },
    {
        title: 'Responsive Section',
        details: 'Simple responsive four-card section made with HTML and CSS.',
        tools: 'HTML, CSS',
        img: 'responsiveSection',
        codeURL: 'https://github.com/klaudiaholyst/-Four-card-feature-section-challenge-from-Frontend-Mentor-',
        liveURL: 'https://four-card-feature-section-challenge-from-frontend-mentor.vercel.app/'
    },
    {
        title: 'Forms',
        details: 'Responsive page with forms. Used BEM methodology.',
        tools: 'HTML, CSS, BEM',
        img: 'forms',
        codeURL: 'https://github.com/klaudiaholyst/Weekly-WebDev-Challenge-1',
        liveURL: 'https://klaudiaholyst.github.io/Weekly-WebDev-Challenge-1/'
    },
]
const Projects = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <main className={styles.projects}>
            <h1 className={styles.componentTitle}>Projects</h1>
            {myProjects.map((project, index) => {
                return <SingleProject title={project.title}
                    details={project.details}
                    list={project.list}
                    tools={project.tools}
                    img={project.img}
                    codeURL={project.codeURL}
                    liveURL={project.liveURL}
                    key={index} />
            })}
        </main>
    )
}

export default Projects;