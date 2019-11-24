import React, { Component } from 'react';

//Componentes
import NavBar from './../Components/Navigation/NavBar';
import Post from '../Components/Tarjeta/Post';

//CSS
import './css/EstilosGenerales.css';
import './css/Feed.css';

export default class Feed extends Component {

    render() {

      return (
        <div className="dashboard-screen">

          <nav className="nav-feed">
            <NavBar />
          </nav>

          <form className="feed-post-creator">

            <input type="hidden"/>

            <div className="creator-titulo">
              <p>Crear publicación</p>
            </div>
            <textarea className="feed-post-creator-text" placeholder="¡Anuncia tus pensamientos!" />

            <div className="creator-boton creator-boton-img">
              <i className="far fa-image"></i>
            </div>
            <div className="creator-boton creator-boton-photo">
              <i className="far fa-camera"></i>
            </div>
            <div className="creator-boton creator-boton-send">
              <i className="far fa-paper-plane"></i>
              <label>Enviar</label>
            </div>
          </form>

          <div className="feed-posts">
            <Post image="https://avatarfiles.alphacoders.com/142/142187.png" name="hidanshira" imagenContenido="https://data.whicdn.com/images/314875212/original.jpg"/>
            <Post image="https://avatarfiles.alphacoders.com/142/142187.png" name="hidanshira" imagenContenido="https://k60.kn3.net/taringa/A/9/5/1/0/8/pablitoomejia/E14.jpg"/>
            <Post image="https://avatarfiles.alphacoders.com/142/142187.png" name="hidanshira" imagenContenido="https://i.pinimg.com/originals/1f/66/d7/1f66d7398e7caba2fa882ec2818a409e.jpg"/>
            <Post image="https://avatarfiles.alphacoders.com/142/142187.png" name="hidanshira" imagenContenido="https://i.pinimg.com/736x/af/53/55/af5355d2e928deb428fd3961a317cca4.jpg"/>
            <Post image="https://avatarfiles.alphacoders.com/142/142187.png" name="hidanshira" imagenContenido="https://a.wattpad.com/cover/120604224-352-k572998.jpg"/>
            <Post image="https://avatarfiles.alphacoders.com/142/142187.png" name="hidanshira" imagenContenido="https://i.pinimg.com/originals/ba/ab/26/baab26da136d648576a2acaec0b745d5.jpg"/>
            <Post image="https://avatarfiles.alphacoders.com/142/142187.png" name="hidanshira" imagenContenido="https://i.imgur.com/UpP2KnG.jpg"/>
            <Post image="https://avatarfiles.alphacoders.com/142/142187.png" name="hidanshira" imagenContenido="https://pm1.narvii.com/6996/caf5e5ea01006e49e74c4b26cf15f313f3edfe34r1-600-626v2_hq.jpg"/>
            <Post image="https://avatarfiles.alphacoders.com/142/142187.png" name="hidanshira" imagenContenido="https://wallpapersmug.com/large/7ad98b/beautiful-woman-dark-hair-fan-art.jpg"/>
            <Post image="https://avatarfiles.alphacoders.com/142/142187.png" name="hidanshira" imagenContenido="https://c.wallhere.com/photos/f0/31/anime_manga_fan_art_Oshino_Shinobu_Monogatari_Series_vampire_anime_digital_digital_art-1584967.jpg!d"/>
            <Post image="https://avatarfiles.alphacoders.com/142/142187.png" name="hidanshira" imagenContenido="https://imgix.ranker.com/user_node_img/50062/1001223395/original/sasha-looooves-food-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces"/>
            <Post image="https://avatarfiles.alphacoders.com/142/142187.png" name="hidanshira" imagenContenido="https://cdna.artstation.com/p/assets/images/images/013/844/846/large/star-yoru-trish.jpg?1541351398"/>
          </div>
        </div>
      );
    }    
}