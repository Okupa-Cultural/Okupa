import React, { Component } from 'react';

//Components
import OkBoton from '../Components/Generales/OkBoton/OkBoton';
import Etiqueta from '../Components/Generales/Etiqueta/Etiqueta';
import ScrollingHorizontal from '../Components/ScrollingHorizontal/ScrollingHorizontal';
import ProxEvento from '../Components/Perfil/ProxEvento/ProxEvento';
import Articulo from '../Components/Perfil/Articulo/Articulo';

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

        <div className="img-sombra"></div>

        <img src="https://i.imgur.com/5NXgWQe.jpg" 
        alt="Leslie Knope"
        title="Leslie Knope"
        />
      </div>
      <section className="p-cabecera">
        <h1 className="p-nombre">
          Leslie Knope
        </h1>
        <div className="p-etiquetas">
          <Etiqueta Value="Actuación" Editable="0" Format="small" />
          <Etiqueta Value="Teatro" Editable="0" Format="small" />
          <Etiqueta Value="Cine" Editable="0" Format="small" />
          <Etiqueta Value="Música" Editable="0" Format="small" />
          <Etiqueta Value="Tango" Editable="0" Format="small" />
        </div>
        <div className="p-estadisticas">
          <div className="estadisticas-elemento">
            <span className="cantidad">150 K</span>
            <span className="leyenda">
              <i className="fad fa-users"></i>
              &nbsp;
              Seguidores
            </span>
          </div>

          <div className="p-divisor"></div>

          <div className="estadisticas-elemento">
            <span className="cantidad">6</span>
            <span className="leyenda">
              <i className="fad fa-hiking"></i>
              &nbsp;
              Seguidos
            </span>
          </div>

          <div className="p-divisor"></div>

          <div className="estadisticas-elemento">
            <span className="cantidad">960</span>
            <span className="leyenda">
              <i className="fad fa-calendar-alt"></i>
              &nbsp;
              Eventos
            </span>
          </div>
        </div>

        <nav className="p-botonera">
          <OkBoton Value="Seguir" />
          <OkBoton Value="Invitar" />
        </nav>
      </section>
      <section className="proyecto-info">
        <div className="fecha-formacion">
          <h2>
            Fecha de formación
          </h2>
          <span className="fecha">
            01-06-2008
          </span>
        </div>
        <div className="bio">
          <h2>
            Biografía
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur 
            adipisicing elit. Provident magni 
            recusandae quae voluptatum aut cum atque 
            consequuntur unde in modi ullam quam 
            officia repudiandae fugiat placeat rerum, 
            veritatis qui assumenda!
          </p>
        </div>
      </section>
      <section className="enlaces-externos">
          <h2>Enlaces externos</h2>
          <form className="enlaces-contenedor">
            <button formAction="https://instagram.com" formTarget="_blank">
              <i className="fab fa-instagram"></i>
              <span className="leyenda">Instagram</span>
            </button>
            <button formAction="https://soundcloud.com" formTarget="_blank">
              <i className="fab fa-soundcloud"></i>
              <span className="leyenda">Soundcloud</span>
            </button>
            <button formAction="https://Bandcamp.com" formTarget="_blank">
              <i className="fab fa-bandcamp"></i>
              <span className="leyenda">Bandcamp</span>
            </button>
            <button formAction="https://facebook.com" formTarget="_blank">
              <i className="fab fa-facebook-square"></i>
              <span className="leyenda">Facebook</span>
            </button>
            <button formAction="http://www.alternativateatral.com" formTarget="_blank">
              <i className="fas fa-link"></i>
              <span className="leyenda">Alternativa teatral</span>
            </button>
            <button formAction="https://twitter.com" formTarget="_blank">
              <i className="fab fa-twitter"></i>
              <span className="leyenda">Twitter</span>
            </button>
            
          </form>
      </section>
      <section className="proximos-eventos">
        <h2>
          Proximos eventos
        </h2>
        <div className="proximos-eventos-scrolling">
          <ScrollingHorizontal Size="original">
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
          </ScrollingHorizontal>
        </div>
      </section>

      <section className="galeria">
        <h2>Galería</h2>
          
      </section>

      <section className="tienda">
        <h2>Tienda</h2>
          <ScrollingHorizontal Size="original">
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
          </ScrollingHorizontal>
      </section>
      <section className="footer">
        <h2>Compartir&nbsp;<i class="fas fa-share-alt"></i></h2>
          <div className="share">
            <h3>Link</h3>
            <div className="link" id="profileLink">https://www.okupa.com.ar/perfil$sarasa=leslie$knope#piripipi</div>
          </div>
          <div className="url">
            Compartir en facebook
          </div>
          <div className="url">
            Compartir en twitter
          </div>
          <div className="url">
            Compartir en Instagram storys (creo que se puede)
          </div>
      </section>
    </div>
  );
}
}