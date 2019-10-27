import React, { Component } from 'react';
import {  Link } from 'react-router-dom';
import Logo from './../../Images/Logo/okupa-logo-colorYtitulo-transparente.png';
import './css/HomeScreen.css';
import Fondo from './../../Images/bg2.jpg';
//Components
import NavBar from './../Components/Navigation/NavBar';
//
import './css/EstilosGenerales.css';


export default class Login extends Component {

    render() {

         var sectionStyle = {
          zIndex: -10,
          position: 'fixed',
          width: "100%",
          height: "100%",
          backgroundImage: "url(" + Fondo + ")"
        };

      return (
        <div className="home-screen">


         <div style={ sectionStyle } />

         <div className="filtro-fondo" />

          <NavBar />

            <div className="banner">
                <Link to="/">
                  <img src={Logo} alt="okupa"/>
                </Link>
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