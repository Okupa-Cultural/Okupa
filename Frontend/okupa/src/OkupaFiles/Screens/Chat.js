import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

//Componentes externos
import TextareaAutosize from 'react-textarea-autosize';

//Componentes
import OkInput from '../Components/Generales/OkInput/OkInput';
import OkSelect from '../Components/Generales/OkSelect/OkSelect';
import ChatList from '../Components/Chat/ChatList/ChatList';
import ChatListElement from '../Components/Chat/ChatList/ChatListElement';

//CSS
import './css/EstilosGenerales.css'
import './css/Chat.css';

export default function Chat() {

	/*useEffect(() => {
		var input = document.getElementById('chatinput');
		input.focus();
	});*/

	//const isLogged = useSelector( state => state.isLogged );
	const isLogged = true;

	/*useEffect(() => {
    	document.getElementById('chatinput').current.focus();
  	});*/

	if(isLogged) {
		return (
			<div className="chatRoom">
					<section className="chatSection chatList">
						<header className="chatSectionHeader">
							<nav>
							</nav>
							<div className="searchBar">
								<OkInput Type="search" Name="searchBar" Placeholder="Buscar..." />
							</div>
						</header>
						<div class="scrollableContent">
							<ChatList>
								<ChatListElement
									ChatId="chat1"
									ContactoImg="https://lasillarotarm.blob.core.windows.net.optimalcdn.com/images/2019/10/12/gokumuertedragonball.1-focus-0-0-983-557.jpg"
									Contacto="Son Goku"
									UltimoMensaje="Hola! Soy Goku. Estoy organizando la Henki Dama fest 2020 y..."
									Entrega="12:35 am"
									CantMensajes="1"
								/>

								<ChatListElement
									ChatId="chat2"
									ContactoImg="https://i.pinimg.com/474x/4d/9b/a9/4d9ba9a5cb079194ef884d75105c12dc.jpg"
									Contacto="Freezer"
									UltimoMensaje="Escucha insecto! No permitas a Kakaroto organice su fiesta. Si.."
									Entrega="12:16 am"
									CantMensajes="1"
								/>

								<ChatListElement
									ChatId="chat3"
									ContactoImg="https://i2.wp.com/www.bitme.gg/wp-content/uploads/2020/02/Dragon-Ball_-Mira-a-esta-chica-darle-vida-al-Supremo-Kaiosama-en-increible-cosplay.jpg?fit=1280%2C720&ssl=1"
									Contacto="Supremo Kaiosama"
									UltimoMensaje="Buenas tardes. Quisiera organizar mi cumpleaños nro 6125 en tu espacio."
									Entrega="ayer"
									CantMensajes="1"
								/>

								<ChatListElement
									ChatId="chat4"
									ContactoImg="https://vignette.wikia.nocookie.net/dragonball/images/f/f8/Gran_Saiyaman_2013.png/revision/latest?cb=20130918232734&path-prefix=es"
									Contacto="Gran Saiyaman"
									UltimoMensaje="Hola ciudadano! Busco organizar el encuentro de mi club de fans"
									Entrega="Hace una semana"
									CantMensajes="1"
								/>

								<ChatListElement
									ChatId="chat5"
									ContactoImg="https://pm1.narvii.com/6002/dc30c4b5d65ea15a59318956d2bafb4f391c0cfa_hq.jpg"
									Contacto="Gohan"
									UltimoMensaje="Holiis! Solo pasaba a decir que yo no soy el Gran Saiyaman jeje besis!"
									Entrega="Hace una semana"
									CantMensajes="1"
								/>

								<ChatListElement
									ChatId="chat6"
									ContactoImg="https://vignette.wikia.nocookie.net/dragonballfanon/images/f/f1/Piccolodragonballsuper.jpg/revision/latest?cb=20190121075007&path-prefix=es"
									Contacto="Piccolo"
									UltimoMensaje="Hola, viejo amigo. Cómo has estado. Tengo un problema con mi..."
									Entrega="Hace una semana"
									CantMensajes="1"
								/>

								<ChatListElement
									ChatId="chat7"
									ContactoImg="https://i.ytimg.com/vi/il04sCXD1mw/hqdefault.jpg"
									Contacto="Milk"
									UltimoMensaje="Goku está contigo, no es así!!?? Seguro están entrenando otra vez!"
									Entrega="Hace dos semana"
									CantMensajes="1"
								/>
							</ChatList>
						</div>
					</section>
			</div>
		);
	} else {
		return <Redirect to="/login" />;
	}
}
