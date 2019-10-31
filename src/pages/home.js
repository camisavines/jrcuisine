import React from 'react';

import Navigation from '../components/navigation';
import '../css/home.css';

function Home() {
    return (
        <div className="full">
            <Navigation />
            <div className="vertical-align">
                <h1>Home</h1>
            </div>
        </div>
    )
}

export default Home;