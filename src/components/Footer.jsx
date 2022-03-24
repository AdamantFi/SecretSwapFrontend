import React from 'react'
import SocialMedia from './Utils/SocialMedia'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-cta'>
            <div className='footer-text-group'>
                <h2 className='footer-text-title'>Join the Community</h2>
                <p className='footer-text-body'>We are an amazing group of  DeFi enthusiasts who desire to build a platform our peers will love and profit from. So join the community, and we can assist you.</p>
                <SocialMedia />
            </div>
            <div className='footer-subscribe-group'>
                <h2>Subscribe for SecretSwap Updates</h2>
                <div className='footer-subscribe-line'>
                    <input className='input-email' type='email' placeholder='Enter Your Email' />
                    <button className='btn-app solid btn-subscribe btn-expand'>Subscribe</button>
                </div>
            </div>
        </div>
        <div className='footer-secured-by'>
            <img className='footer-icon' src="/assets/secured-by-icon.png" alt="Secured By Icon" />
            <h3>- secured by </h3>
            <img className='footer-logo' src="/assets/secret-network-logo.png" alt="Secret Network Logo" />
        </div>
    </div>
  )
}

export default Footer