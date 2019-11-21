import React, { Component } from 'react';

//Componentes
import NavBar from './../Components/Navigation/NavBar';
import Tarjeta from './../Components/Tarjeta/Tarjeta';

//CSS
import './css/EstilosGenerales.css';

export default class Evento extends Component {

    render() {

      return (
        <div className="home-screen">

          <br />
          <br />

          <NavBar />

          <Tarjeta />

          <Tarjeta />

          <Tarjeta />

        </div>
      );
    }    
}