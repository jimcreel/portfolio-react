export default function MakerSpacePage() {
    return(
        <>
            <h1 className="font-bold text-5xl text-accent text-center"> Arcade Project</h1>
               <div className = 'flex flex-row flex-wrap max-w-75% justify-between p-15'>
                        <div className = 'flex flex-col items-center max-w-sm m-10'>
                            <h2 className="font-bold text-3xl text-accent text-center p-10">
                                Prototype: a carboard template for proof of concept
                            </h2>
                            <img 
                                className="object-contain rounded border-2 border-accent"
                                src='assets/img/Prototype.PNG'></img>
                        </div>
                        <div className = 'flex flex-col items-center max-w-sm m-10'>
                            <h2 className = 'font-bold text-3xl text-accent text-center p-10'>
                                PrototypeV2: mdf prototype with an acrylic top
                            </h2>
                            <img 
                                className = 'object-contain rounded border-2 border-accent'
                                src='assets/img/PrototypeV2.JPG'></img>
                        </div>
                        <div className = 'flex flex-col items-center max-w-sm m-10'>
                            <h2 className = 'font-bold text-3xl text-accent text-center p-10'>
                                PrototypeV2: buttons and joysticks installed and tested
                            </h2>
                            <img 
                                className = 'object-contain rounded border-2 border-accent'
                                src='assets/img/PrototypeV3.JPG'></img>
                        </div>
                        <div className = 'flex flex-col items-center max-w-sm m-10'>
                            <h2 className = 'font-bold text-3xl text-accent text-center p-10'>
                                Final: MDF top with acrylic overlay, plywood sides with cutouts for moving
                            </h2>
                            <img 
                                className = 'object-contain rounded border-2 border-accent'
                                src='assets/img/Final.JPEG'></img>
                        </div>
                        <div className = 'flex flex-col items-center max-w-sm m-10'>
                            <h2 className = 'font-bold text-3xl text-accent text-center p-10'>
                                Final:  Piano hinge top for easy access to the inside
                            </h2>
                            <img 
                                className = 'object-contain rounded border-2 border-accent'  
                                src='assets/img/FinalSide.JPEG'></img>
                        </div>
                </div>
        </>
    )
    

}