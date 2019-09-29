import React, { Component } from 'react';
//Imagenes
import Fondo from './../../Images/bg2.jpg';
///////
//Components
import ProfileCard from './../Components/Perfil/ProfileCard';
import ProfileDescription from './../Components/Perfil/ProfileDescription';
import NavBar from './../Components/Navigation/NavBar';
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

      <div className="home-screen"> {/*==========Inicio de div Contenedor==========*/}

        <div style={ sectionStyle } />

        <NavBar showSearchBar ={true}/>

        {/*==========Tarjeta de perfil==========*/}
        <ProfileCard presentaciones="250" seguidores="600" seguidos="100"/>
        {/*==========Descripcion de perfil======*/}
        <ProfileDescription />

      </div>
    );
  }
}