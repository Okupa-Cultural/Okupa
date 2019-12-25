import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import {Link} from 'react-router-dom';

//CSS
import './css/ActionBar.css'

export default class ActionBar extends Component {

    constructor(props) {
      super(props);
      this.revelarOcultar = this.revelarOcultar.bind(this);
      this.state = {btn: 0,};
    }

    revelarOcultar() {
      if(!this.state.boton){
        document.getElementById('nuevo').className ='nuevo-revelado';
        document.getElementById('primero').className ='primero';
        document.getElementById('segundo').className ='segundo';
        document.getElementById('tercero').className ='tercero';
        document.getElementById('cuarto').className ='cuarto';
        this.setState({boton: 1,});
      }else{
        document.getElementById('nuevo').className ='nuevo';
        document.getElementById('primero').className ='action-boton-oculto';
        document.getElementById('segundo').className ='action-boton-oculto';
        document.getElementById('tercero').className ='action-boton-oculto';
        document.getElementById('cuarto').className ='action-boton-oculto';
        this.setState({boton: 0,});
      }
    }

    render() {
      if(this.props.ocultar === 0) {
          return(
            <nav className="actionbar">
              <Link to="/Notifications" className="link-visible">
                <button type="button" className="action-boton"><i className="fal fa-bell"></i></button>
              </Link>
              <Link to="/feed" className="link-visible">
                <button type="button" className="action-boton"><i className="fal fa-calendar-alt"></i></button>
              </Link>
              <Link to="/feed" className="link-visible">
                <button type="button" className="action-boton"><i className="fal fa-home-alt"></i></button>
              </Link>
              <Link to="/perfil" className="link-visible">
                <button type="button" className="action-boton"><i className="fal fa-user-circle"></i></button>
              </Link>
              <div className="nuevo-contenedor action-boton">
                <button type="button" className="nuevo" id="nuevo" onClick={this.revelarOcultar}><i className="fal fa-plus"></i></button>

                <Link className="link-oculto" to="/feed">
                  <button className="action-boton-oculto" id="primero">
                  <div>Espectáculo</div>
                </button>
                </Link>

                <Link className="link-oculto" to="/feed">
                  <button className="action-boton-oculto" id="segundo">
                    <div>Taller/Seminario</div>
                  </button>
                </Link>
                
                <Link className="link-oculto" to="/feed">
                  <button className="action-boton-oculto" id="tercero">
                    <div>Convención/Feria</div>
                  </button>
                </Link>
                

                <Link className="link-oculto" to="/feed">
                  <button className="action-boton-oculto" id="cuarto">
                    <div>Publicación</div>
                  </button>
                </Link>
              </div>
            </nav>
          );
      } else {
        return (<div></div>);
      }
    }
}