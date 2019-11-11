import React from 'react';

import Navigation from '../components/navigation';
import '../css/home.css';
import logo from "../images/logos/logoTest1.png"

function Home() {
    return (
        <div>
            <div className="full hero-home">
                <Navigation />
                <div className="container vertical-align">
                    <div>
                        <div className="text-center quarter" ><img src={logo} className="center" alt="logo"/></div>
                        <h1 className="title">JR Cuisine</h1>
                        <p>With head chef JaMiere Phillips, JR Cuisine is the best place to get real food delivered righ to you, based in South Bend, IN. </p>
                        <button className="home-button">MENU</button>
                    </div>
                </div>
            </div>
            <main className="container">

                <section>
                    <h1>Menu</h1>
                    <div className="row">
                        <div></div>
                    </div>
                </section>




            </main>
        </div>
    )
}

export default Home;