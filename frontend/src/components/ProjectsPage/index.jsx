import React, { useState } from 'react';
import ProjectCard from '../ProjectCard';


export default function ProjectsPage({tech}) {
    
    
    const [descriptions] = useState([
        {
            project: 'Magic Reservations',
            text: `The Disney reservation checker is a React app built with the Bootstrap and Tailwind CSS libraries. 
            It uses an ExpressJS, NodeJS, and PostgreSQL backend to store user data and reservation information, and to send notifications.
            The site pulls publicly available reservation data from Disney websites and displays it for the
              user filtered by resort, park, date, and annual pass. There is a test user and password available on the site's login page`,
            img: '/assets/img/Disneyland.png',
            link: 'http://magicreservations.jim-creel.com/', 
            stack: ['express', 'node', 'postgresql', 'bootstrap', 'heroku', 'react', 'tailwind']
            
        }, 
        {
            project: 'Brick By Brick',
            text: `Brick By Brick is a Django/Python LEGO inventory site powered by a postgreSQL database, 
            where you can track your LEGO sets and parts.`,
            img: '/assets/img/BrickByBrick.png',
            link: 'http://brickbybrick.jim-creel.com/',
            stack: ['django', 'python', 'postgresql', 'heroku']
        },
        {
            project: 'MLB Info',
            text: `MLB Info is a dynamic single page ReactJS site styled with Tailwind and powered by an 
            ExpressJS, NodeJS, and MongoDB backend.`,
            img: '/assets/img/MLBInfo.png',
            link: 'http://mlbscores.jim-creel.com/',
            stack: ['react', 'express', 'node', 'mongo', 'tailwind', 'heroku']
        },
        {
            project: 'MakerSpace Projects',
            text: `This is a collection of images of projects I've designed and built.`,
            img: '/assets/img/MakerSpace.png',
            link: '/makerSpace',
            stack: ['react', 'express', 'node', 'python']
        }, 
        {
            project: 'Vue Weather App',
            text: `This is a simple weather app built with VueJS and the WeatherAPI.`,
            img: '/assets/img/weather.svg',
            link: 'http://weather.jim-creel.com/',
            stack: ['vue', 'vuetify','express', 'node', 'heroku', 'typescript']
        },
    ])

    let cardDiv = 'loading...'
    if (descriptions) {
        cardDiv = descriptions.map((card, ind) => {
            return <ProjectCard cardData = {card} key={ind} tech = {tech}/>
        })       
    }
 
    return (
        <>
        <div >
            <h1 className="font-bold text-5xl text-accent text-center p-20"> Projects</h1>
            <div className='flex flex-row flex-wrap justify-center'>
                {cardDiv}
            </div>
        </div>
        </>
    )
}