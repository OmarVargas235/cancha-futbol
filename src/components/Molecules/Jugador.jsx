import React, { useContext } from 'react';
import { JugadoresContext } from '../../Context/JugadoresContext';

const Jugador = ({ jugador, id }) => {
	const { dispatchJugadores } = useContext(JugadoresContext);

	return (
		<div className="card-Jugador d-flex flex-column align-items-center p-2 mr-2 mb-2">
			<img src={jugador.img} alt={jugador.altImg} className="img-fluid" />

			<p className="text-center text-light mt-3">{jugador.nombre}</p>

			<div className="d-flex justify-content-center">
				<button 
					className="btn btn-primary mr-2"
					onClick={ () => dispatchJugadores({
						type: 'JUGADOR_SELECCIONADO',
						payload: {
							tipoJugador: 'titular',
							id
						}
					}) }
				>Titular</button>

				<button 
					className="btn btn-gray"
					onClick={ () => dispatchJugadores({
						type: 'JUGADOR_SELECCIONADO',
						payload: {
							tipoJugador: 'suplente',
							id
						}
					}) }
				>Suplente</button>
			</div>
		</div>
	)
}

export default React.memo(Jugador);