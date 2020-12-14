import React, { Component, createContext } from 'react';
import { jugadores } from '../utils/data';
import { jugadorSeleccionado } from '../utils/helper';

export const jugadoresContext = createContext();

class JugadoresProvider extends Component {

	state = {
		jugadores,
		jugadoresTitular: [],
		jugadoresSuplentes: [],
	}

	jugadorTitular = jugador => {
		
		const { jugadores, jugadoresTitular } = this.state;

		if (jugadoresTitular.length > 10) return;

		const jugadoresObj = jugadorSeleccionado(jugadores, jugadoresTitular, jugador);	

		this.setState({
			...this.state,
			jugadores: jugadoresObj.jugadoresRestantes,
			jugadoresTitular: jugadoresObj.arrJugadores,
		});
	}

	jugadorSuplente = jugador => {

		const { jugadores, jugadoresSuplentes } = this.state;
		
		if (jugadoresSuplentes.length > 1) return;

		const jugadoresObj = jugadorSeleccionado(jugadores, jugadoresSuplentes, jugador);
	
		this.setState({
			...this.state,
			jugadores: jugadoresObj.jugadoresRestantes,
			jugadoresSuplentes: jugadoresObj.arrJugadores,
		});	
	}

	quitarJugador = (jugador, esSuplente) => {

		const { jugadores, jugadoresSuplentes, jugadoresTitular } = this.state;
		const arrJugadores = [...jugadores];
		const titularOsuplente = esSuplente ? jugadoresSuplentes : jugadoresTitular;

		const jugadorEliminado = titularOsuplente.find(el => el.id === jugador.id);
		const jugadoresRestantes = titularOsuplente.filter(el => el.id !== jugador.id);

		arrJugadores.push(jugadorEliminado);

		this.setState({
			...this.state,
			jugadores: arrJugadores,
			jugadoresTitular: esSuplente ? jugadoresTitular : jugadoresRestantes,
			jugadoresSuplentes: esSuplente ? jugadoresRestantes : jugadoresSuplentes,
		});	
	}

	render() {

		const { jugadores, jugadoresTitular, jugadoresSuplentes } = this.state;

		return (
			<jugadoresContext.Provider value={{
				jugadores,
				jugadoresTitular,
				jugadoresSuplentes,
				jugadorTitular: this.jugadorTitular,
				jugadorSuplente: this.jugadorSuplente,
				quitarJugador: this.quitarJugador,
			}}>
				{ this.props.children }
			</jugadoresContext.Provider>
		);
	}
}


export default JugadoresProvider;