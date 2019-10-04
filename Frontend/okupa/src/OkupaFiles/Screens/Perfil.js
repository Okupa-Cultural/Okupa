import React, { Component } from 'react';
//Imagenes
import Fondo from './../../Images/bg2.jpg';
///////
//Components
import ProfileCard from './../Components/Perfil/ProfileCard';
import ProfileDescripcion from './../Components/Perfil/ProfileDescripcion';
import NavBar from './../Components/Navigation/NavBar';
//import formArtista from './../Components/forms/formArtista';
//////
import './css/EstilosGenerales.css';

export default class Perfil extends Component {
  
  render() {

    var sectionStyle = {
      zIndex: -10,
      position: 'fixed',
      width: "100vw",
      height: "100vh",
      backgroundImage: "url(" + Fondo + ")",
      overflowX: "hidden"
    }; 

    return (

      <div className="home-screen">

            <div style={ sectionStyle } />

            <div className="ocultar-en-moviles">

                <NavBar showSearchBar ={true}/>

            </div>

            <ProfileCard presentaciones="250" seguidores="600" seguidos="100"/>
            
            <ProfileDescripcion />

      </div>
    );
  }
}