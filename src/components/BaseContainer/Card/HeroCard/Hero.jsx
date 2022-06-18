import React, { useContext } from "react";
import './hero.css';
import AppContext from "../../../../contexts/AppContext";

function Hero() {

  const {stat: {sefiApr, liquidity, pairs, users, dailyVolume} } = useContext(AppContext)

  return (
    <div className="landing-image animate-from-left">
      <div className="hero-overlap-group">
        <div className="hero-intro">
          <img className='bridge-bar' src="/assets/bridge-bar.png" alt="Bar" />
          <h1 className="hero-title">A Better Way to Trade</h1>
          <p className="hero-text">Welcome to the first front-running resistant,
          cross-chain and privacy-first AMM</p>
          <div className="hero-stats-container">
            <div id="hero-stats-row-1">
              <Volume volume={dailyVolume} />
            </div>
            <div id="hero-stats-row-2">
              <Users users={users}/>
              <Pairs pairs={pairs}/>
            </div>
            <div id="hero-stats-row-3">
              <APR apr={sefiApr}/>
              <Liquidity liquidity={liquidity}/>
            </div>
          </div>
        </div>
        <div className="hero-tokens">
          <img id="hero-scrt" src="/assets/scrt-logo-3d.png" alt="Scrt Logo" />
          <img id="hero-sefi" src="/assets/sefi-logo-3d.png" alt="Sefi Logo" />
        </div>

      </div>
    </div>
  );
}

export default Hero;

function Volume({volume}) {
  return (
    <div className="hero-stat-group">
      <h4 className="hero-stat">
        {volume}
      </h4>
      <h5 className="hero-label">
        DAILY<br />VOLUME
      </h5>
    </div>
  );
}


function Users({users}) {
  return (
    <div className="hero-stat-group">
      <h4 className="hero-stat">
        {users}
      </h4>
      <h5 className="hero-label">
        USERS
      </h5>
    </div>
  );
}

function Pairs({pairs}) {
  return (
    <div className="hero-stat-group">
      <h4 className="hero-stat">
        {pairs}
      </h4>
      <h5 className="hero-label">
        PAIRS
      </h5>
    </div>
  );
}

function APR({apr}) {
  return (
    <div className="hero-stat-group">
      <h4 className="hero-stat">
        {apr}
      </h4>
      <h5 className="hero-label">
        SEFI APR
      </h5>
    </div>
  );
}

function Liquidity({liquidity}) {
  return (
    <div className="hero-stat-group">
      <h4 className="hero-stat">
        {liquidity}
      </h4>
      <h5 className="hero-label">
        LIQUIDITY
      </h5>
    </div>
  );
}