//Componentes
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import './Redux/index';
import { getToken } from './OkupaFiles/Api/auth';
import { setLogin } from './Redux/actions/auth';

//Componentes
import ActionBar from './OkupaFiles/Components/ActionBar/ActionBar';

//Routes
import Routes from './OkupaFiles/Lib/routes';

//CSS
import './App.css';

function App() {

  const showActionBar = useSelector( state => state.showActionBar );
  const dispatch = useDispatch();
  const token = getToken();

  if(token) {
    dispatch(setLogin(true));
  }

  return (
    <div className="App">

      <Route render={({location}) => (
        <Switch>
          <Route exact path="/" component={Routes.Homescreen}/>
          <Route path="/login" component={Routes.Login}/>
          <Route path="/perfil" component={Routes.Prophile}/>
          <Route path="/soporte" component={Routes.Manteinance}/>
          <Route path="/evento" component={Routes.Event}/>
          <Route path="/feed" component={Routes.Feed}/>
          <Route path="/usuarioAbm" component={Routes.UserABM}/>
          <Route path="/eventoAbm" component={Routes.EventoABM}/>
          <Route path="/notifications" component={Routes.Notifications}/>
          <Route path="/testing" component={Routes.Testing}/>
          <Route path="/config" component={Routes.Config}/>
          <Route path="/chat" component={Routes.Chat} />
        </Switch>
      )} />

     <ActionBar ocultar={ showActionBar }/>
     
    </div>
  );
}

export default App;
