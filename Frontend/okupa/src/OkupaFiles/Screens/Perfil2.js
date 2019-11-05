import React, { Component } from 'react';
import {Link} from 'react-router-dom';
//Imagenes
//import Fondo from './../../Images/bg2.jpg';
///////
//Components
import ProfileEtiquetas from './../Components/Perfil/ProfileEtiquetas'
//import ProfileEstadisticas from './../Components/Perfil/ProfileEstadisticas'
//import NavBar from './../Components/Navigation/NavBar';
//import ProfileCard from './../Components/Perfil/ProfileCard';
//import ProfileDescripcion from './../Components/Perfil/ProfileDescripcion';
//import ProfileGaleria from './../Components/Perfil/ProfileGaleria';
//import ProfileEventos from './../Components/Perfil/ProfileEventos';
//import ProfileEnlaces from './../Components/Perfil/ProfileEnlaces';

//////
//CSS
import './css/EstilosGenerales.css';
import './css/Perfil2.css';

export default class Perfil2 extends Component {
  
render() {

  return (

    <div className="perfil2">
      
      <header className="perfil2-cabecera">

        <div className="fotoperfil-movile"></div>

        <div className="cabecera-datosusuario">

          <h2 className="datosusuario-nombre">Los hijos de la Rossi</h2>
          
          <ProfileEtiquetas />

          <div className="datosusuario-estadisticas">
            <seccion className="estadistica">
              <div className="estadistica-cifra">650</div>
              <div className="estadistica-label">Seguidores</div>
            </seccion>
            <seccion className="estadistica">
              <div className="estadistica-cifra">121</div>
              <div className="estadistica-label">Seguidos</div>
            </seccion>
            <seccion className="estadistica">
              <div className="estadistica-cifra">937</div>
              <div className="estadistica-label">Eventos</div>
            </seccion>
          </div>

          <div className="cabecera-botonera">
            <button>
              <div className="botonera-boton">
                Seguir
              </div>
            </button>

            <button>
              <div className="botonera-boton">
                Invitar
              </div>
            </button>
          </div> 
            
        </div>
      </header>

      <aside className="perfil2-columnaizq">
        <div className="columnaizq-sombra"></div>

        <div className="columnaizq-fotoperfil"></div>

        <div className="columnaizq-secciones">
          <seccion className="seccion">
            <h4 className="seccion-titulo">
            Fecha de formación
            </h4>
            <div className="seccion-caja">
              13/10/2017
            </div>
          </seccion>
          <seccion className="seccion">
            <h4 className="seccion-titulo">
            Bio
            </h4>
            <div className="seccion-caja">
              Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
              Mollitia et excepturi atque
              ducimus, dolorem dolore sed
              reprehenderit velit veniam
              libero tenetur quae odit,
              dolor consequuntur praesentium
              neque nihil nesciunt quibusdam.
            </div>
          </seccion>
          <seccion className="seccion">
            <h4 className="seccion-titulo">
            Enlaces externos
            </h4>
            <div className="seccion-caja">
              <ul>
                <li className="enlaceexterno">
                  <Link to="/perfil2">
                    <i className="fab fa-facebook-square"></i>
                    Facebook
                  </Link>
                </li>
                <li className="enlaceexterno">
                  <Link to="/perfil2">
                    <i className="fab fa-twitter-square"></i>
                    Twitter
                  </Link>
                </li>
                <li className="enlaceexterno">
                  <Link to="/perfil2">
                    <i className="fab fa-instagram"></i>
                    Instagram
                  </Link>
                </li>
                <li className="enlaceexterno">
                  <Link to="/perfil2">
                    <i className="fab fa-spotify"></i>
                    Spotify
                  </Link>
                </li>
                <li className="enlaceexterno">
                  <Link to="/perfil2">
                    <i className="fab fa-soundcloud"></i>
                    Soundcloud
                  </Link>
                </li>
              </ul>
            </div>
          </seccion>
        </div>
      </aside>
      <main className="box perfil2-cuerpo">

        <seccion className="cuerpo-galeria">
          <div className="galeria-elemento"></div>
          <div className="galeria-elemento"></div>
          <div className="galeria-elemento"></div>
          <div className="galeria-elemento"></div>
          <div className="galeria-elemento"></div>
          <div className="galeria-elemento"></div>
          <div className="galeria-elemento"></div>
          <div className="galeria-elemento"></div>
          <div className="galeria-elemento"></div>
          <div className="galeria-elemento"></div>
          <div className="galeria-elemento"></div>
          <div className="galeria-elemento"></div>
        </seccion>

        <seccion className="cuerpo-proxeventos">
          <h3 className="seccion-titulo proxeventos">Proximos eventos</h3>
          <div className="proxeventos-evento">
            <div className="evento-datos">
              <div className="datos-titulo">Variette del nacho con cheddar</div>
              <div className="datos-fecha">25/10/2021</div>
              <div className="datos-espacio">Zeugma Cultural, Haedo</div>
            </div>
            <button className="icono-agendar">
              <i class="fa fa-calendar" aria-hidden="true" title="Agendar"></i>
            </button>
          </div>
          <div className="proxeventos-evento">
            <div className="evento-datos">
              <div className="datos-titulo">Variette del nacho con cheddar</div>
              <div className="datos-fecha">25/10/2021</div>
              <div className="datos-espacio">Zeugma Cultural, Haedo</div>
            </div>
            <button className="icono-agendar">
              <i class="fa fa-calendar" aria-hidden="true" title="Agendar"></i>
            </button>
          </div>
          <div className="proxeventos-evento">
            <div className="evento-datos">
              <div className="datos-titulo">Variette del nacho con cheddar</div>
              <div className="datos-fecha">25/10/2021</div>
              <div className="datos-espacio">Zeugma Cultural, Haedo</div>
            </div>
            <button className="icono-agendar">
              <i class="fa fa-calendar" aria-hidden="true" title="Agendar"></i>
            </button>
          </div>
          <div className="proxeventos-evento">
            <div className="evento-datos">
              <div className="datos-titulo">Variette del nacho con cheddar</div>
              <div className="datos-fecha">25/10/2021</div>
              <div className="datos-espacio">Zeugma Cultural, Haedo</div>
            </div>
            <button className="icono-agendar">
                <i class="fa fa-calendar" aria-hidden="true" title="Agendar"></i>
            </button>
          </div>

        </seccion>

      </main>

    </div>
  );
}
}