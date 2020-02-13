import React, { Component } from 'react';
//Imagenes

///////
import SwipeableViews from 'react-swipeable-views';
//Components
//import NavBar from './../Components/Navigation/NavBar';
import TarjetaRegistro from '../../OkupaFiles/Components/Registro/TarjetaRegistro';
//import formArtista from './../Components/forms/formArtista';
//////
import './css/Registro.css';
import './css/EstilosGenerales.css';

const slide = {
  slide1 : <TarjetaRegistro body="Quiero presentarme en eventos y también organizarlos" clase="artista"/>,
  slide2 : <TarjetaRegistro body="Quiero solo organizar eventos" clase="espacio" />,
  slide3 : <TarjetaRegistro body="¡Ninguna! Solo quiero información" clase="butaca"/>,
};

export default class Registro extends Component {
  
  render() {

    return (
      
      <div className="registro-screen">
        <SwipeableViews className="swipe-registro">
          <div className="tarjeta-1">
            {slide.slide1}
          </div>
          <div className="tarjeta-2">
            {slide.slide2}
          </div>
          <div className="tarjeta-3">
            {slide.slide3}
          </div>
        </SwipeableViews>
        <div className="swipe-tutorial">
          <i className="fad fa-chevron-double-right"></i>
        </div>
      </div>
    );
  }
}