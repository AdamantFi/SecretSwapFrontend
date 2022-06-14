import React from 'react'
import './hero.css'

function HeroVideo() {

  return (
    <div className="background-glow animate-from-right">
        <div className="video">
            <video
            src="https://cdn.animaapp.com/projects/622953a0a997594c4e216441/files/v3-1.mp4"
            loop
            controls
            autoPlay="autoplay"
            playsInline
            muted
            ></video>
        </div>
    </div>
  );
}

export default HeroVideo