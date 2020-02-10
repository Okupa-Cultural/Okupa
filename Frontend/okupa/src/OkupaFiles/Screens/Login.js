import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import LogoBlanco from './../../Images/Logo/okupa-logo-blanco-transparente.png'

//Components
import inputText from './../Components/Generales/inputText/inputText';

//CSS
import './css/EstilosGenerales.css';
import './css/Login.css'


export default class Login extends Component {

    render() {

      return (
        <div className="login">
          <inputText />
        </div>
      );
    }    
}