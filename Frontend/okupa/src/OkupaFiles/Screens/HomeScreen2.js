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

export default class HomeScreen2 extends Component {

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
      
    <div className="home2">

    	<header className="home2-header">

    		<div className="home2-nav">

	    		<div className="home2-logo">
	    			<img src={logo} alt="Okupa Logo" className="home2-logo-img" />
	    			<span>OKUPA</span>
	    		</div>

				<label htmlFor="burguer" className="btn-burguer">
					<i class="fas fa-bars"></i>
				</label>
				<input type="checkbox" id="burguer" />

	    		<nav className="home2-botonera">
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

    		<div className="home2-presentacion">

				<p className="home2-intro">
					Una nueva forma de <span>difundir&nbsp;</span>y <span>conectar&nbsp;</span>
					con el arte independiente
				</p>

				<form className="home2-form">
					<label className="home2-label">
						<h4>Buscar eventos por su nombre</h4>
						<input type="text" className="home2-searchbar" name="busqueda" autocomplete="off" placeholder="Busca un evento por su nombre..."/>
					</label>
					<label className="home2-label">
						<h4>o por su fecha</h4>
						<DatePicker 
						className="home2-datepicker"
						selected={this.state.startDate}
						onChange={this.handleChange}
						/>
					</label>
				</form>
				
				<input type="submit" className="home2-btn-buscar" value="Buscar" />

    		</div>

    	</header>

    </div>
    );
  }
}