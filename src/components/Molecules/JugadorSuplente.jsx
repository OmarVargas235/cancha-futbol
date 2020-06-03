import React, { useEffect, useContext } from 'react';
import { agregarEtiquetaCerrar } from '../../helper';

import { TitularSuplenteContext } from '../../Context/TitularSuplenteContext';

const JugadorSuplente = props => {

	const { jugador, id, tipoJugador } = props;

	const { dispatchTitularSuplente } = useContext(TitularSuplenteContext);

	useEffect(() => {
		let contenedorImgCerrar = document.querySelector(`#contenedor-img-suplente-cerrar-${id}`),
			contJugadorAgregadoSuplente = id + 1;

		jugador.tipoJugador = tipoJugador;
		
		agregarEtiquetaCerrar(contenedorImgCerrar, contJugadorAgregadoSuplente, dispatchTitularSuplente, jugador);
	}, [jugador, id, dispatchTitularSuplente, tipoJugador]);

	return (
		<div className={`contenedor-jugador suplente contenedor-jugador-suplente-${id}`}>
			<div id={`contenedor-img-suplente-cerrar-${id}`}>
				<img src={jugador.img} alt={jugador.altImg} />
			</div>

			<p>{jugador.nombre}</p>
		</div>
	)
}

export default React.memo(JugadorSuplente);