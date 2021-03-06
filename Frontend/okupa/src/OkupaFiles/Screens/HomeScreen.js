import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link , Redirect } from 'react-router-dom';
import DatePicker from "react-datepicker";
//Imagenes
import logo from './../../Images/Logo/okupa-logo-color-transparente.png';

//CSS
import './css/HomeScreen.css';
import './css/EstilosGenerales.css';
import "react-datepicker/dist/react-datepicker.css";

export default function HomeScreen() {

	const [ startDate ] = useState(new Date());
	const isLogged = useSelector( state => state.isLogged );

	if(!isLogged) {
		return (
			<div className="home">
				<header className="home-header">
					<div className="home-nav">

						<div className="home-logo">
							<img src={logo} alt="Okupa Logo" className="home-logo-img" />
							<span>OKUPA</span>
						</div>

						<label htmlFor="burguer" className="btn-burguer">
							<i className="fas fa-bars"></i>
						</label>
						<input type="checkbox" id="burguer" />

						<nav className="home-botonera">
							<Link to="/">
								<div className="nav-boton">HOME</div>
							</Link>
							<Link to="/perfil">
								<div className="nav-boton">CARACTERÍSTICAS</div>
							</Link>
							<Link to="/eventoabm">
								<div className="nav-boton">QUIÉNES SOMOS</div>
							</Link>
							<Link to="/feed">
								<div className="nav-boton">CONTACTO</div>
							</Link>
							<Link to="/usuarioabm">
								<div className="nav-boton">REGÍSTRATE</div>
							</Link>
							<Link to="/login">
								<div className="nav-boton resaltado">LOGIN</div>
							</Link>
						</nav>

					</div>

					<div className="home-presentacion">

						<p className="home-intro">
							Próximamente<br />
							Una nueva forma de <span>difundir&nbsp;</span>y <span>conectar&nbsp;</span>
							con el arte independiente
						</p>
						<form className="home-form-container">
							<div className="home-form">

								<label className="home-label">
									<h4>Buscar eventos por su nombre</h4>
									<input type="text" className="home-searchbar" name="busqueda" autoComplete="off" placeholder="Busca un evento por su nombre..."/>
								</label>

								<label className="home-label">
									<h4>o por su fecha</h4>
									<DatePicker 
									className="home-datepicker ocultar-en-moviles"
									selected={startDate}
									/>
									{/*El placeholder de este input se despliega por CSS*/}
									<input type="date" id="datePickerMovil" className="home-datepicker solo-en-moviles" />
								</label>

							</div>
							<input type="submit" className="home-btn-buscar" value="Buscar" />
						</form>
					</div>

				</header>

			</div>
		);
	} else {
		return <Redirect to="feed" />;
	}
}