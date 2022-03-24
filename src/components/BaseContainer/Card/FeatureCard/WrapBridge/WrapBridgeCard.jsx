import React from 'react'
import BridgeCard from './BridgeCard'
import WrapCard from './WrapCard'
import '../feature.css'

function WrapBridgeCard() {
  return (
    <div className='feature-card feature-non-first'>
      <div className="feature-group wrap-bridge-container animate-enter">
        <WrapCard />
        <BridgeCard />
      </div>
    </div>
  )
}

export default WrapBridgeCard