import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//CSS
import './css/ProfileCard.css';
import './css/ProfileElementosComunes.css';
import './css/ProfileEventos.css';

//Componentes

export default class ProfileEventos extends Component {

    render() {
        return(
            <div className="tarjeta-perfil">

            <h3 className="seccion-titulo">Proximos eventos</h3>

            	<div className="listado-eventos">
            		<div className="evento">
            			<div className="evento-info">
                                    <Link to="/">
                  				<div className="evento-titulo">Buenardo Varietté</div>
                  				<div className="evento-fecha">21/10/2020</div>
                  			</Link>
                                    <Link to="/Registro">	
                                          <div className="evento-ubicacion">Zeugma Cultural (Haedo, Buenos Aires)</div>
                                    </Link>
                              </div>
            			<div className="evento-icono">
            				<Link to="/">
            					<i class="fa fa-calendar" aria-hidden="true" title="Agendar"></i>
            				</Link>
            			</div>
            		</div>
            		<div className="sombra"></div>
            		<div className="evento">
            			<div className="evento-info">
                                    <Link to="/">
                  				<div className="evento-titulo">Fiesta de la primavera</div>
                  				<div className="evento-fecha">25/10/2020</div>
            				</Link>
                                    <Link to="/Registro">
                                          <div className="evento-ubicacion">Casa Floripondio (San Miguel, Buenos Aires)</div>
                                    </Link>           			   
                              </div>
            			<div className="evento-icono">
            				<Link to="/">
            					<i class="fa fa-calendar" aria-hidden="true" title="Agendar"></i>
            				</Link>
            			</div>
            		</div> 
            		<div className="sombra"></div>
            		<div className="evento">
            			<div className="evento-info">
                                    <Link to="/">
                  				<div className="evento-titulo">"Querido fulano" en Capital!</div>
                  				<div className="evento-fecha">01/11/2020</div>
            				</Link>
                                    <Link to="/Registro">
                                          <div className="evento-ubicacion">Paseo La Plaza (Balvanera, CABA)</div>
                                    </Link>
                              </div>
            			<div className="evento-icono">
            				<Link to="/">
            					<i class="fa fa-calendar" aria-hidden="true" title="Agendar"></i>
            				</Link>
            			</div>
            		</div>
            		<div className="sombra"></div>
            		<div className="evento">
            			<div className="evento-info">
                                    <Link to="/">
                  				<div className="evento-titulo">Batalla de las bandas - Edición Oeste</div>
                  				<div className="evento-fecha">14/11/2020</div>
            				</Link>
                                    <Link to="/Registro">
                                          <div className="evento-ubicacion">Auditorio Oeste (Haedo, Buenos Aires)</div>
                                    </Link>
                              </div>
            			<div className="evento-icono">
            				<Link to="/">
            					<i class="fa fa-calendar" aria-hidden="true" title="Agendar"></i>
            				</Link>
            			</div>
            		</div>
            		<div className="sombra"></div>
            		<div className="evento">
            			<div className="evento-info">
                                    <Link to="/">
                  				<div className="evento-titulo">Verano sin vicky</div>
                  				<div className="evento-fecha">01/01/2021</div>
            				</Link>
                                    <Link to="/Registro">
                                          <div className="evento-ubicacion">Los Padrino Mágicos (Massachussets, EEUU)</div>
                                    </Link>
                              </div>
            			<div className="evento-icono">
            				<Link to="/">
            					<i class="fa fa-calendar" aria-hidden="true" title="Agendar"></i>
            				</Link>
            			</div>
            		</div>
            		<div className="sombra"></div>
            	</div>
            </div>
        );
    }
}