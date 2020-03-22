import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

//Componentes
import OkInput from '../Components/Generales/OkInput/OkInput';
import ChatList from '../Components/Chat/ChatList/ChatList';
import ChatListElement from '../Components/Chat/ChatList/ChatListElement';

//CSS
import './css/EstilosGenerales.css'
import './css/Chat.css';

export default function Chat() {

	//const isLogged = useSelector( state => state.isLogged );
	const isLogged = true;


	if(isLogged) {
		return (
			<div className="chatRoom">
				<section className="chatList">
					<header className="chatSectionHeader">

					</header>
					<main className="chatSectionBody">
						<div className="searchBar">
							<OkInput Type="search" Name="contacts" Placeholder="Buscar" />
						</div>
						
						<ChatList>
							<ChatListElement 
							Visto="0" 
							ChatId="chat1" 
							Contacto="Son Gonku" 
							ContactoImg="https://assets.tonica.la/__export/1584386415176/sites/debate/img/2020/03/16/goku_saludando_portada.jpg_1359985867.jpg"
							Entrega="12:35 hs"
							CantMensajes="1"
							UltimoMensaje="Hola! Soy Goku. Estoy organizando la Henki Dama fest 2020 y..."
							/>

							<ChatListElement 
							Visto="1" 
							ChatId="chat2" 
							Contacto="Freezer" 
							ContactoImg="https://fr.screenja.com/static/img/thumbs/frieza-dbz-normal-636.png"
							Entrega="11:26 hs"
							CantMensajes="1"
							UltimoMensaje="Escucha, insecto. No permitas a Goku organizar su evento. Si lo logra..."
							/>

							<ChatListElement 
							Visto="1" 
							ChatId="chat3" 
							Contacto="Supremo Kaiosama" 
							ContactoImg="https://i2.wp.com/www.bitme.gg/wp-content/uploads/2020/02/Dragon-Ball_-Mira-a-esta-chica-darle-vida-al-Supremo-Kaiosama-en-increible-cosplay.jpg?fit=1280%2C720&ssl=1"
							Entrega="Ayer"
							CantMensajes="1"
							UltimoMensaje="Buenas tardes, quisiera organizar en tu espacio mi cumpleaños nro 6171 el..."
							/>
							
							<ChatListElement 
							Visto="1" 
							ChatId="chat4" 
							Contacto="Gran Saiyaman" 
							ContactoImg="https://cde.peru.com//ima/0/0/9/6/0/960499/611x458/dragon-ball-xenoverse.jpg"
							Entrega="Hace una semana"
							CantMensajes="1"
							UltimoMensaje="Hola ciudadano! busco organizar el encuentro de mi club de fans..."
							/>

							<ChatListElement 
							Visto="1" 
							ChatId="chat5" 
							Contacto="Gohan" 
							ContactoImg="https://pm1.narvii.com/6002/dc30c4b5d65ea15a59318956d2bafb4f391c0cfa_hq.jpg"
							Entrega="Hace una semana"
							CantMensajes="1"
							UltimoMensaje="Holiis solo pasaba a avisar que no soy el Gran Saiyaman jeje saludos!"
							/>
						</ChatList>
					</main>
				</section>
				<section className="chat">

					<div className="mensajes">
						<div className="mensaje" origen="1">
							<img src="" alt=""/>

						</div>
					</div>
					<div className="chatInput">
						toguín
					</div>
				</section>
				<section className="chatInfo">


				</section>
			</div>
		);
	} else {
		return <Redirect to="/login" />;
	}
}
