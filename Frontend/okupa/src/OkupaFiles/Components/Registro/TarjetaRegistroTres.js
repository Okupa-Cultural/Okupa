import React, { Component } from 'react';


export default class TarjetaRegistroTres extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <section className="abm-seccion" name="seccion3" id="seccion3">
                <h2>Elije tus etiquetas!</h2>
                <h3>No escatimes! con ellas, otros espacios y artistas van a poder encontrarte más fácilmente</h3>
                
                <div className="elemento-temporal">Aca va el selector de etiquetas <br /> :D</div>
    
                <button type="button" onClick={() => this.props.callback(3)} className="form-boton abm-boton">Siguiente</button>
            </section>
        );
    }
}