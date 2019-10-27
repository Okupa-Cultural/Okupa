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

            <h3 className="seccion-titulo">Proximos p-eventos</h3>

            	<div className="listado-p-p-eventos">
            		<div className="p-evento">
            			<div className="p-evento-info">
                                    <Link to="/">
                  				<div className="p-evento-titulo">Buenardo Varietté</div>
                  				<div className="p-evento-fecha">21/10/2020</div>
                  			</Link>
                                    <Link to="/Registro">	
                                          <div className="p-evento-ubicacion">Zeugma Cultural (Haedo, Buenos Aires)</div>
                                    </Link>
                              </div>
            			<div className="p-evento-icono">
            				<Link to="/">
            					<i class="fa fa-calendar" aria-hidden="true" title="Agendar"></i>
            				</Link>
            			</div>
            		</div>
            		<div className="sombra"></div>
            		<div className="p-evento">
            			<div className="p-evento-info">
                                    <Link to="/">
                  				<div className="p-evento-titulo">Fiesta de la primavera</div>
                  				<div className="p-evento-fecha">25/10/2020</div>
            				</Link>
                                    <Link to="/Registro">
                                          <div className="p-evento-ubicacion">Casa Floripondio (San Miguel, Buenos Aires)</div>
                                    </Link>           			   
                              </div>
            			<div className="p-evento-icono">
            				<Link to="/">
            					<i class="fa fa-calendar" aria-hidden="true" title="Agendar"></i>
            				</Link>
            			</div>
            		</div> 
            		<div className="sombra"></div>
            		<div className="p-evento">
            			<div className="p-evento-info">
                                    <Link to="/">
                  				<div className="p-evento-titulo">"Querido fulano" en Capital!</div>
                  				<div className="p-evento-fecha">01/11/2020</div>
            				</Link>
                                    <Link to="/Registro">
                                          <div className="p-evento-ubicacion">Paseo La Plaza (Balvanera, CABA)</div>
                                    </Link>
                              </div>
            			<div className="p-evento-icono">
            				<Link to="/">
            					<i class="fa fa-calendar" aria-hidden="true" title="Agendar"></i>
            				</Link>
            			</div>
            		</div>
            		<div className="sombra"></div>
            		<div className="p-evento">
            			<div className="p-evento-info">
                                    <Link to="/">
                  				<div className="p-evento-titulo">Batalla de las bandas - Edición Oeste</div>
                  				<div className="p-evento-fecha">14/11/2020</div>
            				</Link>
                                    <Link to="/Registro">
                                          <div className="p-evento-ubicacion">Auditorio Oeste (Haedo, Buenos Aires)</div>
                                    </Link>
                              </div>
            			<div className="p-evento-icono">
            				<Link to="/">
            					<i class="fa fa-calendar" aria-hidden="true" title="Agendar"></i>
            				</Link>
            			</div>
            		</div>
            		<div className="sombra"></div>
            		<div className="p-evento">
            			<div className="p-evento-info">
                                    <Link to="/">
                  				<div className="p-evento-titulo">Verano sin vicky</div>
                  				<div className="p-evento-fecha">01/01/2021</div>
            				</Link>
                                    <Link to="/Registro">
                                          <div className="p-evento-ubicacion">Los Padrino Mágicos (Massachussets, EEUU)</div>
                                    </Link>
                              </div>
            			<div className="p-evento-icono">
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