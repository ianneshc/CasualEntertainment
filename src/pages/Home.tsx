import React from 'react';
import '../styles/Home.css';
import NavBar from '../components/NavBar';

function HomePage() {
    return (
        <div className="home-container">
            <NavBar />
            <div className="welcome-container">
                <h1 className="welcome">casual entertainment</h1>
            </div>
        </div>
    );
}

export default HomePage;
