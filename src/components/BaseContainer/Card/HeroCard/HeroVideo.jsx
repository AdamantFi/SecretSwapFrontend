import React from 'react'
import './hero.css'

function HeroVideo() {

  return (
    <div className="video animate-from-right">
        <video
        src="https://cdn.animaapp.com/projects/622953a0a997594c4e216441/files/v3-1.mp4"
        loop
        controls
        autoPlay="autoplay"
        playsInline
        muted
        ></video>
    </div>
  );
}

export default HeroVideo