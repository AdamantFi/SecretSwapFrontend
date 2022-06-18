/* eslint-disable react/jsx-no-target-blank */
import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import AppContext from '../contexts/AppContext';

const doNothing = () => {
    const header = document.getElementById("header");
    const menu = document.getElementById("menu");
    const hamburger = document.getElementById("hamburger");
    const base = document.getElementById("base");
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden")
        header.classList.add("checked")
        menu.classList.add("checked")
        hamburger.classList.add("checked")
        base.classList.add("checked")
        document.body.style.overflow = "hidden";
    }
    else {
        header.classList.remove("checked")
        menu.classList.remove("checked")
        hamburger.classList.remove("checked")
        base.classList.remove("checked")
        menu.classList.add("hidden")
        document.body.style.overflow = "auto";
    }
}

const Header = (props) => {

    const { price: {sefi, scrt} } = useContext(AppContext)

    return (
    <>
    <div className='header' id='header'>
        <div className='header-left'>
            <FontAwesomeIcon icon={faBars} className='hamburger-menu' id="hamburger" onClick={doNothing}/>
            <a href="/"><img src='/assets/secret-swap-light.png' alt='SeFi Logo'></img></a>
        </div>
        <div className='header-right'>
            <div className="pricing">
                <img src='/assets/price-logo-sefi.png' alt='SeFi Price Logo'></img>
                <span className="token">SEFI</span> ${sefi}
            </div>
            <div className="pricing">
                <img src='/assets/price-logo-scrt.png' alt='SCRT Price Logo'></img>
                <span className="token">SCRT</span> ${scrt}
            </div>
            <a className='btn-app' href='https://app.secretswap.net/swap' target="_blank">LAUNCH APP</a>
        </div>
    </div>
    </>
    );
};
export default Header;