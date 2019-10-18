import React, { Component } from 'react';
import {  Link } from 'react-router-dom';

import Fondo from './../../Images/bg2.jpg';

//Componentes
import NavBar from './../Components/Navigation/NavBar';
import CasillaComentarios from './../Components/CasillaComentarios/CasillaComentarios';

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
        <div className="home-screen">


        <div style={ sectionStyle } />

        <div className="filtro-fondo" />

        <NavBar />

        <div className="evento-portada"></div>

        <div className="evento-cuerpo">
          <div className="evento-cabecera">
            <div className="evento-titulo">
              <h3>
                Variette del Nacho con Cheddar
              </h3>
            </div>
            <div className="evento-ubicacion">
              <Link to="/perfil">
                <h4 className="evento-espacio">
                  Zeugma casa cultural
                </h4>
              </Link>
              <div className="evento-direccion">
                Uruguay 636, Haedo
              </div>
            </div>
            <div className="evento-horario">
              <div className="evento-dia">Martes 21/10/2020</div>
              <div className="evento-hora">21hs</div>
            </div>
          </div>
          <p className="evento-descripcion">
            Lorem ipsum dolor sit amet, consectetur 
            adipisicing elit. In vero, nam, ex quasi 
            provident sed nihil culpa accusamus commodi 
            explicabo consequatur corrupti numquam facere?
            Animi officiis voluptas voluptatum adipisci quod.
            Lorem ipsum dolor sit amet, consectetur 
            adipisicing elit. In vero, nam, ex quasi 
            provident sed nihil culpa accusamus commodi 
            explicabo consequatur corrupti numquam facere?
            Animi officiis voluptas voluptatum adipisci quod.
          </p>
        </div>

        <CasillaComentarios />

        </div>
      );
    }    
}