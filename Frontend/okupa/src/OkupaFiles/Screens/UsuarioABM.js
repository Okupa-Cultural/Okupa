import React, { Component } from 'react';
//import {  Link } from 'react-router-dom';
 
//Components

//CSS
import './css/EstilosGenerales.css';
import './css/UsuarioABM.css'


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
      username: '',
      email: '',
      password: '',
      name: '',
      fechaInicio: '',
      bio: '',
    };
  }

  cambiarEstadoPantallaActual = (pantallaNueva , formPantalla) => {

    switch(pantallaNueva) {
      case 1:
          this.setState({
            username : formPantalla.get('username'),
            email: formPantalla.get('mail'),
            password: formPantalla.get('password'),
          }); break;
      case 2: 
        this.setState({
          name : formPantalla.get('name'),
          fechaInicio: formPantalla.get('fechaInicio'),
          bio: formPantalla.get('bio'),
      }); break;
      case 3: break;
      case 4: break;
      default: break;
    }

    this.setState({
      pantallaActual : pantallaNueva,
    });

    console.log(this.state)
  };

  indicadorPantallaActual = (cantidadPantallas) => {

    var circulitos = [{}];

    for(var i = 0; i < cantidadPantallas; i++) {
      if(i !== this.state.pantallaActual) {
        circulitos[i] = <i key={i} className="fas fa-circle circulo"/>
      } else {
        circulitos[i] = <i key={i} className="fas fa-circle circuloActivo"/>
      }
    }

    return (
      <div className="indicador-pantalla-actual">
        {circulitos}
      </div>
    );
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
    let renderIndicadorActual = this.indicadorPantallaActual(4);

    return (
      <div className="usuario-abm">
        
        <div className="contenedor-tarjetas">
          {renderIndicadorActual}
          {renderPantallaActual}
        </div>
        
      </div>
    );
  }    
}