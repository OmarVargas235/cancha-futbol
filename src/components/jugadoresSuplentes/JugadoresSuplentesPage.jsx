import React from 'react';
import Jugador from '../../layaut/Jugador';
import { jugadoresContext } from '../../Context/JugadoresContext';

const JugadoresSuplentesPage = ({ jugadoresSuplentes }) => {
	
	return (
		<div className="contenedor-jugadores p-2 mt-2">
			<h3 className="text-light mb-2">Suplentes</h3>

			<div className="d-flex justify-content card-jugadores contenedor-jugadores-suplentes">
				<jugadoresContext.Consumer>
					{
						({ quitarJugador }) => (
							jugadoresSuplentes.map(jugador => (
								<Jugador 
									key={jugador.id}
									jugador={jugador}
									quitarJugador={quitarJugador}
									esSuplente={true}
								/>
							))
						)
					}
				</jugadoresContext.Consumer>
			</div>
		</div>
	)
}

export default JugadoresSuplentesPage;