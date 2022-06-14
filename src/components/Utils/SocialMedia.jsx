/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import '../../index.css'

function SocialMedia() {
  return (
    <div className='social-media-group'>
        <a href="https://twitter.com/secret_swap" target="_blank" className='btn-expand'>
            <img className="social-media-icon" src="/assets/twitter-icon.png" alt='Twitter Icon'/>
        </a>
        <a href="https://discord.gg/mvc9KFvykM" target="_blank" className='btn-expand'>
            <img className="social-media-icon" src="/assets/discord-icon.png" alt='Discord Icon'/>
        </a>
        <a href="https://forum.scrt.network/c/secretswap/48" target="_blank" className='btn-expand'>
            <img className="social-media-icon" src="/assets/forum-icon.png" alt='Forum Icon'/>
        </a>
        <a href="https://t.me/secretswapnet" target="_blank" className='btn-expand'>
            <img className="social-media-icon" src="/assets/telegram-icon.png" alt='Telegram Icon'/>
        </a>
    </div>
  )
}

export default SocialMedia