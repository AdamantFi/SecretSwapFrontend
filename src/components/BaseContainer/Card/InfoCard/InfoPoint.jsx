import './info.css'
import React from 'react'
import Lottie from 'react-lottie-player';

function InfoPoint({title, text, lottieSrc}) {
  return <div className='info-point-group'>
            <h1 className="info-point-title">{title}</h1>
            <div className="info-video-rectangle screen">
                <Lottie
                    className='info-lottie'
                    path={lottieSrc}
                    background="transparent"
                    speed={1}
                    loop
                    play
                ></Lottie>
            </div>
            <p className="info-point-text">
                {text}
            </p>
        </div>;
}

export default InfoPoint;