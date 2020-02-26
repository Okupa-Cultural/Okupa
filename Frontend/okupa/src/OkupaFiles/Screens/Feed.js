import React, { Component } from 'react';

//Componentes
//import NavBar from './../Components/Navigation/NavBar';
import Post from '../Components/Post/Post';

//CSS
import './css/EstilosGenerales.css';
import './css/Feed.css';

export default class Feed extends Component {

    render() {

      return (
        <div className="feed">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      );
    }    
}