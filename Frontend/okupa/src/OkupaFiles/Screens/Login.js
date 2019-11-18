import React, { Component } from 'react';
//import {  Link } from 'react-router-dom';
import LogoBlanco from './../../Images/Logo/okupa-logo-blanco-transparente.png'

//Components

//CSS
import './css/EstilosGenerales.css';
import './css/Login.css'


export default class Login extends Component {

    render() {

      return (
        <div className="login">

          <div className="login-form-fondo"></div>

          <seccion className="login-form">
            <img src={LogoBlanco} alt="Okupa logo blanco" className="login-form-logo"/>
            <form action="">
              <label htmlFor="" className="login-form-label">
                Nombre de usuario
              </label>
              <input type="text" name="nombre-de-usuario" placeholder="Nombre de usuario o email" className="login-form-input" />
              <label htmlFor="" className="login-form-label">
                Contraseña
              </label>
              <input type="password" name="nombre-de-usuario" placeholder="Contraseña" className="login-form-input" />
              <input type="submit" name="Ingresar" value="Ingresar" className="login-form-boton"/>
            </form>

            <div class="fb-login-button" data-width="" data-size="large" data-button-type="login_with" data-auto-logout-link="false" data-use-continue-as="false"></div>

          </seccion>
        </div>
      );
    }    
}