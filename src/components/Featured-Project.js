import React from 'react'

export default function FeaturedProject(props) {
    let divClass = "w-full p-8 bg-"+props.bgColor + " text-"+props.textColor;
    
    return (
        <div className={divClass}>
            <div className="flex">
                <div className="flex-1">
                    <h6 className="font-bold">Self-Driving Car</h6>
                    <p className="text-base">This project was created using a Tensorflow LSTM which would recieve images from the client robot and make predicition for which turns it should make. The pictures on the client were taken using OpenCV2 and would be sent over as raw pixels in the form of a real-time web socket. ....</p>
                </div>
                <div className="flex-1">
                    <p> Img</p>
                </div>
            </div>
        </div>
    )
}
