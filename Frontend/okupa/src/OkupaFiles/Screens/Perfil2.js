import React, { Component } from 'react';
import {Link} from 'react-router-dom';
//Imagenes
//import Fondo from './../../Images/bg2.jpg';
///////
//Components
import ProfileEtiquetas from './../Components/Perfil/ProfileEtiquetas'
import ProfileEstadisticas from './../Components/Perfil/ProfileEstadisticas'
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
          <div className="perfil2-foto-perfil"></div>
          
          <div className="usuario-datos">
            <h3 className="usuario-datos-nombre">Los hijos de la Rossi</h3>
            <ProfileEtiquetas />
            <ProfileEstadisticas />
          </div>
        </header>

        <aside className="perfil2-lateral">
          <div className="lateral-botones">
            <div className="perfil2-boton">Seguir</div>
            <div className="perfil2-boton">Invitar</div>
          </div>

          <div className="lateral-bloque">
            <div className="lateral-titulo">Fecha de inicio</div>
            <div className="lateral-valor">13/10/2017</div>
          </div>

          <div className="lateral-bloque">
            <div className="lateral-titulo">Bio</div>
            <div className="lateral-valor">
              <span>SOMOS...</span>
              Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
              Non dolores similique est
              dolorum sit inventore sed
              voluptas debitis, ut perspiciatis
              laudantium mollitia maiores veniam,
              quod quo exercitationem et totam a.
            </div>
          </div>

          <div className="lateral-bloque">
            <div className="lateral-titulo">Enlaces externos</div>
            <div className="lateral-valor">
              <div className="enlace">
                <div className="enlace-icono"></div>
                Facebook
              </div>
              <div className="enlace">
                <div className="enlace-icono"></div>
                Instagram
              </div>
              <div className="enlace">
                <div className="enlace-icono"></div>
                Youtube
              </div>
              <div className="enlace">
                <div className="enlace-icono"></div>
                Spotify
              </div>
              <div className="enlace">
                <div className="enlace-icono"></div>
                Soundcloud
              </div>
            </div>
          </div>
        </aside>

        <main className="perfil2-cuerpo">
          <div className="cuerpo-nav">
            <div className="cuerpo-nav-boton">Perfil</div>
            <div className="cuerpo-nav-boton">Publicaciones</div>
          </div>

          <div className="cuerpo-galeria">
            <img src="" alt="" className="galeria-elemento"/>
            <img src="" alt="" className="galeria-elemento"/>
            <img src="" alt="" className="galeria-elemento"/>
            <img src="" alt="" className="galeria-elemento"/>
            <img src="" alt="" className="galeria-elemento"/>
            <img src="" alt="" className="galeria-elemento"/>
            <img src="" alt="" className="galeria-elemento"/>
            <img src="" alt="" className="galeria-elemento"/>
            <img src="" alt="" className="galeria-elemento"/>
            <img src="" alt="" className="galeria-elemento"/>
            <img src="" alt="" className="galeria-elemento"/>
            <img src="" alt="" className="galeria-elemento"/>
          </div>

          <div className="cuerpo-listado-proxeventos">
            <proxevento>
              <div className="proxevento-datos">
                <Link to="/evento">
                  <div className="proxevento-titulo">Variette del nacho con cheddar</div>
                  <div className="proxevento-fecha">18/10/2019</div>
                  <Link to="/perfil2">
                    <div className="proxevento-espacio">Zeugma casa cultural, HAEDO</div>
                  </Link>
                </Link>
              </div>
              <div className="btn-agendar"></div>
            </proxevento>
            <proxevento>
              <div className="proxevento-datos">
                <Link to="/evento">
                  <div className="proxevento-titulo">Apertura "Casa de la ostra"</div>
                  <div className="proxevento-fecha">18/01/2020</div>
                  <Link to="/perfil2">
                    <div className="proxevento-espacio">Feria del libro, PALERMO</div>
                  </Link>
                </Link>
              </div>
              <div className="btn-agendar"></div>
            </proxevento>
            <proxevento>
              <div className="proxevento-datos">
                <Link to="/evento">
                  <div className="proxevento-titulo">El mató a un policía motorizado + LHDR</div>
                  <div className="proxevento-fecha">18/05/2020</div>
                  <Link to="/perfil2">
                    <div className="proxevento-espacio">Auditorio Oeste, HAEDO</div>
                  </Link>
                </Link>
              </div>
              <div className="btn-agendar"></div>
            </proxevento>
            <proxevento>
              <div className="proxevento-datos">
                <Link to="/evento">
                  <div className="proxevento-titulo">Tertulia del señor Bromol</div>
                  <div className="proxevento-fecha">18/09/2020</div>
                  <Link to="/perfil2">
                    <div className="proxevento-espacio">Mansion Mucha Plata, R. CASTILLO</div>
                  </Link>
                </Link>
              </div>
              <div className="btn-agendar"></div>
            </proxevento>
            <proxevento>
              <div className="proxevento-datos">
                <Link to="/evento">
                  <div className="proxevento-titulo">La sonrisa de Peron: un espectáculo familiar</div>
                  <div className="proxevento-fecha">18/10/2020</div>
                  <Link to="/perfil2">
                    <div className="proxevento-espacio">Sociedad de fomento Los Picaflores, BALVANERA</div>
                  </Link>
                </Link>
              </div>
              <div className="btn-agendar"></div>
            </proxevento>
          </div>
        </main>

        <footer className="perfil2-pie">
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit.
          Magnam itaque deserunt aspernatur
          eque, dolore excepturi expedita,
          consequuntur voluptatem totam
          quod quos explicabo asperiores
          quam temporibus aliquam iste,
          delectus accusantium earum!
        </footer>
      </div>
    );
  }
}