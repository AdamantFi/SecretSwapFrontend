import React from 'react'
import SocialMedia from '../../../Utils/SocialMedia'
import './hero.css'
import '../../../../index.css'

function HeroCTA() {
  return (
    <div className='hero-cta-group'>
        <a className="btn-app btn-shrink solid secondary btn-expand" href="https://app.secretswap.net/swap">
            Buy SCRT
            <img className='btn-icon' src="/assets/gem-icon.png" alt="Right Arrow Icon" />
        </a>
        <a className="btn-app btn-shrink solid btn-expand" href="https://app.secretswap.net/swap">
            Learn More
            <img className='btn-icon' src="/assets/right-arrow-icon.png" alt="Right Arrow Icon" />
        </a>
        <SocialMedia className='btn-shrink'/>
    </div>
  )
}

export default HeroCTA