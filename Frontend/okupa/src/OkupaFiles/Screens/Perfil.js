import React, { Component } from 'react';

//Imagenes

//Components
import PerfilEtiquetas from './../Components/Perfil/PerfilEtiquetas'
import PerfilBotonera from './../Components/Perfil/PerfilBotonera'
import Estadisticas from './../Components/Perfil/Estadisticas'
import Bio from './../Components/Perfil/Bio'
import FechaDeFormacion from './../Components/Perfil/FechaDeFormacion';
import NavBar from './../Components/Navigation/NavBar';
import EnlacesExternos from './../Components/Perfil/EnlacesExternos';
import Galeria from './../Components/Perfil/Galeria'
import ProxEventos from './../Components/Perfil/ProxEventos'

//CSS
import './css/EstilosGenerales.css';
import './css/Perfil.css';

export default class Perfil extends Component {
  
render() {

  return (

    <div className="perfil">

      <NavBar showSearchBar={true}/>
      
      <header className="perfil-cabecera">

        <div className="fotoperfil-movile"></div>

        <div className="cabecera-datosusuario">
          <h2 className="datosusuario-nombre">Los hijos de la Rossi</h2>
          <PerfilEtiquetas />
          <Estadisticas />
          <PerfilBotonera /> 
        </div>
      </header>

      <aside className="perfil-columnaizq">
        <div className="columnaizq-fotoperfil"></div>
        <div className="columnaizq-secciones">
          <FechaDeFormacion />
          <Bio />
          <EnlacesExternos />
        </div>
      </aside>

      <main className="box perfil-cuerpo">
        <Galeria />
        <ProxEventos />
      </main>

    </div>
  );
}
}