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
        var randomNumber = Math.round(this.getRandomArbitrary(1, 100));

        fetch('https://jsonplaceholder.typicode.com/posts/' + randomNumber)
            .then(response => response.json())
            .then(json => { this.setState({ biografia: json.body})});
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