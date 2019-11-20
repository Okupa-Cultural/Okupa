import React, { Component } from 'react';
//Imagenes

///////
//Components
//import NavBar from './../Components/Navigation/NavBar';
import TarjetaRegistro from '../Components/Registro/TarjetaRegistro';
//import formArtista from './../Components/forms/formArtista';
//////
import './css/Registro.css';
import './css/EstilosGenerales.css';

export default class Registro extends Component {
  
  render() {

    return (
      
      <div className="registro-screen">

          <div className="tarjeta-1">
            <TarjetaRegistro body="Quiero presentarme en eventos y también organizarlos" clase="artista"/>
          </div>
          <div className="tarjeta-2">
           <TarjetaRegistro body="Quiero solo organizar eventos" clase="espacio" />
          </div>
          <div className="tarjeta-3">
           <TarjetaRegistro body="¡Ninguna! Solo quiero información" clase="butaca"/>  
          </div>
          
      </div>
    );
  }
}