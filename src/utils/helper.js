export const jugadorSeleccionado = (jugadores, jugadoresTitularSuplente, jugador) => {
	
	const arrJugadores = jugadoresTitularSuplente;

	const jugador_Seleccionado = jugadores.find(el => el.id === jugador.id);
	const jugadoresRestantes = jugadores.filter(el => el.id !== jugador.id);

	arrJugadores.push(jugador_Seleccionado);

	return {arrJugadores, jugadoresRestantes};
}