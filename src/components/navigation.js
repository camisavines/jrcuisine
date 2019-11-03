import React from 'react';
import {BrowserRouter as Link } from 'react-router-dom';
import '../css/navigation.css';

function Navigation() {
    return (
        <nav class="mb-1 navbar navbar-expand-lg navbar-dark">
            <Link to="/home" className="navbar-brand">J.R. Cuisine</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
                aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link to="/home" className="nav-link">Page 1</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/home" className="nav-link">Page 1</Link>
                        {/* <a class="nav-link" href="#">Features</a> */}
                    </li>
                    <li class="nav-item">
                    <Link to="/home" className="nav-link">Page 1</Link>
                        {/* <a class="nav-link" href="#">Pricing</a> */}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;