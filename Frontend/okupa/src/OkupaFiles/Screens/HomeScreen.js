import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
//Imagenes
import Logo from './../../Images/Logo/okupa-logo-colorYtitulo-transparente.png';
import Fondo from './../../Images/bg2.jpg';
///////
//Components
import NavBar from './../Components/Navigation/NavBar';
//////
import './css/HomeScreen.css';

export default class HomeScreen extends Component {
  
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

          <NavBar />

          <div className="banner">
              <img src={Logo} />
              <h1>Okupa</h1>
              <p>Organiza, Difunde, Okupa</p>
              <Link to="/dashboard">
                <input type="submit" className="boton-registro" value="Registrarse"/>
              </Link>
              <Link to="/dashboard">
                <input type="submit" className="boton-registro" value="Iniciar Sesión"/>
              </Link>
          </div>
      </div>
    );
  }
}