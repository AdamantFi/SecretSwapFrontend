import React from 'react'
import BridgeCard from './BridgeCard'
import WrapCard from './WrapCard'
import '../feature.css'
import FadeInSection from '../../../../Utils/FadeInSection'

function WrapBridgeCard() {
  return (
    <FadeInSection>
      <div className='feature-card feature-non-first'>
        <div className="feature-group wrap-bridge-container">
          <WrapCard />
          <BridgeCard />
        </div>
      </div>
    </FadeInSection>
  )
}

export default WrapBridgeCard