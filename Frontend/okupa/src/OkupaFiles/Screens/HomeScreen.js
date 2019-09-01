import React from 'react';
import { Router, Route } from 'react-router-dom';
import Logo from './../../Images/logo.png';
import './css/HomeScreen.css';

function HomeScreen() {
  return (
    <div className="home-screen">
        <div className="banner">
            <img src={Logo} />
            <h1>Okupa</h1>
            <p>Organiza, Difunde, Okupa</p>
        </div>
    </div>
  );
}

export default HomeScreen;
