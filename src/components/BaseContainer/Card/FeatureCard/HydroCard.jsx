/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import FadeInSection from '../../../Utils/FadeInSection'
import './feature.css'

function HydroCard() {
  return (
    <FadeInSection>
      <div className="feature-card">
        <h1 id='hydro-card-title' className='feature-card-title'>HYDRO</h1>
        <div className='hydro-group'>
          <div className='hydro-top'>
            <img src="/assets/hydro-title.png" alt="Title" />
            <p>Unlocking Cosmos Liquidity</p>
          </div>
          <div className='hydro-bottom'>
            <div></div>
            <div className='hydro-info'>
              <img src="/assets/hydro-title.png" alt="Title" />
              <a className='btn-app secondary' href="https://hydro.finance/" target="_blank">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  )
}

export default HydroCard