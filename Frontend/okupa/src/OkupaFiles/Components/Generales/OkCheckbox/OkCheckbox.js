import React, { Component } from 'react';

//CSS
import './css/OkCheckbox.css';

export default class OkCheckbox extends Component {

    //estadoActual = 0 (Desactivado) sino, (Activado)
    constructor(props) {
        super(props)

        this.state = {
            estadoActual : 0,
            claseActual : false,
            claseActiva : "input-check-contenedor",
            claseInactiva : "input-check-contenedor-disabled",
        };
    }

    setEstado = () => {
        let cambioDeClase = !this.state.claseActual;
        this.setState({
            estadoActual : this.inputElement,
            claseActual : cambioDeClase,
        });

    }

    setClase = (claseActual) => {
        if(claseActual) {
            return this.state.claseActiva;
        } else {
            return this.state.claseInactiva;
        }
    }

    render() {
        return(
            <label htmlFor={this.props.Name} className={this.setClase(this.state.claseActual)} tabIndex={this.props.Tabindex}>
                <input ref={(valueCheckbox) => this.inputElement = valueCheckbox} 
                       onClick={this.setEstado} 
                       id={this.props.Name} 
                       type="checkbox"
                       className="oculto"
                />
                
            </label>
        );
    }
}