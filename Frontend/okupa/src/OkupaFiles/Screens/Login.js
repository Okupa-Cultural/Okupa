import React, { Component } from 'react';
//import {  Link } from 'react-router-dom';
import Fondo from './../../Images/bg2.jpg';
import LogoBlanco from './../../Images/Logo/okupa-logo-blanco-transparente.png'

//Components
import NavBar from './../Components/Navigation/NavBar';

//CSS
import './css/EstilosGenerales.css';
import './css/Login.css'


export default class Login extends Component {

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

          <div className="login-contenedor">

              <div className="columna1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, consectetur reprehenderit dolores delectus quod cum tenetur quisquam vero nemo eum, rerum ullam eveniet. Sint expedita quisquam, deleniti esse hic maxime.</div>
              
              <div className="columna2">

                <img src={LogoBlanco} alt="Okupa logo blanco" />

                <div className="login-formulario">

                  <label htmlFor="">
                    Usuario
                    <br />
                    <input type="text"/>
                  </label>

                  <label htmlFor="">
                    Password
                    <br />
                    <input type="text"/>
                  </label>

                  <input type="button" />

                </div>

              </div>
        
          </div>

      
        </div>
      );
    }    
}