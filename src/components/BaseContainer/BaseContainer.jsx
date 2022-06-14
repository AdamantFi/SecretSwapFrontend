/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import HeroCard from './Card/HeroCard/HeroCard'
import InfoCard from './Card/InfoCard/InfoCard'
import HydroCard from './Card/FeatureCard/HydroCard'
import WrapBridgeCard from './Card/FeatureCard/WrapBridge/WrapBridgeCard'
import './base.css'

function BaseContainer() {
  return (
    <div className='base-window'>
      <div className='base-container' id='base'>
        <HeroCard />
        <InfoCard />
        <HydroCard />
        <WrapBridgeCard />
        <div className='mobile-menu hidden' id='menu'>
          <div>
              <div>
                  <a href='https://docs.secretswap.net/' target="_blank">Learn More</a>
                  <a href='https://secretswap.net/faq'>FAQ</a>
                  <a href='http://secretanalytics.xyz' target="_blank">Analytics</a>
                  <a href='https://bridge.scrt.network' target="_blank">Bridge</a>
                  <a href="https://app.secretswap.net/earn#Details" target="_blank">Top Pools</a>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BaseContainer