import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

//Componentes
import OkInput from '../Components/Generales/OkInput/OkInput';
import OkBoton from '../Components/Generales/OkBoton/OkBoton';
import Triangulos from '../Components/FondoAnimado/Triangulos/Triangulos';
import Ondas from '../Components/FondoAnimado/Ondas/Ondas';

//Redux
import { useSelector , useDispatch } from 'react-redux';
import { setLogin } from '../../Redux/actions/auth';
import { loginUser } from '../Api/auth';

//CSS
import './css/EstilosGenerales.css'
import './css/Login.css';

export default function Login() {

	//eslint-disable-next-line
	const [ redirectAfterLogin , setRedirectAfterLogin ] = useState(false);
	const isLogged = useSelector( state => state.isLogged );
	const dispatch = useDispatch();

	const login = async data => {
        await loginUser(data.username, data.password)
            .then(value => {
                if(value) {
					dispatch(setLogin(true));
					setRedirectAfterLogin(true);
                }
            });
	}
	
	const handleSubmit = async form => {
		
		const data = {
			username : document.getElementById("test-user").value,
			password : document.getElementById("test-pass").value
		}

		await login(data);
		form.preventDefault();
	}

	if(!isLogged) {
		return (
			
			<div className="login">
				
				<h1>¡Bienvenidx!</h1>

				<div className="contenedor">
					<h2>Ingresa tus datos para acceder</h2>
					
					<form onSubmit={ handleSubmit } action="localhost:4000/api/login" method="POST">
						<OkInput Type="text" Id="test-user" Placeholder="Nombre de usuario" Name="username"/>
						<OkInput Type="password" Id="test-pass" Placeholder="Tu contraseña" Name="password"/>

						<div className="recupero">
							¿Olvidaste tu contraseña?
						</div>

						<OkBoton Type="submit" Value="Ingresar" Name="Submit" />
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