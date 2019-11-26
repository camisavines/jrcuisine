import React from 'react';

import Navigation from '../components/navigation';
import GalleryPhoto from '../components/galleryPhoto';
import '../css/home.css';
import logo from "../images/logos/logoTest1.png";
import test from '../images/IMG_0030.JPG';

function Home() {
    return (
        <div>
            <div className="full hero-home">
            <Navigation/>
                <div className="container vertical-align">
                    <div>
                        <div className="text-center logo-container"><img src={logo} className="logo" alt="logo"/></div>
                        <h1 className="title">JR Cuisine</h1>
                        <p>With head chef JaMiere Phillips, JR Cuisine is the best place to get real food delivered righ to you, based in South Bend, IN. </p>
                        <button className="home-button">MENU</button>
                    </div>
                </div>
            </div>
            <main className="container">

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

                <section>
                    <h1>Order Now</h1>
                    <div className="row">
                        <div className="col-3"></div>
                    </div>
                </section>




            </main>
        </div>
    )
}

export default Home;