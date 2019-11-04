import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ComingSoon from './pages/comingsoon';
import Home from './pages/home';
import './css/index.css';

function App() {
  return (
    <Router>

        <Route path="/" exact component={ComingSoon} />
        <Route path="/home" component={Home} />

    </Router>
  );
}

export default App;
