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

          <div className="nav-feed">
            <NavBar />
          </div>

          <div className="detallar"></div>

          <div className="feed-posts">
            <Post image="https://avatarfiles.alphacoders.com/142/142187.png" name="hidanshira" imagenContenido="https://data.whicdn.com/images/314875212/original.jpg"/>
            <Post image="https://avatarfiles.alphacoders.com/142/142187.png" name="hidanshira" imagenContenido="https://k60.kn3.net/taringa/A/9/5/1/0/8/pablitoomejia/E14.jpg"/>
            <Post image="https://avatarfiles.alphacoders.com/142/142187.png" name="hidanshira" imagenContenido="https://i.pinimg.com/originals/1f/66/d7/1f66d7398e7caba2fa882ec2818a409e.jpg"/>
            <Post image="https://avatarfiles.alphacoders.com/142/142187.png" name="hidanshira" imagenContenido="https://i.pinimg.com/736x/af/53/55/af5355d2e928deb428fd3961a317cca4.jpg"/>
          </div>
        </div>
      );
    }    
}