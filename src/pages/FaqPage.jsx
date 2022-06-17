import React from 'react'
import BaseContainer from '../components/BaseContainer/BaseContainer'
import '../components/BaseContainer/FaqSection/faq.css'
import GeneralFaq from '../components/BaseContainer/FaqSection/GeneralFaq'
import SefiFaq from '../components/BaseContainer/FaqSection/SefiFaq'
import SupportFaq from '../components/BaseContainer/FaqSection/SupportFaq'

function FaqPage(props) {

  return (
      <BaseContainer>
        <div className='faq'>
            <div className='faq-sections'>
                <a href="#general">General</a>
                <a href="#sefi">SEFI</a>
                <a href="#support" className='lastSection'>Support</a>
            </div>
            <div id="general">
                <h1>General</h1>
                <GeneralFaq/>
            </div>
            <div id="sefi">
                <h1>SEFI</h1>
                <SefiFaq />
            </div>
            <div id="support">
                <h1>Support</h1>
                <SupportFaq />
            </div>
        </div>
    </BaseContainer>
  )
}

export default FaqPage