import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//Imagenes
import Fondo from './../../Images/bg2.jpg';
///////
//Components
import NavBar from './../Components/Navigation/NavBar';
//import formArtista from './../Components/forms/formArtista';
//////
import './css/Registro.css';
import './css/EstilosGenerales.css';

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
            <Link to="/">
              <li className="artista" id="artista">
                <span className="middle">
                Quiero presentarme en eventos y también organizarlos
                </span>
              </li>
            </Link>
            <Link to="/Dashboard">
              <li className="espacio" id="espacio">
                <span className="middle">
                Quiero solo organizar eventos
                </span>
              </li>
            </Link>
            <a href="https://www.google.com/search?sxsrf=ACYBGNRPHmAa-_UgvhcXDJMA6kpDKFB7hQ%3A1569534494953&source=hp&ei=HjKNXfDwN_Kz5OUPkuqQuA4&q=okupa&oq=okupa&gs_l=psy-ab.3..35i39l2j0l8.1326.1792..1857...0.0..0.122.500.3j2......0....1..gws-wiz.....10..35i362i39j0i131.N7rS7vO_RE8&ved=0ahUKEwjw96DQu-_kAhXyGbkGHRI1BOcQ4dUDCAY&uact=5">
              <li className="butaca" id="butaca">
                <span className="middle">
                ¡Ninguna! Solo quiero información
                </span>
              </li>
            </a>
          </ul>
          
      </div>
    );
  }
}