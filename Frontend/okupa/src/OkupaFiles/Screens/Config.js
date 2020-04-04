import React, { Component } from 'react';

//Componentes
import OkInput from '../Components/Generales/OkInput/OkInput';
import OkTextarea from '../Components/Generales/OkTextarea/OkTextarea';
import SelectorEtiquetas from '../Components/Generales/SelectorEtiquetas/SelectorEtiquetas';
import GaleriaEdit from '../Components/Config/GaleriaEdit/GaleriaEdit';
import EnlacesExternosEdit from '../Components/Config/EnlacesExternosEdit/EnlacesExternosEdit';
import OkTabla from '../Components/Generales/OkTabla/OkTabla';
import OkRegistro from '../Components/Generales/OkTabla/OkRegistro';

//CSS
import './css/EstilosGenerales.css'
import './css/Config.css';

export default class Config extends Component{

    constructor(props) {
        super(props);
        this.state = {
            username: 'pownie_rocks',
            email: 'leslieknope_unicorns@gmail.com',
            password: 'contrasenaencriptada',
            proyectname: 'Leslie Knope',
            formationdate: '21/10/2010',
            bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, asperiores. Recusandae vel provident iste deserunt assumenda laboriosam ipsam sint explicabo, dolores aut, quam itaque hic. Aperiam, ipsa! Totam, sunt voluptas!',
        };
    }

    componentDidMount (){
        document.getElementById('username').defaultValue = this.state.username;
        document.getElementById('email').defaultValue = this.state.email;
        document.getElementById('password').defaultValue = this.state.password;
        document.getElementById('proyectname').defaultValue = this.state.proyectname;
        document.getElementById('formationdate').defaultValue = this.state.formationdate;
        document.getElementById('bio').defaultValue = this.state.bio;

    }

    render(){
        return(
            <div className="config mainScreen">
                <section>
                    <h1 className="titulo">
                        <i className="far fa-chevron-left"></i>
                        Configuración
                    </h1>
				</section>
                <section className="config-seccion">
                    <h2 className="seccion-titulo">General</h2>
                    <div className="seccion-cuerpo">
                        <div className="config-input">
                            <label htmlFor="username">
                                Nombre de usuario
                            </label>
                            <OkInput Type="text" Name="username" />
                        </div>
                        <div className="config-input">
                            <label htmlFor="email">
                                Email
                            </label>
                            <OkInput Type="email" Name="email" />
                        </div>
                        <div className="config-input">
                            <label htmlFor="password">
                                Password
                            </label>
                            <OkInput Type="password" Name="password" />
                        </div>
                    </div>
                </section>
                <section className="config-seccion">
                    <h2 className="seccion-titulo">Proyecto</h2>
                    <div className="seccion-cuerpo">
                        <div className="config-input">
                            <label htmlFor="proyectname">
                                Nombre del proyecto
                            </label>
                            <OkInput Type="text" Name="proyectname" />
                        </div>
                        <div className="config-input">
                            <label htmlFor="formationdate">
                                Fecha de formación
                            </label>
                            <OkInput Type="date" Name="formationdate" />
                        </div>
                        <div className="config-input">
                            <label htmlFor="bio">
                                Biografía
                            </label>
                            <OkTextarea Name="bio" Rows="8" />
                        </div>
                    </div>
                </section>
                <section className="config-seccion">
                    <h2 className="seccion-titulo">Etiquetas</h2>
                    <div className="seccion-cuerpo">
                        <SelectorEtiquetas />
                    </div>
                </section>

                <section className="config-seccion">
                    <h2 className="seccion-titulo">Galería</h2>
                    <div className="seccion-cuerpo">
                        <GaleriaEdit />
                    </div>
                </section>

                <section className="config-seccion">
                    <h2 className="seccion-titulo">Enlaces externos</h2>
                    <div className="seccion-cuerpo">
                        <EnlacesExternosEdit />
                    </div>
                </section>

                <section className="rider config-seccion">
                    <h2 className="seccion-titulo sin-margen">Rider técnico</h2>
                    <div className="seccion-cuerpo">
                    <OkTabla  Titulo="Elementos de escenario">
                        <OkRegistro Cantidad="100" Descripcion="Me siento feliz" />
                    </OkTabla>
                    <OkTabla  Titulo="Elementos de iluminacion">
                        <OkRegistro Cantidad="100" Descripcion="Me siento feliz" />
                    </OkTabla>
                    </div>
                </section>
                
            </div>
        );
    }
}