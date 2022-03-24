import React from 'react'
import './feature.css'

function HydroCard() {
  return (
    <div className="feature-card animate-enter">
      <h1 id='hydro-card-title' className='feature-card-title'>HYDRO</h1>
      <div className='hydro-group'>
        <div className='hydro-top'>
          <img src="/assets/hydro-title.png" alt="Title" />
          <p>Unlocking the Liquidity of the Cosmos</p>
        </div>
        <div className='hydro-bottom'>
          <div></div>
          <div className='hydro-info'>
            <img src="/assets/hydro-title.png" alt="Title" />
            <a className='btn-app secondary' href="/">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HydroCard