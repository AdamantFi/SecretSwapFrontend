/* eslint-disable react/jsx-no-target-blank */
import React, {useContext} from 'react';
import './../index.css';
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
            <a href="/"><img src='/assets/sefi_logo.png' alt='SeFi Logo'></img></a>
        </div>
        <div className='header-right'>
            <div>
                <img src='/assets/sefi_price_logo.png' alt='SeFi Price Logo'></img>
                <strong>SEFI ${sefi}</strong>
            </div>
            <div>
                <img src='/assets/scrt_price_logo.png' alt='SCRT Price Logo'></img>
                <strong>SCRT ${scrt}</strong>
            </div>
            <a className='btn-app' href='https://app.secretswap.net/swap' target="_blank">LAUNCH APP</a>
        </div>
    </div>
    </>
    );
};
export default Header;