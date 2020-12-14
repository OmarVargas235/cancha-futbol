import React, { Component } from 'react';
import { jugadoresContext } from '../../Context/JugadoresContext';
import JugadoresPage from './JugadoresPage';

class Jugadores extends Component {
	
	render() {

		return (
			<jugadoresContext.Consumer>
				{
					({ jugadores, jugadorTitular, jugadorSuplente }) => (
						<JugadoresPage 
							jugadores={jugadores}
							jugadorTitular={jugadorTitular}
							jugadorSuplente={jugadorSuplente}
						/>
					)
				}
			</jugadoresContext.Consumer>
		);
	}
}

export default Jugadores;