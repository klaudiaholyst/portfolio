import React, {useEffect} from 'react';

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
        img: 'album'
    },
    {
        title: 'Contacts App',
        details: 'Contacts app created with React',
        list: ['Initial contacts are uploaded from data.json',
            'Every new contact is saved on local storage'],
        tools: 'React.js, React Hooks, React Context, npm, Material UI, local storage',
        img: 'contacts'
    },
    {
        title: 'Calculator',
        details: 'Simple calculator made with JavaScript',
        tools: 'JavaScript, Grid CSS',
        img: 'calculator'
    },
    {
        title: 'Responsive Section',
        details: 'Simple responsive four-card section made with HTML and CSS.',
        tools: 'HTML, CSS',
        img: 'responsiveSection'
    },
    {
        title: 'Flexbox Challenge',
        details: 'Simple gallery, which shows more text when a user click on a photo.',
        tools: 'HTML, CSS, FlexBox',
        img: 'flexboxChallenge'
    },
    {
        title: 'Forms',
        details: 'Responsive page with forms. Used BEM methodology.',
        tools: 'HTML, CSS, BEM',
        img: 'forms'
    },
]
const Projects = () => {
    useEffect(() => {
    Aos.init({duration:2000});
    }, [])
    return (
        <main className={styles.projects}>
            <h1 className={styles.componentTitle}>Projects</h1>
            {myProjects.map(project => {
                return <SingleProject title={project.title}
                    details={project.details}
                    list={project.list}
                    tools={project.tools}
                    img={project.img} />
            })}
        </main>
    )
}

export default Projects;