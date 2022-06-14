/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import SocialMedia from '../../../Utils/SocialMedia'
import './hero.css'

function HeroCTA() {
  return (
    <div className='hero-cta-group animate-from-left'>
        <a className="btn-app btn-shrink solid secondary btn-expand" href="https://app.secretswap.net/swap" target="_blank">
            Buy SCRT
            <img className='btn-icon' src="/assets/gem-icon.png" alt="Right Arrow Icon" />
        </a>
        <a className="btn-app btn-shrink solid btn-expand" href="https://app.secretswap.net/swap" target="_blank">
            Learn More
            <img className='btn-icon' src="/assets/right-arrow-icon.png" alt="Right Arrow Icon" />
        </a>
        <SocialMedia className='btn-shrink'/>
    </div>
  )
}

export default HeroCTA