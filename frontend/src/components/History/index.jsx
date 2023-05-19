
import ProjectCard from '../ProjectCard';
import { useState } from 'react';

export default function History() {
                    
    const [history] = useState([
        {
            title: 'Humanities',
            text: `I started my career
            as an Assistant Professor of English at the
            University of Wyoming. While there, I taught
             tech writing, horror film, and video games.
             I published my research in several academic
             journals across the world, and wrote a book
             about how the images and words we see in the world 
             tell us about who we are.`,
             img: '/assets/img/academics.png'

        },
        {
            title: 'Tech',
            text: `While my first career was in humanities, I always
            had one eye on the tech world. I am an avid gamer, 
            and I love to tinker with computers. I built my first
            computer in 1998, and I have been building them ever 
            since. When the COVID-19 pandemic hit, I taught myself 
            Python and the concrete outcomes of a potential web 
            developer career enticed me to make a career change. 
            I enrolled in General Assembly's Software Engineering 
            Immersive program, and am ready now to transition
            to a new career.`,
            img: '/assets/img/chip.png'
        },
        {
            title: 'Personal',
            text: `My family and I moved to Southern California where we enjoy
            the beach, legos, mountain biking, baseball, and Disneyland. I am
            open to work in and around Riverside, Orange, and San Diego
            counties. I am also open to remote work. Most importantly, 
            I want a challenging environment that values my unique skillset.`,
            img: '/assets/img/home.png'
        }
        
    ])
    let cardDiv = 'loading...'
        if (history) {
            cardDiv = history.map((card, ind) => {
                return <ProjectCard cardData = {card} key={ind} />
            })
        }
    return (
        <>
        <div className='flex flex-row flex-wrap justify-center'>
            {cardDiv}
        </div>
        </>
    )
}