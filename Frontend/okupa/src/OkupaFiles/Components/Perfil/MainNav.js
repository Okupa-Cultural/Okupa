import React, { Component } from 'react';

//CSS
import './css/MainNav.css'

export default class MainNav extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            pantalla : 1
        };
    }

    changeScreenValue = (data) => {
        this.props.callback(data);
    }

    render() {
        return(
            <nav className="main-nav">
                <button type="button" className="main-nav-boton" onClick={() => this.changeScreenValue(1)}>Próximos Eventos</button>
                <button type="button" className="main-nav-boton" onClick={() => this.changeScreenValue(2)}>Galeria</button>
                <button type="button" className="main-nav-boton" onClick={() => this.changeScreenValue(3)}>Tienda</button>
            </nav>
        );
    }
}