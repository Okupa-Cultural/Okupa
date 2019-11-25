import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//CSS
import './css/TarjetaRegistro.css';

export default class TarjetaRegistro extends Component {
    
    render() {
        return(
            <Link to="/usuarioabm">
                <div className="tarjeta-registro"  id={this.props.clase}>
                    <div className={this.props.clase}>
                        <span className="middle">
                            {this.props.body}
                        </span>
                    </div>
                </div>
            </Link>
        );
    }
}