import React, { useEffect, useContext } from 'react';
import Jugador from '../Molecules/Jugador';

import { JugadoresContext } from '../../Context/JugadoresContext';
import { TitularSuplenteContext } from '../../Context/TitularSuplenteContext';

const Jugadores = () => {

	const { stateJugadores, dispatchJugadores, nJugadoresSuplentes } = useContext(JugadoresContext);

	const { stateTitularSuplente, dispatchTitularSuplente } = useContext(TitularSuplenteContext);
	const { jugadorSacado } = stateTitularSuplente;

	useEffect(() => {
		const { jugadorSuplente, jugadorTitular } = stateTitularSuplente;
		const copiaStateJugadores = [...stateJugadores.jugadores];
		
		//Logica para quitar elementos del array de "jugadores" de JugadoresContext
		const jugadorSeleccionado = () => {
			const elementoEliminadoArray = copiaStateJugadores.splice(stateJugadores.selectJugador.id, 1);

			dispatchJugadores({ 
				type: 'JUGADORES',
				payload: copiaStateJugadores
			}); //Saca los elementos del array de jugadores de JugadoresContext.

			stateJugadores.selectJugador.tipoJugador === 'titular' 
			? dispatchTitularSuplente({
				type: 'JUGADOR_TITULAR',
				payload: [...jugadorTitular, ...elementoEliminadoArray]
			}) //Pone a cada jugador clickiado en un array que renderiza los gudores sobre la cancha.
			: dispatchTitularSuplente({
				type: 'JUGADOR_SUPLENTE',
				payload: [...jugadorSuplente, ...elementoEliminadoArray]
			})//Pone a cada jugador clickiado en un array que renderiza los jugadores suplentes.

			dispatchJugadores({
				type: 'JUGADOR_SELECCIONADO',
				payload: {}
			});//Limpia el jugador que a sido seleccionado
		}

		if (stateJugadores.selectJugador.tipoJugador === 'titular' && jugadorTitular.length < 11) {
			jugadorSeleccionado();

		} else if (stateJugadores.selectJugador.tipoJugador === 'suplente' && jugadorSuplente.length < nJugadoresSuplentes) {
			jugadorSeleccionado();
		}
		
		//Logica para agregar elementos al array de jugadores de JugadoresContext
		if (Object.keys(jugadorSacado).length === 5) {
			if (jugadorSacado.tipoJugador === "suplente") { //Elimina jugadores suplentes
				const filtroSuplente = jugadorSuplente.filter(element => element.id !== jugadorSacado.id);
				
				dispatchTitularSuplente({
					type: 'JUGADOR_SUPLENTE',
					payload: filtroSuplente 
				});

			} else { //Elimina jugadores titulares
				const filtroTitular = jugadorTitular.filter(element => element.id !== jugadorSacado.id);
				
				dispatchTitularSuplente({
					type: 'JUGADOR_TITULAR',
					payload: filtroTitular 
				});
			}
			
			copiaStateJugadores.push(jugadorSacado);

			dispatchJugadores({
				type: 'JUGADORES',
				payload: copiaStateJugadores
			});//Vuelve a poner a todos los jugadores en en el array de Jugadores de JugadoresContext
			
			dispatchTitularSuplente({
				type: 'JUGADOR_SACADO',
				payload: {}
			});//Limpia el objeto jugadorSacado y evita que se cree un bucle infinito.

			dispatchJugadores({
				type: 'JUGADOR_SELECCIONADO',
				payload: {}
			});//Limpia el jugador que a sido seleccionado para evitar renderizarlo
		}

	}, [stateJugadores, jugadorSacado, stateTitularSuplente, nJugadoresSuplentes, dispatchJugadores, dispatchTitularSuplente]);

	return (
		<div className="contenedor-jugadores p-2">
			<h3 className="text-light mb-2">Jugadores</h3>

			<div className="d-flex justify-content card-jugadores card-jugadores">
				{
					stateJugadores.jugadores.map((element, index) => (
						<Jugador 
							key={index}
							id={index}
							jugador={element}
						/>
					))
				}
			</div>
		</div>
	)
}

export default Jugadores;