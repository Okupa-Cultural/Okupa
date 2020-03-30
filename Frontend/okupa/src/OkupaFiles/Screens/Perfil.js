import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

//Secciones
import Cabecera from '../Components/Perfil/Secciones/Cabecera';
import ProyectoInfo from '../Components/Perfil/Secciones/ProyectoInfo';
import EnlacesExternos from '../Components/Perfil/Secciones/EnlacesExternos';
import Pie from '../Components/Perfil/Secciones/Pie';

//Componentes
import ProxEvento from '../Components/Perfil/ProxEvento/ProxEvento';
import Articulo from '../Components/Perfil/Articulo/Articulo';

//Redux
import { useSelector } from 'react-redux';

//Placeholders
import Placeholders from '../Lib/placeholder';

//CSS
import './css/EstilosGenerales.css';
import './css/Perfil.css';

export default function Perfil() {

  const prophileName = 'Leslie Knope';
  const prophileDirectLink = 'okupa.com.ar/LinkFalso=123';

  const [ btn , setBtn ] = useState(0);
  const isLogged = useSelector( state => state.isLogged );

  const switchToFullScreen = () => {
    if(!btn){
      document.getElementById('fotoPerfil').className ='foto-perfil-movil-fullscreen';
      setBtn(1);
    }else{
      document.getElementById('fotoPerfil').className ='foto-perfil-movil';
      setBtn(0);
    }
  }

  if(!isLogged) {
    return <Redirect to="/login" />;
  } else {
    return (
      <div className="perfil mainScreen">
        <div 
        className="foto-perfil-movil" 
        id="fotoPerfil" 
        onClick={ () => switchToFullScreen() } 
        >
          <img src={Placeholders.Image.ProphilePhoto}
          alt={prophileName}
          title={prophileName}
          />
        </div>

        <Cabecera profileName={prophileName} />

        <div className="columna-izquierda">
          <img 
          src={Placeholders.Image.ProphilePhoto}
          alt="Leslie Knope"
          title="Leslie Knope"
          className="foto-perfil-escritorio"
          />

          <ProyectoInfo />

          <EnlacesExternos />

          <Pie profileDirectLink={prophileDirectLink} ocultoEnMoviles="1" />
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

        <Pie profileDirectLink={prophileDirectLink} profileName={prophileName} ocultoEnMoviles="0" />

      </div>
    );
  }
}