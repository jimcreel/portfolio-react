import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function MakerSpacePage() {
    return(
        <>
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold text-5xl text-accent text-center p-10">
                    Custom Raspberry Pi Arcade Project </h1>
                <Carousel
                    autoPlay
                    showThumbs={false}
                    showStatus={false}
                    centerMode={true}
                    centerSlidePercentage={30}
                    infiniteLoop={true}
                >
                
                            <div className='max-w-sm'>
                                <h2 className="font-bold text-3xl text-accent text-center p-10">
                                    Prototype: a carboard template for proof of concept
                                </h2>
                                <img 
                                    className="object-contain rounded border-2 border-accent"
                                    src='assets/img/Prototype.PNG'></img>
                            </div>
                            <div className='max-w-sm'>
                                <h2 className = 'font-bold text-3xl text-accent text-center p-10'>
                                    PrototypeV2: mdf prototype with an acrylic top
                                </h2>
                                <img 
                                    className = 'object-contain rounded border-2 border-accent'
                                    src='assets/img/PrototypeV2.JPG'></img>
                            </div>
                            <div className='max-w-sm'>
                                <h2 className = 'font-bold text-3xl text-accent text-center p-10'>
                                    PrototypeV2: buttons and joysticks installed and tested
                                </h2>
                                <img 
                                    className = 'object-contain rounded border-2 border-accent'
                                    src='assets/img/PrototypeV3.JPG'></img>
                            </div>
                            <div className='max-w-sm'>
                                <h2 className = 'font-bold text-3xl text-accent text-center p-10'>
                                    Final: MDF top with acrylic overlay, plywood sides with cutouts for moving
                                </h2>
                                <img 
                                    className = 'object-contain rounded border-2 border-accent'
                                    src='assets/img/Final.JPEG'></img>
                            </div>
                            <div className='max-w-sm'>
                                <h2 className = 'font-bold text-3xl text-accent text-center p-10'>
                                    Final:  Piano hinge top for easy access to the inside
                                </h2>
                                <img 
                                    className = 'object-contain rounded border-2 border-accent'  
                                    src='assets/img/FinalSide.JPEG'></img>
                            </div>
                    
                </Carousel>
            </div>
        </>
    )
    

}