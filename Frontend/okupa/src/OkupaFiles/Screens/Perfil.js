import React, { Component } from 'react';

//Imagenes

//Components

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
      imagenes: [{ urls : {small:''}}, {urls : {small:''}  }]
    };

    this.TabNavigator = this.TabNavigator.bind(this);
  }

  /*
  componentDidMount() {
    // eslint-disable-next-line
    fetch('https://api.unsplash.com/photos/?client_id=05883571daf3b1e01c789ef7cd850e9fb242f48d3b9432b46fae325a7eba6c0b')
      .then(response => response.json())
      .then(json => { this.setState({ imagenes: json});});
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
  }*/
  
render() {
  // eslint-disable-next-line
  var PantallaActual = this.TabNavigator();

  return (

    <div className="perfil">


    </div>
  );
}
}