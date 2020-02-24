import React, { Component } from 'react';
//import {  Link } from 'react-router-dom';

//Componentes
import NavBar from './../Components/Navigation/NavBar';
import CasillaComentarios from './../Components/CasillaComentarios/CasillaComentarios';

//CSS
import './css/EstilosGenerales.css';
import './css/Evento.css';


export default class Evento extends Component {

    render() {

      return (
        <div>

          <NavBar />

          <div className="evento">

            <div className="evento-cabecera">
              <div className="evento-portada"></div>
              <h3 className="evento-titulo">
                Variette del nacho con cheddar
              </h3>
              <div className="evento-direccion">
                <i className="fal fa-map-marker-alt"></i>
                Uruguay 636 - HAEDO
              </div>
              <div className="evento-fechayhora">
                <i className="fal fa-alarm-clock"></i>
                21/10/2021 - 21:30hs
              </div>
              <div className="evento-espacio">
                <i className="fal fa-ticket-alt"></i>
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

          </div>

          <CasillaComentarios/>

        </div>
      );
    }    
}