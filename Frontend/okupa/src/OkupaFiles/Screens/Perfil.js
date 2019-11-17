import React, { Component } from 'react';

//Imagenes

//Components
import PerfilEtiquetas from './../Components/Perfil/PerfilEtiquetas';
import PerfilBotonera from './../Components/Perfil/PerfilBotonera';
import Estadisticas from './../Components/Perfil/Estadisticas';
import Bio from './../Components/Perfil/Bio';
import MainNav from './../Components/Perfil/MainNav';
import FechaDeFormacion from './../Components/Perfil/FechaDeFormacion';
import NavBar from './../Components/Navigation/NavBar';
import EnlacesExternos from './../Components/Perfil/EnlacesExternos';
import Galeria from './../Components/Perfil/Galeria';
import ProxEventos from './../Components/Perfil/ProxEventos';

//CSS
import './css/EstilosGenerales.css';
import './css/Perfil.css';
import store from '../../Redux/store';

export default class Perfil extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pantallaActual: 1,
      claseActiva: 'visible',
      claseInactiva: 'invisible',
      imagenes: [{ urls : {small:''}}, {urls : {small:''}  }]
    };

    this.TabNavigator = this.TabNavigator.bind(this);
  }

  
  componentDidMount() {
    // eslint-disable-next-line
    fetch('https://api.unsplash.com/photos/?client_id=05883571daf3b1e01c789ef7cd850e9fb242f48d3b9432b46fae325a7eba6c0b')
      .then(response => response.json())
      .then(json => { this.setState({ imagenes: json});});

    console.log(store.getState());
  }

  TabNavigator() {
    switch(this.state.pantallaActual) {
      case 1: return <ProxEventos />;
      case 2: return <Galeria imagenes={this.state.imagenes}/>;
      case 3: return <Galeria imagenes={this.state.imagenes}/>;
      default: break;
    }
  }

  TabNavigatorCallback = (dataFromChild) => {
      this.setState({
        pantallaActual: dataFromChild
      });
  }
  
render() {

  var PantallaActual = this.TabNavigator();

  return (

    <div className="perfil">

      <NavBar showSearchBar={true}/>
      
      <header className="perfil-cabecera">

        <img className="fotoperfil-movile" alt="perfil-mobile"></img>

        <div className="cabecera-datosusuario">
          <h2 className="datosusuario-nombre">Los hijos de la Rossi</h2>
          <PerfilEtiquetas />
          <Estadisticas />
          <PerfilBotonera /> 
        </div>
      </header>

      <aside className="perfil-columnaizq">
        <img className="columnaizq-fotoperfil" src={this.state.imagenes[1].urls.small} alt="foto de perfil"></img>
        <div className="columnaizq-secciones">
          <FechaDeFormacion />
          <Bio />
          <EnlacesExternos />
        </div>
      </aside>

      <main className="box perfil-cuerpo">
        <MainNav callback={this.TabNavigatorCallback}/>
        {PantallaActual}
      </main>

    </div>
  );
}
}