import React, { Component } from 'react';

import Fondo from './../../Images/bg2.jpg';

//Componentes
import NavBar from './../Components/Navigation/NavBar';
import Tarjeta from './../Components/Tarjeta/Tarjeta';

//CSS
import './css/EstilosGenerales.css';

export default class Evento extends Component {

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

          <br />
          <br />

          <div style={ sectionStyle } />

          <div className="filtro-fondo" />

          <NavBar />

          <Tarjeta />

          <Tarjeta />

          <Tarjeta />

        </div>
      );
    }    
}