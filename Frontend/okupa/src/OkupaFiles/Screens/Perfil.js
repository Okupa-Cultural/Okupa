import React, { Component } from 'react';

//Secciones
import Cabecera from '../Components/Perfil/Secciones/Cabecera';
import ProyectoInfo from '../Components/Perfil/Secciones/ProyectoInfo';
import EnlacesExternos from '../Components/Perfil/Secciones/EnlacesExternos';
import Pie from '../Components/Perfil/Secciones/Pie';

//Componentes
import ProxEvento from '../Components/Perfil/ProxEvento/ProxEvento';
import Articulo from '../Components/Perfil/Articulo/Articulo';

//Placeholders
import Placeholders from '../Lib/placeholder';

//CSS
import './css/EstilosGenerales.css';
import './css/Perfil.css';

export default class Perfil extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pantallaActual: 1,
      claseActiva: 'visible',
      claseInactiva: 'invisible',
      imagenes: [{ urls : {small:''}}, {urls : {small:''}  }],
      fotoPerfil: 0,
      fotoPerfilSource: '',
      profileName: 'Leslie Knope',
      profileDirectLink: 'okupa.com.ar/LinkFalso=123',
    };

//    this.TabNavigator = this.TabNavigator.bind(this);
    this.switchToFullScreen = this.switchToFullScreen.bind(this);
  }

  
  componentDidMount() {
    // eslint-disable-next-line
    fetch('https://api.unsplash.com/photos/?client_id=05883571daf3b1e01c789ef7cd850e9fb242f48d3b9432b46fae325a7eba6c0b')
      .then(response => response.json())
      .then(json => { this.setState({ imagenes: json});});
  }

  switchToFullScreen() {
    if(!this.state.btn){
      document.getElementById('fotoPerfil').className ='foto-perfil-movil-fullscreen';
      this.setState({btn: 1,});
    }else{
      document.getElementById('fotoPerfil').className ='foto-perfil-movil';
      this.setState({btn: 0,});
    }
  }

render() {

  return (
    <div className="perfil">
      <div 
      className="foto-perfil-movil" 
      id="fotoPerfil" 
      onClick={this.switchToFullScreen} 
      >
        <img src={Placeholders.Image.ProphilePhoto}
        alt={this.state.profileName}
        title={this.state.profileName}
        />
      </div>

      <Cabecera profileName={this.state.profileName} />

      <div className="columna-izquierda">
        <img 
        src={this.state.fotoPerfilSource}
        alt="Leslie Knope"
        title="Leslie Knope"
        className="foto-perfil-escritorio"
        />

        <ProyectoInfo />

        <EnlacesExternos />

        <Pie profileDirectLink={this.state.profileDirectLink} ocultoEnMoviles="1" />
      </div>

      <main>
        <section className="proximos-eventos">
          <h2>
            Proximos eventos
          </h2>
            <div className="scrolling-container">
              <ProxEvento
                eventType="Espectáculo"            
                eventImg="https://www.vuenosairez.com/images/eventos/messi10-de-921865.jpg" 
                eventName="Messi: firma de autógrafos en Villa Celina"
                eventAdress="Celina kultura"
                eventZone="Villa Celina, Buenos Aires"
                eventMonth="jun"
                eventDay="06"
                eventHour="13:00"
              />

              <ProxEvento            
                eventType="Convención/Feria"
                eventImg="https://www.infobae.com/new-resizer/74aJKM7Ju05vdQxqqNP7cVUyhkY=/750x0/filters:quality(100)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/NNKXXFKOEBDVZLLVPYLFPBNG7A" 
                eventName="Congreso internacional de verdulerías"
                eventAdress="Zeugma Cultural"
                eventZone="Haedo, Buenos Aires"
                eventMonth="mar"
                eventDay="19"
                eventHour="00:00"
              />
              
              <ProxEvento            
                eventType="Espectáculo"
                eventImg="https://www.vuenosairez.com/images/eventos/messi10-de-921865.jpg" 
                eventName="Messi: firma de autógrafos en Villa Celina"
                eventAdress="Celina kultura"
                eventZone="Villa Celina, Buenos Aires"
                eventMonth="jun"
                eventDay="06"
                eventHour="13:00"
              />

              <ProxEvento            
                eventType="Convención/Feria"
                eventImg="https://www.infobae.com/new-resizer/74aJKM7Ju05vdQxqqNP7cVUyhkY=/750x0/filters:quality(100)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/NNKXXFKOEBDVZLLVPYLFPBNG7A" 
                eventName="Congreso internacional de verdulerías"
                eventAdress="Zeugma Cultural"
                eventZone="Haedo, Buenos Aires"
                eventMonth="mar"
                eventDay="19"
                eventHour="00:00"
              />
            </div>
        </section>

        <section className="galeria">
          <h2>Galería</h2>

        </section>

        <section className="tienda">
          <h2>Tienda</h2>
            <div className="scrolling-container">
              <Articulo            
                articleImg="https://i.pinimg.com/474x/f7/d9/61/f7d961ca26c1d9fa14ee9a68a6a61340.jpg" 
                articleName="Sticker grande serigrafiado sin borde"
                articleSubtitle="Medidas: 45x50 cm"
                articlePrice="75"
              />
              <Articulo            
                articleImg="https://i.pinimg.com/originals/20/52/d4/2052d48c1dfd47991e952011bca4e4c5.jpg"
                articleName="Pulseras hechas a mano"
                articlePrice="200"
              />
              <Articulo            
                articleImg="https://apod.nasa.gov/apod/image/9906/sudbury_sno.jpg"
                articleName="Bomba de neutrinos, como nueva"
                articleSubtitle="Perfecto estado, no se usó nunca"
                articlePrice="6"
              />
              <Articulo            
                articleImg="https://http2.mlstatic.com/remeras-de-pink-floyd-varios-modelos-todas-las-bandas-rock-D_NQ_NP_700543-MLA25598254561_052017-F.jpg"
                articleName="Remera de mi hermano"
                articleSubtitle="Talle L. Y...un poquito baqueteada está"
                articlePrice="100.000"
              />
            </div>
        </section>
      </main>

      <Pie profileDirectLink={this.state.profileDirectLink} profileName={this.state.profileName} ocultoEnMoviles="0" />

    </div>
  );
}
}