import React from 'react';
import '../styles/Home.css';
import NavBar from '../components/NavBar';

function HomePage() {
    return (
        <div>
            <NavBar></NavBar>
            <div>
                <h1 className="welcome">casual entertainment</h1>
            </div>
        </div>
    );
}

export default HomePage;