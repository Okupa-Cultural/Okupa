import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
//Imagenes
import Logo from './../../Images/Logo/okupa-logo-colorYtitulo-transparente.png';
import Fondo from './../../Images/bg2.jpg';
///////
//Components
import NavBar from './../Components/Navigation/NavBar';
import formArtista from './../Components/forms/formArtista';
//////
import './css/HomeScreen.css';

export default class Registro extends Component {
  
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

          <NavBar />
        
      </div>
    );
  }
}