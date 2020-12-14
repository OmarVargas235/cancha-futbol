import React from 'react';

const withEtiquetaCerrar = Component => {

	const hoc = class extends React.Component {

		state = {
			etiquetaCerrar: false,
		}

		agregarEtiquetaCerrar = () => {

			this.setState({
				etiquetaCerrar: true,
			});
		}

		quitarEtiquetaCerrar = () => {

			this.setState({
				etiquetaCerrar: false,
			});
		}

		render() {
			
			const { jugador, quitarJugador, esSuplente } = this.props;
			const { etiquetaCerrar } = this.state;

			return (
				<Component
					jugador={jugador}
					esSuplente={esSuplente}
					etiquetaCerrar={etiquetaCerrar} 
					quitarJugador={quitarJugador} 
					agregarEtiquetaCerrar={this.agregarEtiquetaCerrar}
					quitarEtiquetaCerrar={this.quitarEtiquetaCerrar}
				/>
			);
		}
	}

	hoc.displayName = `withEtiquetaCerrar(${Component.displayName || Component.name})`;

	return hoc;
}

export default withEtiquetaCerrar;