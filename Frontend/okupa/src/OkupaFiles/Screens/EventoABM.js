import React, { Component } from 'react';
//import {  Link } from 'react-router-dom';
 
//Components
//import InputFile from './../Components/Generales/InputFile/InputFile';
import InputFile from './../Components/Generales/InputFile/InputFile';

//CSS
import './css/EstilosGenerales.css';
import './css/EventoABM.css';
//import './css/abm.css'

export default class EventoABM extends Component {

    render() {

      return (
        <div className="evento-abm">
          <div className="selector-tarjetas">
            <seccion id="taller" className="tipo-evento">
              <h2 className="tarjeta-descripcion">Taller</h2>
            </seccion>
            <seccion id="espectaculo" className="tipo-evento">
              <h2 className="tarjeta-descripcion">Espectaculo</h2>
            </seccion>
            <seccion id="seminario" className="tipo-evento">
              <h2 className="tarjeta-descripcion">Seminario</h2>
            </seccion>
          </div>
        </div>
      );
    }    
}