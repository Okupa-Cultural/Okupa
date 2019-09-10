import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import Logo from './../../Images/logo.png';
import './css/HomeScreen.css';

function HomeScreen() {
  return (
    <div className="home-screen">
        <div className="banner">
            <img src={Logo} />
            <h1>Okupa</h1>
            <p>Organiza, Difunde, Okupa</p>
            <Link to="/dashboard">
              <input type="submit" className="boton-registro" value="Dashboard"/>
            </Link>
        </div>
    </div>
  );
}

export default HomeScreen;