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
    
    setUserTypeValue = (user_type) => {
        try {
            document.getElementById("valorTipoUsuario").value = user_type;
            document.getElementById("btn-submit").click();
        } catch {}
    };
    
    render() {
        return(
            <section className="abm-seccion" name="seccion1" id="seccion1">
                    <div className="abm-seccion-cuerpo">
                        <h2>¿Qué acciones deseas realizar en Okupa?</h2>
                        <h3>- Elegí la opción que más se adapte a vos -</h3>
                        <form id="form_tarjetauno" name="form_tarjetauno" onSubmit={this.handleForm} action="">
                            <input type="hidden" value="0" id="valorTipoUsuario" name="user_type" />
                            <OkBoton onClick={() => this.setUserTypeValue(1)} Value="Presentarme en eventos y también organizarlos" Name="artista" TabIndex="1" />

                            <OkBoton onClick={() => this.setUserTypeValue(2)} Value="Solamente organizar evntos" Name="espacio" TabIndex="1" />

                            <OkBoton onClick={() => this.setUserTypeValue(3)}  Value="¡Ninguna! Solo quiero información" Name="butaca" TabIndex="1" />
                            <button type="submit" id="btn-submit" style={{display:"none"}}></button>
                        </form>
                        <div>¿Necesitas ayuda?</div>
                    </div>
            </section>
        );
    }
}