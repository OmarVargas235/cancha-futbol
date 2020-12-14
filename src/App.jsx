import React from 'react';
import Jugadores from './components/jugadores/';
import Cancha from './components/cancha/';
import JugadoresSuplentes from './components/jugadoresSuplentes/';

import JugadoresProvider from './Context/JugadoresContext';

const App = () => (
	<div className="mx-md-5 app-contenedor">
		<h1 className="text-light my-4">OMmanager</h1>

		<JugadoresProvider>
			<Jugadores />
			<Cancha />
			<JugadoresSuplentes />
		</JugadoresProvider>
	</div>
)

export default App;