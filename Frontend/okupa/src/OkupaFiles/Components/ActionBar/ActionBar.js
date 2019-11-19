import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import {Link} from 'react-router-dom';

//CSS
import './css/ActionBar.css'

export default class ActionBar extends Component {

    render() {

      if(this.props.ocultar === 0) {
          return(
            <nav className="actionbar">
              <Link to="/evento">
                <button type="button" className="action-boton"><i className="fad fa-search"></i></button>
              </Link>
              <Link to="/evento">
                <button type="button" className="action-boton"><i className="fad fa-bell"></i></button>
              </Link>
              <Link to="/feed">
                <button type="button" className="action-boton"><i className="fad fa-home-lg"></i></button>
              </Link>
              <Link to="/evento">
                <button type="button" className="action-boton"><i className="fad fa-calendar-alt"></i></button>
              </Link>
              <Link to="/perfil">
                <button type="button" className="action-boton"><i className="fad fa-user-circle"></i></button>
              </Link>
            </nav>
          );
      } else {
        return (<div></div>);
      }
    }
}