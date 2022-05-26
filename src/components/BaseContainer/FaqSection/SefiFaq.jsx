import React from 'react'

function SefiFaq() {

  return (
    <div className="tabs">
        <div className="tab">
            <input type="checkbox" id='sefi-check1' className='faq-input'></input>
            <label className="tab-label first-tab" htmlFor='sefi-check1'>What is SEFI?</label>
            <div className="tab-content">
                SEFI is the governance token for SecretSwap and the Secret DeFi ecosystem. Users of SecretSwap can earn SEFI to participate in shaping the future of the first front-running resistant, privacy-first open financial system. SEFI is a SNIP-20 or Secret Token, which means all SEFI transactions and contract interactions are private.
            </div>
      </div>
      <div className="tab">
        <input type="checkbox" id='sefi-check2' className='faq-input'></input>
        <label className="tab-label" htmlFor='sefi-check2'>What is the total supply of SEFI?</label>
        <div className="tab-content">
          Total supply of SEFI is set at 1,000,000,000. This amount is a non-inflationary fixed supply set at launch. 10% of the SEFI supply will be distributed at the genesis event to SecretSwap LPs during the soft-launch, SCRT stakers who secure Secret Network, users (depositors) of Secret Network-Ethereum bridge and UNI holders (above 400 UNI). The remaining 90% of the supply will be distributed over 4 years with a deflationary schedule. For more on SEFI tokenomics.
        </div>
      </div>
      <div className="tab">
        <input type="checkbox" id='sefi-check3' className='faq-input'></input>
        <label className="tab-label" htmlFor='sefi-check3'>How can I claim my SEFI?</label>
        <div className="tab-content">
          Users will be able to claim SEFI both on Secret Network with their Keplr Wallet and on Ethereum with their Metamask wallet. Users can claim their SEFI airdrop on the SecretSwap application. After you’ve claimed your SEFI, you can provide liquidity to sSCRT/SEFI pool or stake your SEFI and continue to earn SEFI after genesis.
        </div>
      </div>
      <div className="tab">
        <input type="checkbox" id='sefi-check4' className='faq-input'></input>
        <label className="tab-label" htmlFor='sefi-check4'>Who else can earn SEFI after genesis?</label>
        <div className="tab-content">
          SecretSwap LPs and SEFI stakers will begin earning SEFI after genesis. Traders on SecretSwap will also earn SEFI, though not immediately at genesis. Currently eligible pools for LP rewards are sSCRT/SEFI, sSCRT/sETH, sSCRT/sWBTC, sSCRT/sUSDT, sETH/sWBTC.
        </div>
      </div>
      <div className="tab">
        <input type="checkbox" id='sefi-check5' className='faq-input'></input>
        <label className="tab-label" htmlFor='sefi-check5'>Will you be able to stake SEFI at launch?</label>
        <div className="tab-content">
          Yes, you can use this link to stake SEFI and participate in SecretSwap governance. Staking SEFI provides impermanent loss free yield. SEFI staking is done through a secret contract, using the SecretSwap application.
        </div>
      </div>
      <div className="tab">
        <input type="checkbox" id='sefi-check6' className='faq-input'></input>
        <label className="tab-label" htmlFor='sefi-check6'>What is the difference between an LP token and SEFI?</label>
        <div className="tab-content">
          LP tokens are crypto-assets (secretTokens)mathematical proof that represents your ownership of a pool. When Alice provides provided assets to a pool, she receives LP tokens. Hand holding LP tokens means holding the claim to getting those assets back. This is in contrast to SEFI, which is the SecretSwap governance token used for managing application layer changes. Staking LP tokens allows you to earn SEFI.
        </div>
      </div>
      <div className="tab">
        <input type="checkbox" id='sefi-check7' className='faq-input'></input>
        <label className="tab-label" htmlFor='sefi-check7'>Are rewards for SecretSwap LPs in SEFI or also in SCRT?</label>
        <div className="tab-content">
          All SecretSwap rewards and governance are based on SEFI.
        </div>
      </div>
      <div className="tab">
        <input type="checkbox" id='sefi-check8' className='faq-input'></input>
        <label className="tab-label" htmlFor='sefi-check8'>What is the difference between SEFI and SCRT when it comes to governance?</label>
        <div className="tab-content">
          SEFI is used as an application layer governance token specifically for Secret Swap parameters, developer fund spending, and application related changes. This is in contrast to SCRT, which is the native governance token of the Secret Network protocol layer.
        </div>
      </div>
      <div className="tab">
        <input type="checkbox" id='sefi-check9' className='faq-input'></input>
        <label className="tab-label last-tab" htmlFor='sefi-check9'>How is the price of SEFI determined at the beginning?</label>
        <div className="tab-content">
          The price of SEFI will be determined by market forces of demand and supply.
        </div>
      </div>
    </div>
  )
}

export default SefiFaq