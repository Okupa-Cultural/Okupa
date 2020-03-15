import React from 'react';
import { Link, Redirect } from 'react-router-dom';

//Imagenes
//import logo from './../../Images/Logo/okupa-logo-color-transparente.png';

//Componentes
import OkInput from '../Components/Generales/OkInput/OkInput';
import OkBoton from '../Components/Generales/OkBoton/OkBoton';
import Triangulos from '../Components/FondoAnimado/Triangulos/Triangulos';
import Ondas from '../Components/FondoAnimado/Ondas/Ondas';

//Redux
import { useSelector } from 'react-redux';

//CSS
import './css/EstilosGenerales.css'
import './css/Login.css';

export default function Login(props) {

	const isLogged = useSelector( state => state.isLogged );

	console.log(props.location.pathname);

	if(!isLogged) {
		return (
			
			<div className="login">
				
				<h1>¡Bienvenidx!</h1>

				<div className="contenedor">
					<h2>Ingresa tus datos para acceder</h2>
					<form>
						<OkInput Type="text" Placeholder="Tu nombre" Name="Login"/>
						<OkInput Type="password" Placeholder="Tu contraseña" Name="Password"/>

						<div className="recupero">
							¿Olvidaste tu contraseña?
						</div>

						<OkBoton Value="Ingresar" Name="Submit" />
					</form>

					<Link to="/UsuarioABM">
						<div className="registrate">
							- O&nbsp;<b>regístrate</b>&nbsp;-
						</div>
					</Link>
				</div>

				
				<Triangulos />
				<Ondas />

			</div>
		);
	} else {
		return <Redirect to="/feed" />
	}
}