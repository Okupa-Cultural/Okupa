import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//CSS
import './css/Comentario.css';

export default class Comentario extends Component {

    render() {

        return(
            <div className="comentario-contenedor">

                <div className="comentario">
                    <Link to="/perfil">
                        <div className="comentario-cabecera">
                            <div className="comentario-foto"></div>
                            <div className="comentario-datos">
                                <div className="comentario-usuario">
                                    Pepito el lechero
                                </div>
                                <div className="comentario-fechayhora">
                                    10/09/2020 · 22:01
                                </div>
                            </div>
                        </div>
                    </Link>
                    <p className="comentario-texto">
                      Hater, heiteeeer! Soy un hater!
                      <br />.
                      <br />.
                      <br />.
                      <br />Hater!
                    </p>
                </div> 

            </div>
        );
    }
}