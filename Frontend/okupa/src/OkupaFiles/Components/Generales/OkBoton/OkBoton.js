import React, { Component } from 'react';

//CSS
import './css/OkBoton.css';

export default class OkBoton extends Component {
    
    render() {
        return(
            <div>
                <button 
                className="boton" 
                name={this.props.Name} 
                id={this.props.Name}
                tabIndex={this.props.TabIndex}
                desplegable={this.props.Desplegable}
                format={this.props.Format}
                icon={this.props.Icon}
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
    }
}