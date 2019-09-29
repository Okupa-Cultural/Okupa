import React, { Component } from 'react';
//Imagenes
import Fondo from './../../Images/bg2.jpg';
///////
//Components
import ProfileCard from './../Components/Perfil/ProfileCard';
//import formArtista from './../Components/forms/formArtista';
//////
import './css/Perfil.css';
import './css/EstilosGenerales.css';

export default class Perfil extends Component {
  
  render() {

    var sectionStyle = {
      zIndex: -10,
      position: 'fixed',
      width: "100%",
      height: "100%",
      backgroundImage: "url(" + Fondo + ")"
    }; 

    return (

      <div className="home-screen"> {/*==========Inicio de div Contenedor==========*/}

        <div style={ sectionStyle } />
    
        {/*==========Tarjeta de perfil==========*/}
        <ProfileCard presentaciones="250" seguidores="600" seguidos="100"/>

        <div className="reyenador-de-espacio">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit quo suscipit laudantium eius debitis vero, consequuntur minima, in hic ad optio quisquam deleniti. Earum laboriosam, modi et accusantium illo ipsum.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus voluptates labore modi facere recusandae impedit veritatis illum, ab non consequuntur consectetur numquam mollitia. Reprehenderit nesciunt autem quae ipsam eligendi dolor!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel obcaecati incidunt enim asperiores fuga laudantium porro mollitia vero distinctio ab odio non, commodi sit veritatis magnam perspiciatis iure error ullam!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut id sed eaque incidunt totam velit ducimus, ratione dolorem dolor placeat at ipsa repudiandae nostrum! Accusantium in pariatur fuga officia illum.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis quae quis eligendi, atque minus libero a sequi, earum ullam itaque error vero? Ullam iste, quis minima dolore eligendi qui modi.
            loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Sit quo suscipit laudantium eius debitis vero, consequuntur minima, in hic ad optio quisquam deleniti. Earum laboriosam, modi et accusantium illo ipsum.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus voluptates labore modi facere recusandae impedit veritatis illum, ab non consequuntur consectetur numquam mollitia. Reprehenderit nesciunt autem quae ipsam eligendi dolor!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel obcaecati incidunt enim asperiores fuga laudantium porro mollitia vero distinctio ab odio non, commodi sit veritatis magnam perspiciatis iure error ullam!
          </p>
        </div>
      

      </div>
    );
  }
}