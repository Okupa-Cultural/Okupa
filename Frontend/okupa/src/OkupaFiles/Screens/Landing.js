import React from 'react'
import OkInput from '../Components/Generales/OkInput/OkInput';
import OkBoton from '../Components/Generales/OkBoton/OkBoton';
import Waves from '../../Images/svg/wave.svg';
import Triangulos from '../Components/FondoAnimado/Triangulos/Triangulos';
import Logo from '../../Images/Logo/okupa-white.png';
import './css/Landing.css';

export default function Landing() {
    return (
        <div className="landing-screen">
            <nav className="landing-navbar">
                <img className="landing-logo" src={Logo} alt="logo" />
                <h1>Okupa</h1>

                <div className="landing-login">
                    <OkInput Type="text" Placeholder="Nombre de usuario" Name="username" />
                    <OkInput Type="password" Placeholder="Contraseña" Name="password" />
                    <OkBoton Type="button" Value="Ingresar" />
                </div>
            </nav>

            <div className="landing-slogan">
                <h2>Una nueva forma de</h2>
                <h2><span>Difundir</span> y <span>Conectar</span></h2>
                <h2>con el arte independiente</h2>

                <div className="mostrar-solo-mobile mobile-buttons">
                    <OkBoton Type="link" To="/login" Value="Iniciar sesion" />
                    <OkBoton Type="link" To="/usuarioabm" Value="Registrarse" />
                </div>

                <div className="mostrar-solo-escritorio desktop-register">
                    <OkBoton Type="link" To="/usuarioabm" Value="Registrarse" />
                </div>
            </div>

            <img className="landing-waves" src={Waves} alt="waves" />

            <Triangulos />
        </div>
    )
}
