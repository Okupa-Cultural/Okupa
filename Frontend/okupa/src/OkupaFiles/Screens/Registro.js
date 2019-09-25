import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
<<<<<<< HEAD

          <div className="banner">
                <Link to="/">
                  <img src={Logo} alt="okupa"/>
                </Link>
                <h1>Reg&iacute;strate</h1>
                <p>Placeholder Text</p>
                <Link to="/">
                    <input type="submit" className="boton-registro" value="Inicio"/>
                </Link>
            </div>
=======
        
>>>>>>> 10f3c9b59e76fa995213c7566447127d973142ea
      </div>
    );
  }
}