import React, { Component } from 'react';
//import {Link} from 'react-router-dom';

//CSS
import './css/ActionBar.css'

export default class ActionBar extends Component {

    render() {
        return(
            <nav className="actionbar">
               <button type="button" className="action-boton"><i class="fad fa-search"></i>x</button>
               <button type="button" className="action-boton">Botón 2</button>
               <button type="button" className="action-boton">Botón 3</button>
               <button type="button" className="action-boton">Botón 4</button>
               <button type="button" className="action-boton">Botón 5</button>
            </nav>
        );
    }
}