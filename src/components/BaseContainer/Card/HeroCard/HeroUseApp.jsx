import React from 'react'

function HeroUseApp() {
  return (
    <div className="hero-use-app animate-enter">
        <div className="hero-use-app-group">
            <div className="animate-enter">
                <h1 className="hero-use-app-text">
                    Native SNIP-20 Assets
                </h1>
            </div>
            <div className="animate-enter">
                <img src="/assets/alter-logo.png" alt='Alter Logo'/>
                <img src="/assets/shade-logo.png" alt='Shade Logo'/>
            </div>
            <div className="animate-enter">
                <a className="btn-app btn-shrink hero-use-app-btn" href="https://app.secretswap.net/swap">
                    Swap Now
                </a>
            </div>
        </div>
    </div>
  );
}

export default HeroUseApp