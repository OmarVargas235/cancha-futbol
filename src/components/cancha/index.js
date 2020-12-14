import React, { Component } from 'react';
import CanchaPage from './CanchaPage';

class Cancha extends Component {

	render() {

		return (
			<div className="p-2 mt-2 contenedor-titulares">
				<h3 className="text-light mb-2">Titulares</h3>

				<div className="d-flex justify-content-center pb-4">
					<CanchaPage />
				</div>
			</div>
		);
	}
}

export default Cancha;