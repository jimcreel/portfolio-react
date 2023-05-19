import ReactCardFlip from "react-card-flip";
import { useState } from 'react';

export default function ProjectCard(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { cardData } = props;
  console.log(cardData);

  function handleClick() {
    setIsFlipped(!isFlipped);
  }

  return (
    <>
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="horizontal"
        className="w-[200px] "
      >
        <div className="border-2 border-secondary w-[200px] text-accent shadow-sm rounded p-5 m-2 text-center ">
          <button onClick={handleClick}>
            <div className="h-[150px]">
              <img src={cardData.img} alt={cardData.title} className='max-w-[75%], max-h-[75%]' />
            </div>
            <p className="text-accent text-2xl">{cardData.title}</p>
          </button>
        </div>
        <div className="border-2 border-secondary w-[200px] text-accent shadow-sm rounded p-5 m-2 flex flex-col align-center">
          <button onClick={handleClick}>
            <p>{cardData.text}</p>
          </button>
          <button className="bg-secondary text-accent rounded p-2 m-2">
            <a href={cardData.link} target="_blank" rel="noopener noreferrer">Visit Site</a>
          </button>
        </div>
      </ReactCardFlip>
    </>
  );
}