import React, { Component } from 'react';

//Imagenes
//import logo from './../../Images/Logo/okupa-logo-color-transparente.png';

//Componentes
import OkInput from '../Components/Generales/OkInput/OkInput';
import OkBoton from '../Components/Generales/OkBoton/OkBoton';
import OkRadio from '../Components/Generales/OkRadio/OkRadio';
import OkTextarea from '../Components/Generales/OkTextarea/OkTextarea';
import OkSelect from '../Components/Generales/OkSelect/OkSelect';
import Semana from '../Components/EventoABM/Semana/Semana';
import ScrollingHorizontal from '../Components/ScrollingHorizontal/ScrollingHorizontal';
import ShTarjeta from '../Components/ScrollingHorizontal/ShTarjeta';

//CSS
import './css/EstilosGenerales.css'
import './css/EventoABM.css';

export default class EventoABM extends Component {

	constructor(props) {
		super(props);

		this.state = {
			title:'',
			startDate:'',
			startTime:'',
			endDate:'',
			endTime:'',
			periodicity:[],
			eachWeeksMonths: { frequence:0, timeType:''}, //timeType = "Months" or "Weeks"
			each15daystype: 0, //0:none 1: first 2 weeks of month, 2:last ones
			description:'',
			location:'',
			participants:[]
		};
	};

	sendData = (event) => {
		let formData = new FormData(event.target);
		let json = JSON.stringify(formData);

		console.log("entro");
		var url = 'http://localhost:4000/api/test';

		fetch(url, {
			method: 'POST', // or 'PUT'
			body: json, // data can be `string` or {object}!
			headers:{
			'Content-Type': 'application/json'
			}
		}).then(res => res.json())
		.catch(error => console.error('Error:', error))
		.then(response => console.log('Success:', response));
	};

	render() {

		return (
			<div className="evento-abm">
				<form>
				<section>
				<h1 className="titulo">
					<i className="far fa-chevron-left"></i>
					Nuevo evento
				</h1>
				<OkInput Type="file" Format="portada" Icon="agregar" Name="bannerImage" Placeholder="Agregar foto de portada" TabIndex="1" />
				</section>
				<section className="top-info">
					<div className="nombre">
						<OkInput Type="text" Id="titulo-evento-abm" Placeholder="Nombre del evento" Name="title" TabIndex="1" />
					</div>
					<div className="fyh">
						<OkInput Type="date" Format="small" Placeholder="Fecha de inicio" Icon="calendario" Name="startdate" TabIndex="1" />
						<OkInput Type="time" Format="small" Placeholder="Hora de inicio" Icon="reloj" Name="starthour" TabIndex="1" />
						<OkInput Type="date" Format="small" Placeholder="Fecha de fin" Icon="calendario" Name="enddate" TabIndex="1" />
						<OkInput Type="time" Format="small" Placeholder="Hora de fin" Icon="reloj" Name="endhour" TabIndex="1" />
					</div>
				</section>
				<section>
					<h2>Periodicidad</h2>
					<Semana />
				</section>
				<section>
					<div className="s-flex cada">
						<label htmlFor="">
							cada
						</label>
						<OkInput Type="number" Format="linea" />
						<OkSelect Name="semana-mes">
							<option value="1">Semanas</option>
							<option value="2">Meses</option>
						</OkSelect>
					</div>
				</section>
				<section className="radio-contenedor">
					<h2>
						Repetición quincenal
					</h2>
						<OkRadio name="semanas" Id="1" Label="primeras dos semanas del mes" />
						<OkRadio name="semanas" Id="2" Label="últimas dos semanas del mes" />
						<OkRadio name="semanas" Id="3" Label="ninguna" />
				</section>
				<section>
					<OkTextarea Placeholder="Descripción del evento" Rows="4" />
				</section>
				<section className="ubicacion">
					<h2>Ubicación</h2>
					<div className="s-flex">
						<OkBoton Value="Contactar espacio" Format="small" Icon="contacto" />
						<span>ó</span>
						<OkInput Type="text" Format="linea" Placeholder="escribí la dirección" />
					</div>
				</section>
				<section>
					<h2>participantes</h2>
					<ScrollingHorizontal Size="small">
						<ShTarjeta Link="" Size="small" Type="text">
							<div>
								Tarjeta tipo texto
							</div>
						</ShTarjeta>
						<ShTarjeta Link="" Size="small" Type="img" Titulo="Tarjeta con título">
							<img 
							src="https://infocielo.com/uploads/noticias/imagenes/a/2019/10/20191011150705_foofighters-900x600.jpg" 
							alt="participante"
							/>
						</ShTarjeta>
						<ShTarjeta Link="" Size="small" Type="img">
							<img 
							src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Pomplamoose_2014_2.jpg" 
							alt="participante"
							/>
						</ShTarjeta>
						<ShTarjeta Link="" Size="small" Type="img" Titulo="Tarjeta con título largo Tarjeta con título largo">
							<img 
							src="https://infocielo.com/uploads/noticias/imagenes/a/2019/10/20191011150705_foofighters-900x600.jpg" 
							alt="participante"
							/>
						</ShTarjeta>
						<ShTarjeta Link=""  Size="small"Type="img">
							<img 
							src="https://infocielo.com/uploads/noticias/imagenes/a/2019/10/20191011150705_foofighters-900x600.jpg" 
							alt="participante"
							/>
						</ShTarjeta>
						<ShTarjeta Link="" Size="small" Type="img">
							<img 
							src="https://infocielo.com/uploads/noticias/imagenes/a/2019/10/20191011150705_foofighters-900x600.jpg" 
							alt="participante"
							/>
						</ShTarjeta>
						<ShTarjeta Link="" Size="small" Type="img">
							<img 
							src="https://infocielo.com/uploads/noticias/imagenes/a/2019/10/20191011150705_foofighters-900x600.jpg" 
							alt="participante"
							/>
						</ShTarjeta>
						<ShTarjeta Link="" Size="small" Type="img">
							<img 
							src="https://infocielo.com/uploads/noticias/imagenes/a/2019/10/20191011150705_foofighters-900x600.jpg" 
							alt="participante"
							/>
						</ShTarjeta>
						<ShTarjeta Link="" Size="small" Type="img">
							<img 
							src="https://infocielo.com/uploads/noticias/imagenes/a/2019/10/20191011150705_foofighters-900x600.jpg" 
							alt="participante"
							/>
						</ShTarjeta>
						<ShTarjeta Link="" Size="small" Type="img">
							<img 
							src="https://infocielo.com/uploads/noticias/imagenes/a/2019/10/20191011150705_foofighters-900x600.jpg" 
							alt="participante"
							/>
						</ShTarjeta>

					</ScrollingHorizontal>
				</section>
				<section>
				<OkBoton Value="Finalizar" />
				</section>
				</form>
			</div>
		);
	}
}