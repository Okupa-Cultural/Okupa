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
                <input type="button" onClick={() => this.changeScreenValue(1)} value="Próximos Eventos"/>
                <input type="button" onClick={() => this.changeScreenValue(2)} value="Galeria" />
                <input type="button" onClick={() => this.changeScreenValue(3)} value="Tienda"/>
            </nav>
        );
    }
}