import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import ComingSoon from './pages/comingsoon';
import Home from './pages/home';
import Gallery from './pages/gallery';
import About from './pages/about';
import Menu from './pages/menu';
import './css/index.css';

function App() {
  return (
    <Router>

        <Route path="/" exact component={ComingSoon} />
        <Route path="/home" component={Home} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/about" component={About} />
        <Route path="/menu" component={Menu} />

    </Router>
  );
}

export default App;
