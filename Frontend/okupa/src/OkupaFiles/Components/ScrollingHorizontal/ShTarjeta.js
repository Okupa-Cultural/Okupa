import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//CSS
import './css/ScrollingHorizontal.css';

export default class ShTarjeta extends Component {

    render() {
        return(
            <Link to={this.props.Link}>
                <div className="sh-tarjeta" type={this.props.Type}>
                    <div className="imgSombra">
                    </div>
                    
                    {this.props.children}
                    
                    <div className="shTarjetaTitulo">
                        {this.props.Titulo}
                    </div>
                </div>
            </Link>
        );
    }
}