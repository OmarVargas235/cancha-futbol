import React from 'react';
import JugadorPage from './JugadorPage.jsx';

const JugadoresPage = ({ jugadores, jugadorTitular, jugadorSuplente }) => (
	<div className="contenedor-jugadores p-2">
		<h3 className="text-light mb-2">Jugadores</h3>

		<div className="d-flex justify-content card-jugadores card-jugadores">
			{
				jugadores.map((element, index) => (
					<JugadorPage 
						key={index}
						jugador={element}
						jugadorTitular={jugadorTitular}
						jugadorSuplente={jugadorSuplente}
					/>
				))
			}
		</div>
	</div>
)

export default JugadoresPage;