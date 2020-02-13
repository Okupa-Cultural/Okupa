import React, { Component } from 'react';

//Componentes
import OkBoton from '../Generales/OkBoton/OkBoton';

export default class TarjetaRegistroUno extends Component {

    handleForm = (event) => {
        event.preventDefault();

        const formFormateado = new FormData(event.target);
        //console.log(formFormateado.get('name'));
        this.props.callback(1 , formFormateado);
    };

    render() {
        return(
            <section className="abm-seccion" name="seccion1" id="seccion1">
                    <div className="abm-seccion-cuerpo">
                        <h2>¿Qué acciones deseas realizar en Okupa?</h2>
                        <h3>- Elegí la opción que más se adapte a vos -</h3>
                        <form onSubmit={this.handleForm} action="">
                            <OkBoton Value="Presentarme en eventos y también organizarlos" Name="artista" TabIndex="1" />

                            <OkBoton Value="Presentarme en eventos y también organizarlos" Name="espacio" TabIndex="1" />

                            <OkBoton Value="Presentarme en eventos y también organizarlos" Name="butaca" TabIndex="1" />
                        </form>
                        <div>¿Necesitas ayuda?</div>
                    </div>
            </section>
        );
    }
}