import React from 'react'

function SupportFaq() {

  return (
    <div className="tabs">
        <div className="tab">
            <input type="checkbox" id='support-check1' className='faq-input'></input>
            <label className="tab-label first-tab" htmlFor='support-check1'>I accidentally transferred my tokens to a pair contract, is there anyway I can get them back?</label>
            <div className="tab-content">
                SecretSwap token pair secret contracts are ownerless. We have no special control over the pair secret contracts’ functionality; because of this, any tokens accidentally transferred to the token contract itself are lost forever. Please be careful!
            </div>
      </div>
      <div className="tab">
        <input type="checkbox" id='support-check2' className='faq-input'></input>
        <label className="tab-label" htmlFor='support-check2'>How can I get support for SecretSwap?</label>
        <div className="tab-content">
          You can use this chat to get support for all SecretSwap related issues.
        </div>
      </div>
      <div className="tab">
        <input type="checkbox" id='support-check3' className='faq-input'></input>
        <label className="tab-label last-tab" htmlFor='support-check3'>Will Keplr support SEFI staking at launch?</label>
        <div className="tab-content">
          SEFI is a SNIP-20 (secret token) and supported by Keplr like all other SNIP-20s.
        </div>
      </div>
    </div>
  )
}

export default SupportFaq