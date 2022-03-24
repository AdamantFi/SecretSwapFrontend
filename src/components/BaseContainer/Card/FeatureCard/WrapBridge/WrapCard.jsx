import React from 'react'
import '../feature.css'

function WrapCard() {
  return (
      <div className='wrap-bridge'>
        <h1 className='feature-card-title'>WRAP ASSETS</h1>
        <div className="wrap-bridge-group animate-enter">
            <div className='ibc-group'>
                <div className='ibc-wrap-top'>
                    <div className='ibc-logos'>
                        <img src="/assets/luna-logo-3d.png" alt="Luna Logo" />
                        <img src="/assets/atom-logo-3d.png" alt="Atom Logo" />
                        <img src="/assets/osmo-logo-3d.png" alt="Osmo Logo" />
                    </div>
                    <img src="/assets/get-privacy.png" alt="Privacy" />
                </div>
                <div className='ibc-wrap-middle'>
                    <p>
                        Wrapping Coins as Secret Tokens immediately supercharges them with private balances and private transfers.
                    </p>
                    <img src="/assets/scrt-logo-3d.png" alt="Scrt Logo" />
                </div>
            </div>
            <a className='btn-app btn-feature' href='https://wrap.scrt.network'>Wrap IBC Assets</a>
        </div>
    </div>
  )
}

export default WrapCard