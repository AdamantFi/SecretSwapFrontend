import React from 'react';
import './../index.css';

const SideNav = (props) => {

    return (
        <nav>
            <div className='sidenav'>
                <a href='https://docs.secretswap.net/'>Learn More</a>
                <a href='/faq'>FAQ</a>
                <a href='http://secretanalytics.xyz'>Analytics</a>
                <a href='https://bridge.scrt.network'>Bridge</a>
                {/* <a href='#section'>Merch Store</a> */}
                <img className='pools-logo' src="/assets/pools-logo.png" alt="Pools Logo" />
                <h3>Stake For Rewards</h3>
                <a className='btn-app solid secondary btn-expand' href="https://app.secretswap.net/earn#Details">Top Pools</a>
            </div>
        </nav>
    );
};
export default SideNav;