import React from 'react';

const JugadorPage = ({ jugador, jugadorTitular, jugadorSuplente }) => (
	<div className="card-Jugador d-flex flex-column align-items-center p-2 mr-2 mb-2">
		<img src={jugador.img} alt={jugador.altImg} className="img-fluid" />

		<p className="text-center text-light mt-3">{jugador.nombre}</p>

		<div className="d-flex justify-content-center">
			<button 
				className="btn btn-primary mr-2"
				onClick={() => jugadorTitular(jugador)}
			>Titular</button>

			<button 
				className="btn btn-gray"
				onClick={() => jugadorSuplente(jugador)}
			>Suplente</button>
		</div>
	</div>
)

export default JugadorPage;