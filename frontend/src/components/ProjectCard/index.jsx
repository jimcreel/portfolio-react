import ReactCardFlip from "react-card-flip";
import { useState } from 'react';

export default function ProjectCard(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { cardData } = props;
  const { tech } = props;
  console.log(tech)
  

  function handleClick() {
    setIsFlipped(!isFlipped);
  }
  let techDiv = "loading...";
  if (cardData?.stack) {
    techDiv = cardData.stack.map((item, ind) => {
      let buildClass = "flex flex-wrap m-1 text-3xl" + " " + tech[0][item];
      console.log(buildClass)
      return <i className={buildClass} key={ind}></i>;
    });
  }

  return (
    <>
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="horizontal"
        className="w-[250px] "
      >
        <div className="border-2 border-secondary w-[250px] text-accent shadow-sm rounded p-5 m-2 text-center flex justify-center">
          <button onClick={handleClick}>
            <h1 className='mb-2'> {cardData.project}</h1>
            <div className="h-[150px] flex justify-center align-center">
              <img src={cardData.img} alt={cardData.title} className='max-w-[75%], max-h-[75%]' />
            </div>
            <div className="flex justify-center">
            {cardData.stack && techDiv}
            </div>
            <p className="text-accent text-2xl">{cardData.title}</p>
          </button>
        </div>
        <div className="border-2 border-secondary w-[250px] text-accent shadow-sm rounded p-5 m-2 flex flex-col align-center">
          <button onClick={handleClick}>
            <p>{cardData.text}</p>
          </button>
          {cardData.link &&
          <button className="bg-secondary text-accent rounded p-2 m-2">
            <a href={cardData.link} target="_blank" rel="noopener noreferrer">Visit Site</a>
          </button>}
        </div>
      </ReactCardFlip>
    </>
  );
}