import React, { Component } from 'react';

//CSS
import './css/SeccionesColumnaIzq.css'

export default class Bio extends Component {

    constructor(props) {
        super(props);

        this.state = {
            biografia: ''
        }
    }

    getRandomArbitrary = (min, max) => {
        return Math.random() * (max - min) + min;
      }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/Usuarios/')
            .then(response => response.json())
            .then(json => { try { this.setState({ biografia: json[0].description}) } catch { }});
    }

    render() {
        return(
            <section className="seccion">
                <h4 className="seccion-titulo">
                Bio
                </h4>
                <div className="seccion-caja">
                    {this.state.biografia}
                </div>
            </section>
        );
    }
}