import React, { useReducer, createContext } from 'react';

export const TitularSuplenteContext = createContext();

const reducer = (state, action) => {
	switch (action.type) {
		case 'JUGADOR_TITULAR':
			return {
				...state,
				jugadorTitular: action.payload
			}

		case 'JUGADOR_SUPLENTE':
			return {
				...state,
				jugadorSuplente: action.payload

			}

		case 'JUGADOR_SACADO':
			return {
				...state,
				jugadorSacado: action.payload
			}

		default: return state;
	}
}

const TitularSuplenteContextProvider = props => {
	const initialState = {
		jugadorTitular: [],
		jugadorSuplente: [],
		jugadorSacado: {}
	}

	const [stateTitularSuplente, dispatchTitularSuplente] = useReducer(reducer, initialState);

	return (
		<TitularSuplenteContext.Provider value={{
			stateTitularSuplente,
			dispatchTitularSuplente
		}}>
			{ props.children }
		</TitularSuplenteContext.Provider>
	)
}

export default TitularSuplenteContextProvider;