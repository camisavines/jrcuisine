import React from 'react';
import {BrowserRouter as Link } from 'react-router-dom';
import '../css/navigation.css';

function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            {/* <Link to="/home" className="navbar-brand">JR Cuisine</Link> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active"><Link to="/about" className="nav-link">About</Link></li>
                    <li className="nav-item active"><Link to="/menu" className="nav-link">Menu</Link></li>
                    <li className="nav-item active"><Link to="/gallery" className="nav-link">Gallery</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;