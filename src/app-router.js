import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

import ComingSoon from './pages/comingsoon';
// import Home from './pages/home';
import Gallery from './pages/gallery';
import About from './pages/about';
import Menu from './pages/menu';

// import Navigation from './components/navigation';

import './css/index.css';
import './css/navigation.css';

function App() {
  return (
    <Router>
      {/* <nav className="navbar navbar-expand-lg navbar-light">
            <Link to="/" className="navbar-brand">JR Cuisine</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto text-blue">
                    <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                    <li className="nav-item"><Link to="/menu" className="nav-link">Menu</Link></li>
                    <li className="nav-item"><Link to="/gallery" className="nav-link">Gallery</Link></li>
                </ul>
            </div>
        </nav> */}
        <Route path="/" exact component={ComingSoon} />
        {/* <Route path="/coming" component={ComingSoon} /> */}
        <Route path="/gallery" component={Gallery} />
        <Route path="/about" component={About} />
        <Route path="/menu" component={Menu} />

    </Router>
  );
}

export default App;
