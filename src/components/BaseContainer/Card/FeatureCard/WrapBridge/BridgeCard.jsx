import React from 'react'
import '../feature.css'

function BridgeCard() {
  return (
    <div className='wrap-bridge'>
      <h1 className='feature-card-title'>BRIDGE ASSETS</h1>
      <div className="wrap-bridge-group animate-enter">
        <div className='bridge-group'>
          <div className='bridge-left'>
              <div className='bridge-logos'>
                <img className='eth' src="/assets/eth-logo-white.png" alt="ETH Logo" />
                <img src="/assets/bnb-logo-white.png" alt="BNB Logo" />
                <img src="/assets/xmr-logo-white.png" alt="XMR Logo" />
              </div>
              <img src="/assets/bridge-assets.png" alt="Assets" />
              <img className='bridge-bnb' src="/assets/bnb-logo-3d.png" alt="BNB Logo" />
          </div>
          <div className='bridge-right'>
              <img className='bridge-bar' src="/assets/bridge-bar.png" alt="Bar" />
              <img src="/assets/eth-bridge.png" alt="ETH" />
              <img className='icon' src="/assets/swap-icon.png" alt="Swap" />
              <img src="/assets/scrt-eth-bridge.png" alt="sETH" />
          </div>
        </div>
        <a className='btn-app btn-ibc-wrap' href='https://bridge.scrt.network'>Bridge Assets</a>
      </div>
    </div>
  )
}

export default BridgeCard