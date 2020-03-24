import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//CSS
import './css/OkBoton.css';

export default class OkBoton extends Component {
    
    render() {
        if(this.props.Type !== "link") {
            return(
                <div className="div-boton">
                    <button 
                    type={ this.props.Type || "button" }
                    className="boton" 
                    name={this.props.Name} 
                    id={this.props.Name}
                    tabIndex={this.props.TabIndex}
                    desplegable={this.props.Desplegable}
                    format={this.props.Format}
                    icon={this.props.Icon}
                    onClick={this.props.onClick}
                    >
                        {this.props.Value}

                        <div className="icono-desp" desplegable={this.props.Desplegable}>
                            <i className="fas fa-caret-down"></i>
                        </div>

                        <div className="icono-contacto">
                            <i className="fal fa-address-book"></i>
                        </div>

                    </button>

            </div>
            );
        } else {
            return (
                    <Link className="div-boton" to={this.props.To} >
                            <button 
                            type={ this.props.Type || "button" }
                            className="boton" 
                            name={this.props.Name} 
                            id={this.props.Name}
                            tabIndex={this.props.TabIndex}
                            desplegable={this.props.Desplegable}
                            format={this.props.Format}
                            icon={this.props.Icon}
                            onClick={this.props.onClick}
                            >
                                {this.props.Value}

                                <div className="icono-desp" desplegable={this.props.Desplegable}>
                                    <i className="fas fa-caret-down"></i>
                                </div>

                                <div className="icono-contacto">
                                    <i className="fal fa-address-book"></i>
                                </div>

                            </button>
                    </Link>
            );
        }
    }
}