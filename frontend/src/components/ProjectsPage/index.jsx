import React, { useState } from 'react';
import ProjectCard from '../ProjectCard';


export default function ProjectsPage() {
    
    
    const [descriptions] = useState([
        {
            
            text: `The Disney reservation checker is a MEN stack app built with the Bootstrap CSS library. 
            The site pulls publicly available reservation data from Disney websites and displays it for the
              user filtered by resort, park, date, and annual pass. Requires a Google account to use.`,
            img: '/assets/img/Disneyland.png',
            link: 'https://magicreservations.jim-creel.com/'
            
        }, 
        {
           
            text: `Brick By Brick is a Django/Python LEGO inventory site powered by a postgreSQL database, 
            where you can track your LEGO sets and parts.`,
            img: '/assets/img/BrickByBrick.png',
            link: 'https://brickbybrick.jim-creel.com/'
        },
        {
            
            text: `MLB Info is a dynamic single page ReactJS site styled with Tailwind and powered by an 
            ExpressJS, NodeJS, and MongoDB backend.`,
            img: '/assets/img/MLBInfo.png',
            link: 'https://mlbscores.jim-creel.com/'
        }

    ])

    let cardDiv = 'loading...'
    console.log(descriptions)
    if (descriptions) {
        cardDiv = descriptions.map((card, ind) => {
            console.log(card)
            return <ProjectCard cardData = {card} key={ind} />
        })       
    }
 
    return (
        <>
        <div >
            <h1 className="font-bold text-5xl text-secondary text-center p-20"> Projects</h1>
            <div className='flex flex-row flex-wrap justify-center'>
                {cardDiv}
            </div>
        </div>
        </>
    )
}