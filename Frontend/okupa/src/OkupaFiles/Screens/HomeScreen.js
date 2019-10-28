import React, { Component } from 'react';
//Imagenes
//import Logo from './../../Images/Logo/okupa-logo-colorYtitulo-transparente.png';
import Fondo from './../../Images/bg2.jpg';
///////
//Componentes
import NavBar from './../Components/Navigation/NavBar';
import ToggleCheckbox from './../Components/ToggleCheckbox/ToggleCheckbox'

//////
import './css/HomeScreen.css';
import './css/EstilosGenerales.css';

export default class HomeScreen extends Component {
  
  render() {

    //var urlFondo = "https://www.hendersonparkinn.com/wp-content/uploads/2018/02/A-breathtaking-sunset-over-a-beach-in-Destin-FL.jpg";

    var sectionStyle = {
      zIndex: -10,
      position: 'fixed',
      width: "100%",
      height: "100%",
      backgroundImage: "url(" + Fondo + ")"
    };  

    return (
      
    <div className="home-screen">

		<div style={ sectionStyle } alt="okupa"/>

		<div className="filtro-fondo" />

		<NavBar showSearchBar={false}/>

		<div className="contenedor">

			<header className="home-cabecera">

			 	<h1 className="titulo-principal"> ¿Buscas un evento?</h1>
			 	<h2 className="subtitulo">¡Okúpate!</h2>

			</header>

			<form className="banner">

				<input type="text" className="nav-bar-search-bar" name="busqueda" autocomplete="off" placeholder="Ingrese nombre del evento..."/>
				<input type="date" className="datepicker" name="fecha" placeholder="we are the world" />

				<input type="submit" className="banner-buscar-btn" value="Buscar"></input>

				<div className="toggles">

			      	<h4 className="toggles-titulo">
			      		¿Nos das permiso? 
			      		<br />
			      		<i class="fad fa-laugh"></i>
			      	</h4>

			    	{/*Ahora el título está en estos h5.
			    	Habría que ver cómo mandárselo como propiedad*/}

			    	<h5 className="toggle-label">
			    		Notificaciones
			    	</h5>
					<ToggleCheckbox />

					<h5 className="toggle-label">
			    		Ubicación
			    	</h5>
					<ToggleCheckbox />

					<h5 className="toggle-label">
			    		Agregar a pantalla de inicio
			    	</h5>
					<ToggleCheckbox />

				</div>

			</form>

		</div>

    </div>
    );
  }
}