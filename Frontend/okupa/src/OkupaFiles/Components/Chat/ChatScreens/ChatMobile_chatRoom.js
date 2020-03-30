import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

//Componentes externos
import TextareaAutosize from 'react-textarea-autosize';

//Componentes
import OkInput from '../../Generales/OkInput/OkInput';
import ChatMessagesTimeLine	from '../Messages/MessagesTimeLine';
import Message from '../Messages/Message';


export default function ChatDesktop() {

	//const isLogged = useSelector( state => state.isLogged );
	const isLogged = true;

	{/* useEffect(() => {
    	document.getElementById('chatinput').focus();
  	}); */}

	if(isLogged) {
		return (
			<div className="chatRoomMobile mainScreen">
				<section className="chatSection">
					<header className="chatSectionHeader">
						<Link to="/chat" className="volver">
							<i className="far fa-chevron-left"></i>
						</Link>
						<Link to="/perfil">
						<div className="nombre">
							<img 
							src="https://lasillarotarm.blob.core.windows.net.optimalcdn.com/images/2019/10/12/gokumuertedragonball.1-focus-0-0-983-557.jpg" 
							alt="son Goku" 
							className="fotoPerfilContacto"
							/>
						
							<h1>Son Goku</h1>
						</div>
						</Link>
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
			</div>
		);
	} else {
		return <Redirect to="/login" />;
	}
}
