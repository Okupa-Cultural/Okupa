import React, { Component } from 'react';

//CSS
import './css/MainNav.css'

export default class MainNav extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            pantalla : 1,
            claseActiva: 'main-nav-boton',
            claseInactiva: 'main-nav-boton-inactivo'
        };
    }

    changeScreenValue = (data) => {
        this.props.callback(data);
        this.setState({
            pantalla: data
        });
    }

    setClass = (pantalla) => {
        if(this.state.pantalla === pantalla) { 
            return this.state.claseActiva;
        } else {
            return this.state.claseInactiva;
        }
    }

    render() {
        return(
            <nav className="main-nav">
                <button type="button" className={this.setClass(1)} onClick={() => this.changeScreenValue(1)}>Próximos Eventos</button>
                <button type="button" className={this.setClass(2)} onClick={() => this.changeScreenValue(2)}>Galeria</button>
                <button type="button" className={this.setClass(3)} onClick={() => this.changeScreenValue(3)}>Tienda</button>
            </nav>
        );
    }
}