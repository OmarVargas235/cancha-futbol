import React, { Component } from 'react';
import { jugadoresContext } from '../../Context/JugadoresContext';
import JugadoresSuplentesPage from './JugadoresSuplentesPage';

class JugadoresSuplentes extends Component {
	
	render() {

		return (
			<jugadoresContext.Consumer>
				{
					({ jugadoresSuplentes }) => (
						<JugadoresSuplentesPage 
							jugadoresSuplentes={jugadoresSuplentes}
						/>
					)
				}
			</jugadoresContext.Consumer>
		);
	}
}

export default JugadoresSuplentes;