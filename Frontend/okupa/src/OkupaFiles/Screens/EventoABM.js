import React, { Component } from 'react';
import {  Link } from 'react-router-dom';
 
//Components
//import InputFile from './../Components/Generales/InputFile/InputFile';
//CSS
import './css/EstilosGenerales.css';
//import './css/abm.css'

export default class EventoABM extends Component {

    render() {

      return (
        <div className="evento-abm abm">
          
          <div className="abm-titulo">
            <Link to="/">
              <h1 className="abm-titulo-texto">Nuevo evento</h1>
            </Link>
          </div>

          <section className="abm-seccion" name="evento-abm-seccion" id="seccion1">
            
            <form action="">

              <label htmlFor="">Tipo de evento</label>

              <label htmlFor="">Nombre</label>
              <input type="text" name="evento-nombre" id="evento-nombre" className="abm-input" autocomplete="off" tabindex="1" placeholder="Nombre del evento" />

              <label htmlFor="">Nombre</label>
              <input type="date" name="evento-fecha-inicio" id="evento-nombre" className="abm-input" autocomplete="off" tabindex="1" placeholder="dd/mm/aaaa" />

            </form>

          </section>

        </div>
      );
    }    
}