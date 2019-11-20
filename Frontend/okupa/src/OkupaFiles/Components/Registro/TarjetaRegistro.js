import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//CSS
import './css/TarjetaRegistro.css';

export default class TarjetaRegistro extends Component {
    
    render() {
        return(
            <Link to="/">
                <div className="tarjeta-registro">
                    <div className={this.props.clase} id={this.props.clase}>
                        <span className="middle">
                            {this.props.body}
                        </span>
                    </div>
                </div>
            </Link>
        );
    }
}