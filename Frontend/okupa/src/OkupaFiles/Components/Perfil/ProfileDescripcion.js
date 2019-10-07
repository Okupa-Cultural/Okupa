import React, { Component } from 'react';

//CSS
import './css/ProfileCard.css';
import './css/ProfileDescripcion.css';

//Componentes

export default class ProfileDescripcion extends Component {

    render() {
        return(
            <div className="tarjeta-perfil">
         		<div className="perfil-info">
         			<div className="somos">
         				<h3>Somos...</h3>
         			</div>
	            	<p className="bio">
	            		Lorem ipsum dolor sit amet, 
	            		consectetur adipisicing elit.
						Libero facilis fugiat consequatur
						deleniti, numquam repellat.
						Numquam voluptatibus culpa
						quam iste, excepturi inventore 
						amet debitis. Nihil minus fugiat, 
						impedit reprehenderit quae.
						Lorem ipsum dolor sit amet, 
	            		consectetur adipisicing elit.
						Libero facilis fugiat consequatur
						deleniti, numquam repellat.
						Numquam voluptatibus culpa
						quam iste, excepturi inventore 
						amet debitis. Nihil minus fugiat, 
						impedit reprehenderit quae.
	            	</p>
            	</div>
            </div>
        );
    }
}