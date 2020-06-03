import React, { useEffect, useContext } from 'react';
import { agregarEtiquetaCerrar } from '../../helper';

import { TitularSuplenteContext } from '../../Context/TitularSuplenteContext';

const JugadorSuplente = props => {

	const { jugador, id, tipoJugador } = props;

	const { dispatchTitularSuplente } = useContext(TitularSuplenteContext);

	useEffect(() => {
		let contenedorImgCerrar = document.querySelector(`#contenedor-img-cerrar-${id}`),
			contJugadorAgregadoTitular = id + 1;

		jugador.tipoJugador = tipoJugador;
		
		agregarEtiquetaCerrar(contenedorImgCerrar, contJugadorAgregadoTitular, dispatchTitularSuplente, jugador);
	}, [jugador, id, tipoJugador, dispatchTitularSuplente]);

	return (
		<div className={`contenedor-jugador`}>
			<div id={`contenedor-img-cerrar-${id}`}>
				<img src={jugador.img} alt={jugador.altImg} />
			</div>

			<p>{jugador.nombre}</p>
		</div>
	)
}

export default React.memo(JugadorSuplente);