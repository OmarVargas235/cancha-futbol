import React, { useState, useEffect, useContext } from 'react';
import JugadorSuplente from '../Molecules/JugadorSuplente';

import { TitularSuplenteContext } from '../../Context/TitularSuplenteContext';

const Suplentes = () => {

	const { stateTitularSuplente } = useContext(TitularSuplenteContext);

	const [jugadoresSuplentes, guardarJugadorSuplente] = useState([]);

	useEffect(() => guardarJugadorSuplente(stateTitularSuplente.jugadorSuplente), [stateTitularSuplente]);

	return (
		<div className="contenedor-jugadores p-2 mt-2">
			<h3 className="text-light mb-2">Suplentes</h3>

			<div className="d-flex justify-content card-jugadores contenedor-jugadores-suplentes">
				{
					jugadoresSuplentes.map(element => (
						<JugadorSuplente 
							key={element.id}
							jugador={element}
							id={element.id}
							tipoJugador="suplente"
						/>
					))
				}
			</div>
		</div>
	)
}

export default Suplentes;