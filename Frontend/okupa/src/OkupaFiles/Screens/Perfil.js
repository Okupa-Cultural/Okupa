import React, { Component } from 'react';
//Imagenes
import Fondo from './../../Images/bg2.jpg';
///////
//Components
import NavBar from './../Components/Navigation/NavBar';
import ProfileCard from './../Components/Perfil/ProfileCard';
import ProfileDescripcion from './../Components/Perfil/ProfileDescripcion';
import ProfileGaleria from './../Components/Perfil/ProfileGaleria';
import ProfileEventos from './../Components/Perfil/ProfileEventos';

//////
//CSS
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

            <div className="filtro-fondo" />

            <div className="ocultar-en-moviles">

                <NavBar showSearchBar ={true}/>

            </div>

            <ProfileCard presentaciones="250" seguidores="600" seguidos="100"/>
            
            <ProfileDescripcion />

            <ProfileGaleria />

            <ProfileEventos />

      </div>
    );
  }
}