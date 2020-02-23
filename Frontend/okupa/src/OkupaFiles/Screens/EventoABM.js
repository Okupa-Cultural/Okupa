import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Imagenes
//import logo from './../../Images/Logo/okupa-logo-color-transparente.png';

//Componentes
import OkInput from '../Components/Generales/OkInput/OkInput';
import OkBoton from '../Components/Generales/OkBoton/OkBoton';
import OkCheckbox from '../Components/Generales/OkCheckbox/OkCheckbox';
import OkRadio from '../Components/Generales/OkRadio/OkRadio';
import OkTextarea from '../Components/Generales/OkTextarea/OkTextarea';

//CSS
import './css/EstilosGenerales.css'
import './css/EventoABM.css';

export default class EventoABM extends Component {

  render() {

    return (
      
		<div className="evento-abm">
			<section>
			<h1 className="titulo">
				<i className="far fa-chevron-left"></i>
				Nuevo evento
			</h1>
			<OkInput Type="file" Placeholder="Agregar foto de portada" TabIndex="1" />
			</section>
			<section className="top-info">
				<div className="nombre">
					<OkInput Type="text" Placeholder="Nombre del evento" Name="title" TabIndex="1" />
				</div>
				<div className="fyh">
					<OkInput Type="date" Placeholder="Fecha de inicio" Name="start-date" TabIndex="1" />
					<OkInput Type="time" Placeholder="Hora de inicio" Name="start-hour" TabIndex="1" />
					<OkInput Type="date" Placeholder="Fecha de fin" Name="end-date" TabIndex="1" />
					<OkInput Type="time" Placeholder="Hora de fin" Name="end-hour" TabIndex="1" />
				</div>
			</section>
			<section>
				<h2>Periodicidad</h2>
				<div className="periodicidad">
					<label className="casillero" htmlFor="lunes">
						<OkCheckbox Name="lunes" /> 
						lunes
					</label>
					<label className="casillero" htmlFor="martes">
						<OkCheckbox Name="martes" />
						martes 
					</label>
					<label className="casillero" htmlFor="miercoles">
						<OkCheckbox Name="miercoles" />
						miércoles
					</label>
					<label className="casillero" htmlFor="jueves">
						<OkCheckbox Name="jueves" />
						jueves
					</label>
					<label className="casillero" htmlFor="viernes">
						<OkCheckbox Name="viernes" />
						viernes
					</label>
					<label className="casillero" htmlFor="sabado">
						<OkCheckbox Name="sabado" />
						sábado
					</label>
					<label className="casillero" htmlFor="domingo">
						<OkCheckbox Name="domingo" />
						domingo
					</label>
				</div>
			</section>
			<section className="periodo-doble">
				<label htmlFor="">
					cada
				</label>
				<input type="number" className="input-linea dias" />
				<select name="repetition" id="">
					<option value="1">Semanas</option>
					<option value="2">Meses</option>
				</select>
			</section>
			<section className="radio-contenedor">
				<h2>
					Repetición quincenal
				</h2>
				<div className="radio">
					<OkRadio name="semanas" Id="0" Checked="checked" />
					<label htmlFor="0" class="s-label">
						ninguna
					</label>
				</div>
				<div className="radio">
					<OkRadio name="semanas" Id="1" Checked="checked" />
					<label htmlFor="1" class="s-label">
						primeras dos semanas del mes
					</label>
				</div>
				<div className="radio">
					<OkRadio name="semanas" Id="2" />
					<label htmlFor="2" class="s-label">
						primeras dos semanas del mes
					</label>
				</div>
			</section>
			<section>
				<OkTextarea Placeholder="Descripcion del evento" Rows="4" />
			</section>
			<h2>Ubicación</h2>
			<section className="direccion">
					<OkBoton Value="Contactar espacio" />
					<span>ó</span>
					<input type="text" placeholder="escrbí la dirección" className="input-linea dir"  />
			</section>
			<section>
				<h2>participantes</h2>
				<div class="scrolling-wrapper">
					<div class="card"><img src="https://infocielo.com/uploads/noticias/imagenes/a/2019/10/20191011150705_foofighters-900x600.jpg" alt="participante"/></div>
					<div class="card"><img src="https://infocielo.com/uploads/noticias/imagenes/a/2019/10/20191011150705_foofighters-900x600.jpg" alt="participante" /></div>
					<div class="card"><img src="https://infocielo.com/uploads/noticias/imagenes/a/2019/10/20191011150705_foofighters-900x600.jpg" alt="participante" /></div>
					<div class="card"><img src="https://infocielo.com/uploads/noticias/imagenes/a/2019/10/20191011150705_foofighters-900x600.jpg" alt="participante" /></div>
					<div class="card"><img src="https://infocielo.com/uploads/noticias/imagenes/a/2019/10/20191011150705_foofighters-900x600.jpg" alt="participante" /></div>
					<div class="card"><img src="https://infocielo.com/uploads/noticias/imagenes/a/2019/10/20191011150705_foofighters-900x600.jpg" alt="participante" /></div>
					<div class="card"><img src="https://infocielo.com/uploads/noticias/imagenes/a/2019/10/20191011150705_foofighters-900x600.jpg" alt="participante" /></div>
					<div class="card"><img src="https://infocielo.com/uploads/noticias/imagenes/a/2019/10/20191011150705_foofighters-900x600.jpg" alt="participante" /></div>
					<div class="card"><img src="https://infocielo.com/uploads/noticias/imagenes/a/2019/10/20191011150705_foofighters-900x600.jpg" alt="participante" /></div>
				</div>
			</section>
		</div>
    );
  }
}