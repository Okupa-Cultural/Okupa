//Componentes
import React from 'react';
import { Switch, Route } from 'react-router-dom';
//Pantallas
import HomeScreen from './OkupaFiles/Screens/HomeScreen';
import HomeScreen2 from './OkupaFiles/Screens/HomeScreen2';
import Login from './OkupaFiles/Screens/Login';
import Registro from './OkupaFiles/Screens/Registro';
import Perfil from './OkupaFiles/Screens/Perfil';
import Evento from './OkupaFiles/Screens/Evento';
import Feed from './OkupaFiles/Screens/Feed';
import Mantenimiento from './OkupaFiles/Screens/Mantenimiento/Mantenimiento';
//CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <Route render={({location}) => (
        <Switch>
          <Route exact path="/" component={HomeScreen}/>
          <Route exact path="/homedos" component={HomeScreen2}/>
          <Route path="/login" component={Login}/>
          <Route path="/registro" component={Registro}/>
          <Route path="/perfil" component={Perfil}/>
          <Route path="/soporte" component={Mantenimiento}/>
          <Route path="/evento" component={Evento}/>
          <Route path="/feed" component={Feed}/>
        </Switch>
      )} />
    </div>
  );
}

export default App;
