import React, { useState } from 'react';
import ProjectCard from '../ProjectCard';


export default function ProjectsPage({tech}) {
    
    
    const [descriptions] = useState([
        {
            project: 'Disney Reservation Checker',
            text: `The Disney reservation checker is a MEN stack app built with the Bootstrap CSS library. 
            The site pulls publicly available reservation data from Disney websites and displays it for the
              user filtered by resort, park, date, and annual pass. Requires a Google account to use.`,
            img: '/assets/img/Disneyland.png',
            link: 'http://magicreservations.jim-creel.com/', 
            stack: ['express', 'node', 'mongo', 'bootstrap', 'heroku']
            
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
        }

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