import React, { Component } from 'react';
//Imagenes
//import Logo from './../../Images/Logo/okupa-logo-colorYtitulo-transparente.png';
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
      position: 'fixed',
      width: "100%",
      height: "100%",
      backgroundImage: "url(" + Fondo + ")"
    };  

    return (
      
      <div className="home-screen">

          <div style={ sectionStyle } alt="okupa"/>

          <NavBar />
          <header>
            <h1>¿Buscas un evento?</h1>
            <h2>¡Okúpate!</h2>
          </header>
          
          <div className="banner">
                <input type="text" className="banner-search-bar" placeholder="Ingrese nombre del evento..."></input>
          </div>
      </div>
    );
  }
}