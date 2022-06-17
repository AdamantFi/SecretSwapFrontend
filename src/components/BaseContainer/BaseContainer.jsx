/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './base.css'

function BaseContainer({children}) {

  return (
    <div className='base-window'>
      <div className='base-container' id='base'>
        {children}
        <div className='mobile-menu hidden' id='menu'>
          <div>
              <div>
                  <a href='https://docs.secretswap.net/' target="_blank">Learn More</a>
                  <a href='/faq'>FAQ</a>
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