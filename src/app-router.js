import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ComingSoon from './pages/comingsoon';
import Home from './pages/home';
import './app-router.css';

function App() {
  return (
    <Router>

        <Route path="/comingsoon" exact component={ComingSoon} />
        <Route path="/home" component={Home} />

    </Router>
  );
}

export default App;
