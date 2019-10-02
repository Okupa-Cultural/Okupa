import React, { Component } from 'react';
//Imagenes
//import Logo from './../../Images/Logo/okupa-logo-colorYtitulo-transparente.png';
import Fondo from './../../Images/bg2.jpg';
///////
//Components
import NavBar from './../Components/Navigation/NavBar';
//////
import './css/HomeScreen.css';
import './css/EstilosGenerales.css';

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

          <NavBar showSearchBar={false}/>

          <div className="contenedor">

            <header className="home-cabecera">

              <h1 className="titulo-principal"> ¿Buscas un evento?</h1>
              <h2 className="subtitulo">¡Okúpate!</h2>

            </header>

            <div className="banner">

              <input type="text" className="nav-bar-search-bar" placeholder="Ingrese nombre del evento..."/>
              <input type="date" className="datepicker" placeholder="we are the world"/>

            </div>

          </div>

          {/*<div className="contenedor">
            <header className="cabecera">
              <h1 className="titulo-principal">¿Buscas un eventolalala?</h1>
              <h2 className="subtitulo">¡Okúpate!</h2>
            </header>
            
            <div className="banner">
              <input type="text" className="nav-bar-search-bar" placeholder="Ingrese nombre del evento..."></input>
              <input type="date" className="datepicker" placeholder="elige una fecha"></input>
            </div>
          </div>
        */}
      </div>
    );
  }
}