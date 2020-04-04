import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';

//Redux
import { useSelector, useDispatch } from 'react-redux';
import { setLogin } from '../../Redux/actions/auth';

import OkInput from '../Components/Generales/OkInput/OkInput';
import OkBoton from '../Components/Generales/OkBoton/OkBoton';
import Waves from '../../Images/svg/wave.svg';
import Triangulos from '../Components/FondoAnimado/Triangulos/Triangulos';
import Logo from '../../Images/Logo/okupa-white.png';

import { loginUser } from '../Api/auth';

import './css/Landing.css';

export default function Landing() {

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
	
	const loginButtonOnClick = async () => {
		
		const data = {
			username : document.querySelector("#landing-user").value,
			password : document.querySelector("#landing-password").value
		}

		await login(data);
        
	}

    if(isLogged) {
        return <Redirect to="/feed" />;
    } else {
        return (
            <div className="landing-screen">
                <nav className="landing-navbar">
                    <img className="landing-logo" src={Logo} alt="logo" />
                    <h1>Okupa</h1>
    
                    <div className="landing-login">
                        <OkInput Id="landing-user" Type="text" Placeholder="Nombre de usuario" Name="username" />
                        <OkInput Id="landing-password" Type="password" Placeholder="Contraseña" Name="password" />
                        <OkBoton Type="button" Value="Ingresar" onClick={ loginButtonOnClick } />
                    </div>
                </nav>
    
                <div className="landing-slogan">
                    <h2>Próximamente <br/> Una nueva forma de</h2>
                    <h2><span>Difundir</span> y <span>Conectar</span></h2>
                    <h2>con el arte independiente</h2>
    
                    <div className="mostrar-solo-mobile mobile-buttons">
                        <OkBoton Type="link" To="/login" Value="Iniciar Sesión" />
                        <OkBoton Type="link" To="/usuarioabm" Value="Registrarse" />
                    </div>
    
                    <div className="mostrar-solo-escritorio desktop-register">
                        <OkBoton Type="link" To="/" Value="Registrarse" />
                    </div>
                </div>
    
                <img className="landing-waves" src={Waves} alt="waves" />
    
                <Triangulos />
            </div>
        )
    }
    
}
