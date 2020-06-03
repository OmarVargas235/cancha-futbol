import React, { useState, useEffect, useContext } from 'react';
import JugadorTitular from '../Molecules/JugadorTitular';
import { agregarDivsCancha } from '../../helper';

import { TitularSuplenteContext } from '../../Context/TitularSuplenteContext';

const Cancha = () => {

	const { stateTitularSuplente } = useContext(TitularSuplenteContext);

	const { jugadorTitular } = stateTitularSuplente;
	const [agregarDivsEstado, guardarAgregarDivsEstado] = useState(true);

	useEffect(() => {
		let getCancha = document.querySelector('.cancha');
				
		if (agregarDivsEstado) {/*Evita que se llame a la funcion agregarDivsCancha() mas de una 
			vez.*/
			agregarDivsCancha(getCancha); 
			guardarAgregarDivsEstado(false);
		}

	}, [agregarDivsEstado, jugadorTitular]);

	return (
		<div className="cancha">
			{
				stateTitularSuplente.jugadorTitular.map((element, index) => (
					<JugadorTitular 
						key={element.id}
						jugador={element}
						id={element.id}
						tipoJugador="titular"
					/>
				))
			}
		</div>
	)
}

export default React.memo(Cancha);