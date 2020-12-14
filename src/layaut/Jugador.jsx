import React from 'react';
import withEtiquetaCerrar from '../HOC/withEtiquetaCerrar';

const Jugador = props => {
	
	const { 
		jugador, 
		quitarJugador, 
		agregarEtiquetaCerrar, 
		quitarEtiquetaCerrar, 
		etiquetaCerrar,
		esSuplente 
	} = props;

	return (
		<div className={`contenedor-jugador ${esSuplente ? 'suplente' : ''}`}>
			<img 
				src={jugador.img} 
				alt={jugador.altImg} 
				onMouseEnter={agregarEtiquetaCerrar} 
				onMouseLeave={quitarEtiquetaCerrar} 
			/>

			<p>{jugador.nombre}</p>

			{
				etiquetaCerrar 
				? <p 
					className="cerrar d-flex justify-content-center align-items-center"
					onMouseEnter={agregarEtiquetaCerrar} 
					onMouseLeave={quitarEtiquetaCerrar} 
					onClick={() => quitarJugador(jugador, esSuplente)}
				>X</p>
				: null
			}
		</div>
	)
}

export default withEtiquetaCerrar(Jugador);