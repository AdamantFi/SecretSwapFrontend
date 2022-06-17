import React from 'react'
import BaseContainer from '../components/BaseContainer/BaseContainer'
import HeroCard from '../components/BaseContainer/Card/HeroCard/HeroCard'
import InfoCard from '../components/BaseContainer/Card/InfoCard/InfoCard'
import HydroCard from '../components/BaseContainer/Card/FeatureCard/HydroCard'
import WrapBridgeCard from '../components/BaseContainer/Card/FeatureCard/WrapBridge/WrapBridgeCard'

function Landing() {
  return (
    <BaseContainer>
        <HeroCard />
        <InfoCard />
        <HydroCard />
        <WrapBridgeCard />
    </BaseContainer>
  )
}

export default Landing