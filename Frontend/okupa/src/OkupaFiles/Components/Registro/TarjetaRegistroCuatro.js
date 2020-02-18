import React, { Component } from 'react';

//Componentes
import SelectorEtiquetas from '../Generales/SelectorEtiquetas/SelectorEtiquetas';

export default class TarjetaRegistroTres extends Component {

    handleForm = (event) => {
        event.preventDefault();

        const formFormateado = new FormData(event.target);
        //console.log(formFormateado.get('name'));
        this.props.callback(4 , formFormateado);
    };

    render() {
        return(
            <section className="abm-seccion" name="seccion3" id="seccion3">
                <div className="abm-seccion-cuerpo">
                    <h2>Elegí tus etiquetas</h2>
                    <h3>- Servirán para que otras personas te encuentren con facilidad -</h3>
                    <form onSubmit={this.handleForm} action="">
                        <SelectorEtiquetas />
                    </form>
                </div>
            </section>
        );
    }
}