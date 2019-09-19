import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import Logo from './../../Images/Logo/okupa-logo-colorYtitulo-transparente.png';
import './css/HomeScreen.css';
import Fondo from './../../Images/bg2.jpg';

export default class Dashboard extends Component {

    render() {

         var sectionStyle = {
          zIndex: -10,
          position: 'absolute',
          width: "100%",
          height: "100%",
          backgroundImage: "url(" + Fondo + ")"
        };

      return (
        <div className="home-screen">

         <div style={ sectionStyle } />

            <div className="banner">
                <img src={Logo} />
                <h1>Dashboard</h1>
                <p>Placeholder Text</p>
                <Link to="/">
                    <input type="submit" className="boton-registro" value="Inicio"/>
                </Link>
            </div>
        </div>
      );
    }    
}