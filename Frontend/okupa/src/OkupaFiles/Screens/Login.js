import React, { Component } from 'react';
//import {  Link } from 'react-router-dom';
import LogoBlanco from './../../Images/Logo/okupa-logo-blanco-transparente.png'

//Components
import { Link } from 'react-router-dom';
//CSS
import './css/EstilosGenerales.css';
import './css/Login.css'


export default class Login extends Component {

    render() {

      return (
        <div className="login">

          <div className="login-form-fondo-principal"></div>

          <div className="login-form-fondo"></div>

          <section className="login-form">
            <Link to="/">
              <img src={LogoBlanco} alt="Okupa logo blanco" className="login-form-logo"/>
            </Link>
            <form action="">
              <label htmlFor="" className="login-form-label">
                Nombre de usuario
              </label>
              <input type="text" name="username" placeholder="Nombre de usuario o email" className="login-form-input" />
              <label htmlFor="" className="login-form-label">
                Contraseña
              </label>
              <input type="password" name="password" placeholder="Contraseña" className="login-form-input" />
              <input type="submit" name="Ingresar" value="Ingresar" className="login-form-boton"/>
            </form>

           {/* <div className="fb-login-button" data-width="" data-size="large" data-button-type="login_with" data-auto-logout-link="false" data-use-continue-as="false"></div> */ }

          </section>
        </div>
      );
    }    
}