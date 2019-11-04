import React, { Component } from 'react';
//import {  Link } from 'react-router-dom';
import Fondo from './../../Images/bg2.jpg';

//Componentes
import NavBar from './../Components/Navigation/NavBar';
import CasillaComentarios from './../Components/CasillaComentarios/CasillaComentarios';
import TarjetaPie from './../Components/Tarjeta/TarjetaPie.js';

//CSS
import './css/EstilosGenerales.css';
import './css/Evento.css';


export default class Evento extends Component {

    render() {

         var sectionStyle = {
          zIndex: -10,
          position: 'fixed',
          width: "100%",
          height: "100%",
          backgroundImage: "url(" + Fondo + ")"
        };

      return (
        <div>

          <div style={ sectionStyle } />

          <div className="filtro-fondo" />

          <NavBar />

          <div className="evento">

            <div className="evento-cabecera">
              <div className="evento-portada"></div>
              <h3 className="evento-titulo">
                Variette del nacho con cheddar
              </h3>
              <div className="evento-direccion">
                <i class="fal fa-map-marker-alt"></i>
                Uruguay 636 - HAEDO
              </div>
              <div className="evento-fechayhora">
                <i class="fal fa-alarm-clock"></i>
                21/10/2021 - 21:30hs
              </div>
              <div className="evento-espacio">
                <i class="fal fa-ticket-alt"></i>
                Zeugma Cultural
              </div>
            </div>

            <p className="evento-descripcion">
              Lorem ipsum dolor sit amet, 
              consectetur adipisicing elit. 
              Dolore, dolorem, repudiandae ex 
              dignissimos quos animi eius 
              voluptate autem reiciendis quia 
              blanditiis, facere nobis. 
              Laudantium obcaecati natus, 
              corrupti, aliquid possimus soluta.
              Lorem ipsum dolor sit amet, 
              consectetur adipisicing elit. 
              Dolore, dolorem, repudiandae ex 
              dignissimos quos animi eius 
              voluptate autem reiciendis quia 
              blanditiis, facere nobis. 
              Laudantium obcaecati natus, 
              corrupti, aliquid possimus soluta.
            </p>

            <TarjetaPie />

          </div>

          <CasillaComentarios />

        </div>
      );
    }    
}