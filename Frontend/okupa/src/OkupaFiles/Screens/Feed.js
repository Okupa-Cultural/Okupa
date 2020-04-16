import React from 'react';
import { Redirect } from 'react-router-dom';

//Componentes
import Navbar from '../Components/Navbar';
import Post from '../Components/Post/Post';
import OkInput from '../Components/Generales/OkInput/OkInput';
import OkTextarea from '../Components/Generales/OkTextarea/OkTextarea';

//Redux
//import { useSelector } from 'react-redux';

//CSS
import './css/EstilosGenerales.css';
import './css/Feed.css';

export default function Feed() {

  //{/*const isLogged = useSelector( state => state.isLogged );*/}

  const isLogged = true;

  if(isLogged) {
  return (
    <div className="feed mainScreen">
      <Navbar />

      <div className="contentGenerator" style={{width: "100%", margin: "1em"}}>
        <form action="">
          <fieldset style={{border: "solid 1px rgba(255,255,255,.65)", borderRadius: "1em", padding: "0 1em 1em 1em"}}>
            <legend style={{padding: "0 .5em", textAlign: "left"}}>Generador de contenido</legend>
            <OkInput Name="user" Type="text" Placeholder="Usuario" />
            <OkInput Name="eventName" Type="text" Placeholder="Nombre del evento" />
            <OkInput Name="Date" Type="datetime-local" Label="true" Placeholder="Fecha" />
            <OkInput Name="" Type="Text" Placeholder="Tipo de evento" />
            <OkInput Name="" Type="number" Placeholder="Distancia" />
            <div style={{display: "flex", flexDirection: "column"}}>
              <OkTextarea Name="" Rows="5" Placeholder="Descripción" />
            </div>
            <OkInput Name="" Type="submit" Placeholder="Nombre del evento" />
          </fieldset>
        </form>
      </div>

      <Post
        userName="Centro cultural Nicolas Queish"
        userImg="https://vignette.wikia.nocookie.net/doblaje/images/4/46/Nicolas_cage.jpg/revision/latest?cb=20190207035634&path-prefix=es"
        
        distance="2,6"
        
        eventType="Espectáculo"
        eventImg="https://lastfm.freetls.fastly.net/i/u/770x0/b1d30477a02f48c2c8a9bdc8515e0d59.jpg" 
        eventName="Kyuss - Live at plaza Bomberitos"
        eventAdress="Centro cultural plaza de Bomberitos"
        eventMonth="jun"
        eventDay="06"
        eventHour="21:30"
        eventDescription="
          Lorem ipsum dolor sit, amet 
          consectetur adipisicing elit. 
          Porro, quis autem. Adipisci 
          labore laborum dolore aut fugiat."
      />

      <Post
        userName="Espacio cultural Calamardo"
        userImg="https://i0.wp.com/marvin.com.mx/wp-content/uploads/2019/11/netflix-calamardo-bob-esponja-serie-spin-off.jpg?resize=759%2C500&ssl=1"
        
        distance="0,9"
        
        eventType="Espectáculo"
        eventImg="https://www.vuenosairez.com/images/eventos/messi10-de-921865.jpg" 
        eventName="Circ du Solei - Séptimo día"
        eventAdress="Centro cultural plaza de Bomberitos"
        eventMonth="nov"
        eventDay="26"
        eventHour="18:00"
        eventDescription="
          Última fecha del año!! en vivo
          en la casa de Calamardo!.
          Un espectáctulo para toda la familia,
          no se lo pierdan!!!"
      />

      <Post
        userName="La casa de mi mamá"
        userImg="data:image/jpeg;base64,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"
        
        distance="55,2"
        
        eventType="Taller - seminario"
        eventImg="https://static3.a24.com/images/2019/8/26/HyRswT-SS-768x000.jpeg" 
        eventName="Clases de Parkour: cómo volarse los dientes"
        eventAdress="Ramos mejía, Buenos Aires"
        eventMonth="abr"
        eventDay="19"
        eventHour="09:00"
        eventDescription="
          Todos los sábados nos encontramos
          a rompernos los dientes al saltar de edificios."
      />
      
      <Post
        userName="El almacén de la vuelta de tu casa"
        userImg="https://images.pagina12.com.ar/styles/focal_3_2_960x640/public/2019-04/samid.jpg?itok=7B5A9whh"
        
        distance="0,0003"
        
        eventType="Convención - Feria"
        eventImg="https://www.infobae.com/new-resizer/74aJKM7Ju05vdQxqqNP7cVUyhkY=/750x0/filters:quality(100)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/NNKXXFKOEBDVZLLVPYLFPBNG7A" 
        eventName="Congreso internacional de verduras"
        eventAdress="Haedo, Buenos Aires"
        eventMonth="mar"
        eventDay="17"
        eventHour="00:00"
        eventDescription="
          El congreso nacional de verdulerías busca
          establecer vínculos entre trabajadores y
          trabajadoras del rubro verdulístico para 
          establecer precios comunes, estandarizar
          políticas de ..."
      />
    </div>
  );
  } else {
    return <Redirect to="/login" />
  }
}    
