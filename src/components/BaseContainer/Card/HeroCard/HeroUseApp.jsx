/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './hero.css'

function HeroUseApp() {
  return (
    <div className="hero-use-app animate-from-right">
        <div className="hero-use-app-group">
            <div >
                <h1 className="hero-use-app-text">
                    Native SNIP-20 Assets
                </h1>
            </div>
            <div>
                <img src="/assets/alter-logo.png" alt='Alter Logo'/>
                <img src="/assets/shade-logo.png" alt='Shade Logo'/>
            </div>
            <div>
                <a className="btn-app hero-use-app-btn" href="https://app.secretswap.net/pool#Provide" target="_blank">
                    Provide Liquidity
                </a>
            </div>
        </div>
    </div>
  );
}

export default HeroUseApp