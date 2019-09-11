import React from 'react';
import { Router, Route } from 'react-router-dom';
import Logo from './../../Images/Logo/okupa-logo-colorYtitulo-transparente.png';
import './css/HomeScreen.css';

function Dashboard() {
  return (
    <div className="home-screen">
        <div className="banner">
            <img src={Logo} />
            <h1>Dashboard</h1>
            <p>Placeholder Text</p>
            <button className="boton-registro">Registarse</button>
        </div>
    </div>
  );
}

export default Dashboard;