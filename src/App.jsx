import React from 'react';
import Jugadores from './components/Pages/Jugadores';
import Titulares from './components/Pages/Titulares';
import Suplentes from './components/Pages/Suplentes';

import JugadoresProvider from './Context/JugadoresContext';
import TitularSuplenteContextProvider from './Context/TitularSuplenteContext';

const App = () => {

	return (
		<div className="mx-md-5 app-contenedor">
			<JugadoresProvider>
				<TitularSuplenteContextProvider>
					<h1 className="text-light my-4">OMmanager</h1>
					<Jugadores />

					<Titulares />
					<Suplentes />
				</TitularSuplenteContextProvider>
			</JugadoresProvider>
		</div>
	)
}

export default App;