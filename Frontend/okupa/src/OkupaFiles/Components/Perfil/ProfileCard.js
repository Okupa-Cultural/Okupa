import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/ProfileCard.css';


export default class ProfileCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="tarjeta-perfil">
                <div className="foto-perfil">
                    <p>Cambiar foto de perfil</p>
                </div>
                
                {/*==========Datos de Cabecera==========*/}

                <div className="cabecera">
                <h2 className="nombre-de-usuario">Los Hijos de la Rossi</h2>
                
                <div className="estadisticas">
                    <ul>
                    <li>
                        <div className="cifra">{this.props.presentaciones}</div>
                        <div className="leyenda">Presentaciones</div>
                    </li>
                    <li>
                        <div className="cifra">{this.props.seguidores}</div>
                        <div className="leyenda">Seguidores</div>
                    </li>
                    <li>
                        <div className="cifra">{this.props.seguidos}</div>
                        <div className="leyenda">Seguidos</div>
                    </li>
                    </ul>
                </div>
                
                <div className="lista-etiquetas">
                    <ul>
                    <li className="etiqueta">Humor</li>
                    <li className="etiqueta">Teatro</li>
                    <li className="etiqueta">Música</li>
                    <li className="etiqueta">Clown</li>
                    <li className="etiqueta">Humor teatral</li>
                    <li className="etiqueta">Zona Oeste</li>
                    <li className="etiqueta">Nena, qué va a ser de mi</li>
                    <a href="https://www.google.com/search?q=etiquetas&rlz=1C1AFAB_enAR452AR472&sxsrf=ACYBGNTOtCDIRzAk-RUxxCZTpqMw92Ml3g:1569704759164&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ28n0tfTkAhXpGbkGHRLWCukQ_AUIEigB&biw=1366&bih=625">
                        <li className="etiqueta-puntos-suspensivos">...</li>
                    </a>
                    </ul>
                </div>

                <div className="perfil-botonera">
                    <Link to="">
                    <input type="submit" className="perfil-boton" value="INVITAR"/>
                    </Link>
                    <Link to="/registro">
                    <input type="submit" className="perfil-boton" value="SEGUIR"/>
                    </Link>
                </div>

            </div>
        </div>
        );
    }
}