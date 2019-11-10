import React from 'react';
import "../css/comingsoon.css";

import logo from '../images/logo.jpeg';
import insta from '../images/icons/instagram-white.png';
import facebook from '../images/icons/facebook-white.png';
import email from '../images/icons/mail-white.png';
import phone from '../images/icons/phone-white.png';

function ComingSoon() {
    return (
        <div className="full hero-coming-soon text-center">
            <div className="container">
                <div className="logo-container vertical-align container">
                    <img className="logo" src={logo}  alt="logo" />
                </div>
                <div>
                    <h1><b>Coming Soon!</b></h1>
                    <p>JaMiere Phillips, Founder and Head Chef</p>
                    <div><img className="icon" src={email} alt="email-icon"/> jamierephillips@yahoo.com</div>
                    <div><img className="icon" src={phone} alt="phone-icon"/> (574)-314-0013</div>
                    <div><img className="icon" src={insta} alt="insta-icon"/> @j.r.cuisine</div>
                    <div><img className="icon" src={facebook} alt="facebook-icon"/> JR Cuisine</div>
                    <div><i className="material-icons">person_pin</i> South Bend, IN, 46617</div>
                </div>
            </div>
        </div>
    )
}

export default ComingSoon;