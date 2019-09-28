import React, { Component } from 'react';
//Imagenes
import Fondo from './../../Images/bg2.jpg';
///////
//Components

//import formArtista from './../Components/forms/formArtista';
//////
import './css/Perfil.css';
import './css/EstilosGenerales.css';

export default class Perfil extends Component {
  
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
        
        <div className="foto-perfil"></div>
        
        <div className="cabecera">
          <h2 className="nombre-de-usuario">Los Hijos de la Rossi</h2>
          <div className="lista-etiquetas">
          <ul>
            <li className="etiqueta">Humor</li>
            <li className="etiqueta">Teatro</li>
            <li className="etiqueta">Clown</li>
            <li className="etiqueta">Música</li>
            <li className="etiqueta">Humor escénico</li>
            <li className="etiqueta-puntos-suspensivos">...</li>
          </ul>
          </div>
        </div>
        


      </div>
    );
  }
}