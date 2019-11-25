import React, { Component } from 'react';


export default class TarjetaRegistroUno extends Component {

    render() {
        return(
            <section className="abm-seccion" name="seccion1" id="seccion1">
                {/* <form action=""> */}
                    <h2>Bienvenidx a OKUPA!</h2>
                    <label>Elije tu nombre de usuario</label>
                    <input type="text" name="username" id="username" className="abm-input" autoComplete="off" autoCapitalize="none" tabIndex="1" placeholder="El nombre con el que ingresarás a Okupa" />
                    
                    <label>Ingresa tu email</label>
                    <input type="email" name="email" id="email" className="abm-input" autoComplete="off" tabIndex="2" placeholder="Para recibir información y que podamos validar tu cuenta" />
        
                    <label>Elige una contraseña</label>
                    <input type="password" name="password" id="password" className="abm-input" autoComplete="off" tabIndex="3" placeholder="Que sea lo más segura posible! :o" />
                
                    <button type="button" onClick={() => this.props.callback(1)} className="form-boton abm-boton">Siguiente</button>
                {/* </form> */ }
            </section>
        );
    }
}