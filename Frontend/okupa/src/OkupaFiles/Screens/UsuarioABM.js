import React, { Component } from 'react';
import {  Link } from 'react-router-dom';
 
//Components

//CSS
import './css/EstilosGenerales.css';
import './css/abm.css'

//TarjetasFormulario
import TarjetaRegistroUno from './../Components/Registro/TarjetaRegistroUno';
import TarjetaRegistroDos from './../Components/Registro/TarjetaRegistroDos';
import TarjetaRegistroTres from './../Components/Registro/TarjetaRegistroTres';
import TarjetaRegistroCuatro from './../Components/Registro/TarjetaRegistroCuatro';

export default class UsuarioABM extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pantallaActual : 0,
    };
  }

  cambiarEstadoPantallaActual = (pantallaNueva) => {
    this.setState({
      pantallaActual : pantallaNueva,
    });
  };

  indicadorPantallaActual = () => {
    switch(this.state.pantallaActual) {
      case 0: return(
                <div className="indicador-pantalla-actual">
                  <i className={"fas fa-circle " + "circuloActivo"}></i>
                  <i className={"fas fa-circle " + "circulo"}></i>
                  <i className={"fas fa-circle " + "circulo"}></i>
                  <i className={"fas fa-circle " + "circulo"}></i>
                </div>
              );
      case 1: return(
                <div className="indicador-pantalla-actual">
                  <i className={"fas fa-circle " + "circulo"}></i>
                  <i className={"fas fa-circle " + "circuloActivo"}></i>
                  <i className={"fas fa-circle " + "circulo"}></i>
                  <i className={"fas fa-circle " + "circulo"}></i>
                </div>
              );
      case 2: return(
                <div className="indicador-pantalla-actual">
                  <i className={"fas fa-circle " + "circulo"}></i>
                  <i className={"fas fa-circle " + "circulo"}></i>
                  <i className={"fas fa-circle " + "circuloActivo"}></i>
                  <i className={"fas fa-circle " + "circulo"}></i>
                </div>
              );
      case 3: return(
                <div className="indicador-pantalla-actual">
                  <i className={"fas fa-circle " + "circulo"}></i>
                  <i className={"fas fa-circle " + "circulo"}></i>
                  <i className={"fas fa-circle " + "circulo"}></i>
                  <i className={"fas fa-circle " + "circuloActivo"}></i>
                </div>
              );
      default: break;
    }
  }

  cambiarPantalla = (pantallaIndex) => {
    switch(pantallaIndex) {
      case 0 : return <TarjetaRegistroUno callback={this.cambiarEstadoPantallaActual}/>;
      case 1 : return <TarjetaRegistroDos callback={this.cambiarEstadoPantallaActual}/>;
      case 2 : return <TarjetaRegistroTres callback={this.cambiarEstadoPantallaActual}/>;
      case 3 : return <TarjetaRegistroCuatro callback={this.cambiarEstadoPantallaActual}/>;
      default: break;
    }
  };

  render() {

    let renderPantallaActual = this.cambiarPantalla(this.state.pantallaActual);
    let renderIndicadorActual = this.indicadorPantallaActual();

    return (
      <div className="usuario-abm abm">
        <div className="abm-titulo">
          <Link to="/">
            <h1 className="abm-titulo-texto">Registro</h1>
          </Link>
        </div>
        
        <div className="tarjetas-registro-abm">
          {renderPantallaActual}
        </div>
        
        {renderIndicadorActual}
        
      </div>
    );
  }    
}