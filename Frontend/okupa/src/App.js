//Componentes
import React from 'react';
import { Switch, Route } from 'react-router-dom';
//Pantallas
import HomeScreen from './OkupaFiles/Screens/HomeScreen';
import Dashboard from './OkupaFiles/Screens/Dashboard';
import Registro from './OkupaFiles/Screens/Registro';
import Perfil from './OkupaFiles/Screens/Perfil';
import Mantenimiento from './OkupaFiles/Screens/Mantenimiento/Mantenimiento';
//CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <Route render={({location}) => (
        <Switch>
          <Route exact path="/" component={HomeScreen}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/registro" component={Registro}/>
          <Route path="/perfil" component={Perfil}/>
          <Route path="/Soporte" component={Mantenimiento}/>
        </Switch>
      )} />
    </div>
  );
}

export default App;
