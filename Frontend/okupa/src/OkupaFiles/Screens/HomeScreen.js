import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import DatePicker from "react-datepicker";

//Imagenes
import logo from './../../Images/Logo/okupa-logo-color-transparente.png';

//Componentes
//import NavBar from './../Components/Navigation/NavBar';
//import ToggleCheckbox from './../Components/ToggleCheckbox/ToggleCheckbox'

//CSS
import './css/HomeScreen2.css';
import './css/EstilosGenerales.css';
import "react-datepicker/dist/react-datepicker.css";

export default class HomeScreen extends Component {

	state = {
    startDate: new Date()
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  
  render() {

    return (
      
    <div className="home">

    	<header className="home-header">

    		<div className="home-nav">

	    		<div className="home-logo">
	    			<img src={logo} alt="Okupa Logo" className="home-logo-img" />
	    			<span>OKUPA</span>
	    		</div>

				<label htmlFor="burguer" className="btn-burguer">
					<i class="fas fa-bars"></i>
				</label>
				<input type="checkbox" id="burguer" />

	    		<nav className="home-botonera">
	    			<Link to="/homedos">
	    				<div className="nav-boton">HOME</div>
	    			</Link>
	    			<Link to="/homedos">
	    				<div className="nav-boton">CARACTERÍSTICAS</div>
	    			</Link>
	    			<Link to="/homedos">
	    				<div className="nav-boton">QUIÉNES SOMOS</div>
	    			</Link>
	    			<Link to="/homedos">
	    				<div className="nav-boton">CONTACTO</div>
	    			</Link>
	    			<Link to="/homedos">
	    				<div className="nav-boton">REGÍSTRATE</div>
	    			</Link>
	    			<Link to="/homedos">
	    				<div className="nav-boton resaltado">LOGIN</div>
	    			</Link>
	    		</nav>

    		</div>

    		<div className="home-presentacion">

				<p className="home-intro">
					Una nueva forma de <span>difundir&nbsp;</span>y <span>conectar&nbsp;</span>
					con el arte independiente
				</p>
				<form className="home-form-container">
					<div className="home-form">
						<label className="home-label">
							<h4>Buscar eventos por su nombre</h4>
							<input type="text" className="home-searchbar" name="busqueda" autocomplete="off" placeholder="Busca un evento por su nombre..."/>
						</label>
						<label className="home-label">
							<h4>o por su fecha</h4>
							<DatePicker 
							className="home-datepicker"
							selected={this.state.startDate}
							onChange={this.handleChange}
							/>
						</label>

						

					</div>
					<input type="submit" className="home-btn-buscar" value="Buscar" />
				</form>
    		</div>

    	</header>

    </div>
    );
  }
}