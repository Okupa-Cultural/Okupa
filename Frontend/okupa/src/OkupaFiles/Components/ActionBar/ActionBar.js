import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import {Link} from 'react-router-dom';

//CSS
import './css/ActionBar.css'

export default class ActionBar extends Component {

    constructor(props) {
      super(props);
      this.revelar = this.revelar.bind(this);
    }
    revelar() {
      document.getElementById('nuevo').className ='nuevo-revelado';
      document.getElementById('primero').className ='primero';
      document.getElementById('segundo').className ='segundo';
      document.getElementById('tercero').className ='tercero';
      document.getElementById('cuarto').className ='cuarto';
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
                <button type="button" className="nuevo" id="nuevo" onClick={this.revelar}><i className="fal fa-plus"></i></button>

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