import React from 'react';
//import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

//Componentes
import ChatDesktop from '../Components/Chat/ChatScreens/ChatDesktop';
import Contacts from '../Components/Chat/ChatScreens/ChatMobile_contacts';

//CSS
import './css/EstilosGenerales.css'
import './css/Chat.css';

export default function Chat() {

	//const isLogged = useSelector( state => state.isLogged );
	const isLogged = true;

	const width = window.innerWidth;

	if(isLogged && width > 768) {
		return (
			<ChatDesktop />
		);
	} else {
		if(isLogged && width <= 768) {
			return (
				<Contacts />
			);
		} else {
			return <Redirect to="/login" />;
		}
	}
}
