import React from 'react';
import { Router, Route } from 'react-router-dom';
import Logo from './../../Images/logo.png';
import './css/HomeScreen.css';

function Dashboard() {
  return (
    <div className="home-screen">
        <div className="banner">
            <img src={Logo} />
            <h1>Brunito</h1>
            <p>Chinvenguencha</p>
            <button className="boton-registro">Registarse</button>
        </div>
    </div>
  );
}

export default Dashboard;