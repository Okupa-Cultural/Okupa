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
import ChatMessagesTimeLine	from '../Components/Chat/Messages/MessagesTimeLine';
import Message from '../Components/Chat/Messages/Message';

//CSS
import './css/EstilosGenerales.css'
import './css/Chat.css';

export default function Chat() {

	//const isLogged = useSelector( state => state.isLogged );
	const isLogged = true;

	useEffect(() => {
    	document.getElementById('chatinput').focus();
  	});

	if(isLogged) {
		return (
			<div className="chatRoom">
					<section className="chatSection chatList">
						<header className="chatSectionHeader">
							<div className="chatSearchBar">
								<OkInput Type="search" Name="searchBar" Placeholder="Buscar..." />
							</div>
						</header>
						<div className="scrollableContent">
							<ChatList>
								<ChatListElement
									ChatId="chat1"
									ContactoImg="https://lasillarotarm.blob.core.windows.net.optimalcdn.com/images/2019/10/12/gokumuertedragonball.1-focus-0-0-983-557.jpg"
									Contacto="Son Goku"
									UltimoMensaje="Asombroso! Muchas gracias señor! nos vemos!!!"
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
					<section className="chatSection chat">
						<header className="chatSectionHeader">
							<div className="nombre">
								<img 
								src="https://lasillarotarm.blob.core.windows.net.optimalcdn.com/images/2019/10/12/gokumuertedragonball.1-focus-0-0-983-557.jpg" 
								alt="son Goku" 
								className="fotoPerfilContacto"
								/>

								<h1>Son Goku</h1>
							</div>
							<nav className="navMensajes">
								<button>
									<i className="far fa-search"></i>
								</button>
								<button>
									<i className="far fa-bars"></i>
								</button>
							</nav>
						</header>
						<div className="scrollableContent">
							<ChatMessagesTimeLine>
								
								<Message
								Origen="1"
								Texto="Hola! Soy Goku. Estoy organizando la Henki Dama fest 2020 y sería asombroso que la hiciéramos en tu espacio!"
								Hora="12:34 am" 
								/>

								<Message
								Origen="1"
								Texto="¿Tendrás disponibilidad para el segundo o tercer fin de semana de junio? Esperamos recibir a unas 300 personas, para que juntos levantemos las manos y compartamos nuesta energía!"
								Hora="12:34 am" 
								/>

								<Message
								Origen="1"
								Texto="Y así finalmente derrotar a Freezer"
								Hora="12:35 am" 
								/>

								<Message
								Origen="0"
								Texto="Hola Goku! Si, nos encantaría recibirles! Todo sea para derrotar a Freezer! 😱😱😱😱"
								Hora="12:35 am" 
								/>

								<Message
								Origen="0"
								Texto="El segundo fin de semana lo tengo ocupado. Si el tercero les queda bien, ya se los dejo reservado y, cuando arreglemos el pago de la seña, ya dejamos la fecha confirmada y la anunciamos en nuestras redes"
								Hora="12:35 am" 
								/>

								<Message
								Origen="1"
								Texto="Asombroso! Muchas gracias señor! nos vemos!!!"
								Hora="12:35 am" 
								/>

							</ChatMessagesTimeLine>
						</div>
						<form className="chatInput">
							<TextareaAutosize maxRows={5} Placeholder="Escribir mensaje..." id="chatinput" />
							<button type="submit" className="send">
								<i className="fas fa-paper-plane"></i>
							</button>
						</form>
					</section>
					<section className="chatSection chatInfo">
						<header className="chatSectionHeader">
							<h2>Información</h2>
						</header>
						<div className="chatInfoTitle">
							<img 
							src="https://lasillarotarm.blob.core.windows.net.optimalcdn.com/images/2019/10/12/gokumuertedragonball.1-focus-0-0-983-557.jpg" 
							alt="Son Goku"
							className="fotoPerfilContacto grande"
							/>
							<h2>Son Goku</h2>
							<h3>Eventos que han compartido</h3>
						</div>
						<h3></h3>
						<div className="scrollableContent">
							<div className="eventoCompartido info">
								<div className="fecha">
									<div className="mes">
										ago
									</div>
									<div className="dia">
										26
									</div>
								</div>
								<div className="nombreEvento">
									Henkidama fest 2019
									<div className="espacioEvento">
										Zeugma cultural
									</div>
								</div>
							</div>

							<div className="eventoCompartido info">
								<div className="fecha">
									<div className="mes">
										ago
									</div>
									<div className="dia">
										26
									</div>
								</div>
								<div className="nombreEvento">
									Henkidama fest 2019
									<div className="espacioEvento">
										Zeugma cultural
									</div>
								</div>
							</div>

							<div className="eventoCompartido info">
								<div className="fecha">
									<div className="mes">
										ago
									</div>
									<div className="dia">
										26
									</div>
								</div>
								<div className="nombreEvento">
									Henkidama fest 2019
									<div className="espacioEvento">
										Zeugma cultural
									</div>
								</div>
							</div>

							<div className="eventoCompartido info">
								<div className="fecha">
									<div className="mes">
										ago
									</div>
									<div className="dia">
										26
									</div>
								</div>
								<div className="nombreEvento">
									Henkidama fest 2019
									<div className="espacioEvento">
										Zeugma cultural
									</div>
								</div>
							</div>

							<div className="eventoCompartido info">
								<div className="fecha">
									<div className="mes">
										ago
									</div>
									<div className="dia">
										26
									</div>
								</div>
								<div className="nombreEvento">
									Henkidama fest 2019
									<div className="espacioEvento">
										Zeugma cultural
									</div>
								</div>
							</div>

							<div className="eventoCompartido info">
								<div className="fecha">
									<div className="mes">
										ago
									</div>
									<div className="dia">
										26
									</div>
								</div>
								<div className="nombreEvento">
									Henkidama fest 2019
									<div className="espacioEvento">
										Zeugma cultural
									</div>
								</div>
							</div>

							<div className="eventoCompartido info">
								<div className="fecha">
									<div className="mes">
										ago
									</div>
									<div className="dia">
										26
									</div>
								</div>
								<div className="nombreEvento">
									Henkidama fest 2019
									<div className="espacioEvento">
										Zeugma cultural
									</div>
								</div>
							</div>

							<div className="eventoCompartido info">
								<div className="fecha">
									<div className="mes">
										ago
									</div>
									<div className="dia">
										26
									</div>
								</div>
								<div className="nombreEvento">
									Henkidama fest 2019
									<div className="espacioEvento">
										Zeugma cultural
									</div>
								</div>
							</div>

							<div className="eventoCompartido info">
								<div className="fecha">
									<div className="mes">
										ago
									</div>
									<div className="dia">
										26
									</div>
								</div>
								<div className="nombreEvento">
									Henkidama fest 2019
									<div className="espacioEvento">
										Zeugma cultural
									</div>
								</div>
							</div>

							<div className="eventoCompartido info">
								<div className="fecha">
									<div className="mes">
										ago
									</div>
									<div className="dia">
										26
									</div>
								</div>
								<div className="nombreEvento">
									Henkidama fest 2019
									<div className="espacioEvento">
										Zeugma cultural
									</div>
								</div>
							</div>
						</div>
					</section>
			</div>
		);
	} else {
		return <Redirect to="/login" />;
	}
}
