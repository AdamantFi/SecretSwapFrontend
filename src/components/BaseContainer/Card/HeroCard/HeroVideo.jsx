import React from 'react'
import './hero.css'

function HeroVideo() {

  return (
    <div className="background-glow animate-enter">
        <div className="video animate-enter">
            <video
            src="https://cdn.animaapp.com/projects/622953a0a997594c4e216441/files/what-is-sefi-slides-only-720px.mp4"
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