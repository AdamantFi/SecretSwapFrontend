/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import '../feature.css'

function WrapCard() {
  return (
      <div className='wrap-bridge'>
        <h1 className='feature-card-title'>WRAP ASSETS</h1>
        <div className="wrap-bridge-group">
            <div className='ibc-group'>
                <div className='ibc-wrap-top'>
                    <div className='ibc-logos'>
                        <img src="/assets/dvpn-logo-3d.png" alt="DVPN Logo" />
                        <img src="/assets/atom-logo-3d.png" alt="Atom Logo" />
                        <img src="/assets/osmo-logo-3d.png" alt="Osmo Logo" />
                    </div>
                    <img src="/assets/get-privacy.png" alt="Privacy" />
                </div>
                <div className='ibc-wrap-middle'>
                    <p>
                        Wrapping coins as Secret tokens immediately supercharges them with private balances and private transfers
                    </p>
                    <img src="/assets/scrt-logo-3d.png" alt="Scrt Logo" />
                </div>
            </div>
            <a className='btn-app btn-ibc-wrap' href='https://wrap.scrt.network' target="_blank">Wrap IBC Assets</a>
        </div>
    </div>
  )
}

export default WrapCard