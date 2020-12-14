import React from 'react';
import Jugador from '../../layaut/Jugador';
import { jugadoresContext } from '../../Context/JugadoresContext';

const CanchaPage = () => (
	<div className="cancha">
		{
			[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(linea => (
				<div className="lineaHorizontal" key={linea}></div>
			))
		}

		<jugadoresContext.Consumer>
			{
				({ jugadoresTitular, quitarJugador }) => (
					jugadoresTitular.map(jugador => (
						<Jugador 
							key={jugador.id}
							jugador={jugador}
							quitarJugador={quitarJugador}
						/>
					))
				)
			}
		</jugadoresContext.Consumer>
	</div>
)

export default CanchaPage;