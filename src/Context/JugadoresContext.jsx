import React, { useReducer, createContext } from 'react';

export const JugadoresContext = createContext();

const reducer = (state, action) => {
	switch (action.type) {
		case 'JUGADORES':
			return {
				...state,
				jugadores: action.payload
			}

		case 'JUGADOR_SELECCIONADO':
			return {
				...state,
				selectJugador: action.payload
			}

		default: return state;
	}
}

const JugadoresProvider = props => {

	const initialState = {
		jugadores: [
			{
				img: './img/Chrysanthemum.jpg',
				nombre: 'Omar Vargas',
				altImg: 'Chrysanthemum',
				id: 1
			},
			{
				img: './img/Desert.jpg',
				nombre: 'Raul Jaimes',
				altImg: 'Desert',
				id: 2
			},
			{
				img: './img/Hydrangeas.jpg',
				nombre: 'Leonel Messi',
				altImg: 'Hydrangeas',
				id: 3
			},
			{
				img: './img/Koala.jpg',
				nombre: 'Higuain',
				altImg: 'Koala',
				id: 4
			},
			{
				img: './img/Jellyfish.jpg',
				nombre: 'Cristiano Ronaldo',
				altImg: 'Jellyfish',
				id: 5
			},
			{
				img: './img/Lighthouse.jpg',
				nombre: 'Karem Benzema',
				altImg: 'Lighthouse',
				id: 6
			},
			{
				img: './img/camisa_2.png',
				nombre: 'Ronni',
				altImg: 'camisa_2',
				id: 7
			},
			{
				img: './img/Penguins.jpg',
				nombre: 'james Rodriguez',
				altImg: 'Penguins',
				id: 8
			},
			{
				img: './img/camisa_3.png',
				nombre: 'Di maria',
				altImg: 'camisa_3',
				id: 9
			},
			{
				img: './img/Tulips.jpg',
				nombre: 'Pele',
				altImg: 'Tulips',
				id: 10
			},
			{
				img: './img/camisa_4.png',
				nombre: 'Ruben Dario',
				altImg: 'camisa_4',
				id: 11
			},
			{
				img: './img/camisa_1.png',
				nombre: 'Maradona',
				altImg: 'camisa_1',
				id: 12
			},
			{
				img: './img/camisa_5.png',
				nombre: 'Emerigildo',
				altImg: 'camisa_5',
				id: 13
			}
		],
		selectJugador: {}
	}

	const [stateJugadores, dispatchJugadores] = useReducer(reducer, initialState);
	const nJugadoresSuplentes = initialState.jugadores.length - 11;

	return (
		<JugadoresContext.Provider value={{
			nJugadoresSuplentes,
			stateJugadores,
			dispatchJugadores
		}}>
			{ props.children }
		</JugadoresContext.Provider>
	)
}

export default JugadoresProvider;