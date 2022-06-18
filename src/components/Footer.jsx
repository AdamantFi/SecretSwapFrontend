import React from 'react'
import SocialMedia from './Utils/SocialMedia'

function Footer() {
  return (
    <div className='footer'>
        <SocialMedia />
        <div className='footer-secured-by'>
            <img className='footer-icon' src="/assets/secured-by-icon.png" alt="Secured By Icon" />
            <h3>secured by </h3>
            <img className='footer-logo' src="/assets/secret-network-logo.png" alt="Secret Network Logo" />
        </div>
    </div>
  )
}

export default Footer
