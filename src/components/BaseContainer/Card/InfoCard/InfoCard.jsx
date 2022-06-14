import React from 'react'
import FadeInSection from '../../../Utils/FadeInSection'
import InfoPoint from './InfoPoint'

export default function InfoCard() {
  return (
    <FadeInSection>
        <p className='info-title'>Create the future of privacy first finance</p>
        <div className='info-group'>
          <InfoPoint title={<>Privacy-First</>} text={'Encrypted nature of secret contracts provide enhanced privacy to users'} lottieSrc={"https://assets7.lottiefiles.com/packages/lf20_me1uv4m6.json"}/>
          <InfoPoint title={<>Cross-Chain<br />Liquidity</>} text={'Bridging Secret Network to Ethereum, Binance Smart Chain, Cosmos, and beyond'} lottieSrc={"https://assets1.lottiefiles.com/packages/lf20_9b5b3qxs.json"}/>
          <InfoPoint title={<>Front-Running<br />Resistant</>} text={'Solving ~$1bn problem crippling DeFi users'} lottieSrc={"https://assets3.lottiefiles.com/packages/lf20_zfvn7pa1.json"}/>
        </div>
    </FadeInSection>
  )
}
