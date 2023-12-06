export default function AboutPage({tech}) {

    // test comment
    let blurb = 'loading..'
    let techDiv = 'loading...'
    if (tech){
        blurb = <p>
        I'm a full stack software engineer looking for
        opportunities to collaborate on challenging projects.
        I enjoy working with large datasets and complex relational 
        data to create intuitive and responsive user interfaces.
        </p>   
    
        let techArray = Object.values(tech[0])
        techDiv = techArray.map((tech, ind) => {
            let buildClass = 'm-1' + ' ' + tech
            return <i className={buildClass} key={ind}></i>
        })
        
    }
    
    
    return (
        <> 
        <div className="flex justify-center">
         <div className="flex flex-col justify-between w-[70%] text-" > 
            <div className='text-secondary font-bold py-40'>
                {blurb}
            </div>
            <div className='text-accent m-5 justify-self-end text-lg w-[70%]'>
                My Experience: 
                <div className='flex flex-row flex-wrap justify-around text-4xl sm:text-6xl' >
          
                {techDiv}
                
                </div>
                </div>
            </div> 
        </div>
        
        </>
    )
}
