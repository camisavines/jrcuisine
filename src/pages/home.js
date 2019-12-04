import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import GalleryPhoto from '../components/galleryPhoto';

import '../css/home.css';
import logo from "../images/logos/logoTest1.png";
import test from '../images/IMG_0030.JPG';

function Home() {
    return (
        <div>
            <div className="full hero-home vertical-align">
                <div className="container">
                    <div className="text-center pb-5"><img src={logo} className="logo" alt="logo"/></div>
                    <h1 className="title">JR Cuisine</h1>
                    <p>With head chef JaMiere Phillips, JR Cuisine is the best place to get real food delivered righ to you, based in South Bend, IN. </p>
                    <button className="home-button"><Link to="/menu">MENU</Link></button>
                </div>
            </div>
            <main className="bg-white p-5">
                <div className="container">


                <section>
                    <h1>Menu</h1>
                    <p>Lorem ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <div className="row">
                        <div className="col-sm-4"><GalleryPhoto img={test}/></div>
                        <div className="col-sm-4"><GalleryPhoto img={test}/></div>
                        <div className="col-sm-4"><GalleryPhoto img={test}/></div>
                    </div>
                </section>

                <section>
                    <h1>About</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <p>Lorem ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                        <div className="col-md-6"><GalleryPhoto img={test}/></div>
                    </div>

                </section>

                <section className="text-center half vertical-align">
                    <div>
                        <h1>Now, let's get ready to eat!</h1>
                        <button className="home-button"><Link to="/menu">ORDER NOW</Link></button>
                    </div>
                </section>



            </div>
            </main>
        </div>
    )
}

export default Home;