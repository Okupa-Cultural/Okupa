import React, { Component } from 'react';
//Imagenes
import Fondo from './../../Images/bg2.jpg';
///////
//Components
import NavBar from './../Components/Navigation/NavBar';
//import formArtista from './../Components/forms/formArtista';
//////
import './css/Registro.css';

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

          <ul>
          	<link =><li>
          		<p>Quiero presentarme en eventos y también organizarlos</p>
          	</li></link>
          	<link><li>
          		<p>Quiero solo organizar eventos</p>
          	</li></link>
          	<link><li>
          		<p>¡Ninguna de las dos! solo quiero información</p>
          	</li></link>
          </ul>
      </div>
    );
  }
}