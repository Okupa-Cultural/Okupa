import React, { Component } from 'react';
import {Link} from 'react-router-dom';
//Imagenes
import Fondo from './../../Images/bg2.jpg';
///////
//Components

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
    
        {/*==========Foto de perfil==========*/}

        <div className="foto-perfil"></div>
        
        {/*==========Datos de Cabecera==========*/}

        <div className="cabecera">
          <h2 className="nombre-de-usuario">Los Hijos de la Rossi</h2>
          
          <div className="estadisticas">
            <ul>
              <li>
                <div className="cifra">250</div>
                <div className="leyenda">Presentaciones</div>
              </li>
              <li>
                <div className="cifra">600</div>
                <div className="leyenda">Seguidores</div>
              </li>
              <li>
                <div className="cifra">100</div>
                <div className="leyenda">Seguidos</div>
              </li>
            </ul>
          </div>
          
          <div className="lista-etiquetas">
            <ul>
              <li className="etiqueta">Humor</li>
              <li className="etiqueta">Teatro</li>
              <li className="etiqueta">Música</li>
              <li className="etiqueta">Clown</li>
              <li className="etiqueta">Humor teatral</li>
              <li className="etiqueta">Zona Oeste</li>
              <li className="etiqueta">Nena, qué va a ser de mi</li>
              <a href="https://www.google.com/search?q=etiquetas&rlz=1C1AFAB_enAR452AR472&sxsrf=ACYBGNTOtCDIRzAk-RUxxCZTpqMw92Ml3g:1569704759164&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiZ28n0tfTkAhXpGbkGHRLWCukQ_AUIEigB&biw=1366&bih=625">
                <li className="etiqueta-puntos-suspensivos">...</li>
              </a>
            </ul>
          </div>

          <div className="perfil-botonera">
            <Link to="">
              <input type="submit" className="perfil-boton" value="INVITAR"/>
            </Link>
            <Link to="/registro">
              <input type="submit" className="perfil-boton" value="SEGUIR"/>
            </Link>
          </div>

        </div>

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