import React from 'react'
import Hero from './Hero'
import HeroVideo from './HeroVideo';
import HeroUseApp from './HeroUseApp';
import HeroCTA from './HeroCTA';
import './hero.css'

function HeroCard() {
  return (
    <div className='hero-content'>
        <div className='hero-left'>
            <Hero />
            <HeroCTA />
        </div>
        <div className='hero-right'>
            <HeroVideo />
            <HeroUseApp />
        </div>
    </div>
  )
}

export default HeroCard