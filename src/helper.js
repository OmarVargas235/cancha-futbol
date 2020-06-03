export const agregarDivsCancha = getCancha => {
	let crearDiv = '', fragment = document.createDocumentFragment();

	for (let i = 0; i < 20; i++) {
		crearDiv = document.createElement('div'); // crea div para agregar las rallas verdes oscuras
		crearDiv.classList.add('lineaHorizontal');// y claras
		
		fragment.appendChild(crearDiv);
	}
	
	getCancha.appendChild(fragment);
}

export const agregarEtiquetaCerrar = (...spread) => {
	const [contenedorImgCerrar, contJugadorAgregado, dispatchTitularSuplente, jugador] = spread; 
	let sacarJugador = '', etiquetaPcerrar = document.createElement('p'), contMouseEnter = 0; 
	
	//Creacion del contenido, class y id de la etiqueta cerrar.
	etiquetaPcerrar.textContent = 'X';
	etiquetaPcerrar.classList.add('cerrar', 'd-flex', 'justify-content-center', 
		'align-items-center');

	jugador.tipoJugador === 'suplente' 
	? etiquetaPcerrar.setAttribute('id', `cerrar-suplente-${contJugadorAgregado - 1}`) 
	: etiquetaPcerrar.setAttribute('id', `cerrar-titular-${contJugadorAgregado - 1}`);

	contenedorImgCerrar.addEventListener('mouseenter', () => { //Agrega etiqueta cerrar
		contenedorImgCerrar.append(etiquetaPcerrar);
		contMouseEnter++;

		sacarJugador = jugador.tipoJugador === 'suplente' 
		? document.querySelector(`#cerrar-suplente-${contJugadorAgregado - 1}`) 
		: document.querySelector(`#cerrar-titular-${contJugadorAgregado - 1}`);

		sacar_jugador_cancha(sacarJugador, dispatchTitularSuplente, jugador, contMouseEnter);
	});
	
	contenedorImgCerrar.addEventListener('mouseleave', () => contenedorImgCerrar.removeChild(sacarJugador));//Quita etiqueta cerrar
}

const sacar_jugador_cancha = (...spread) => {
	let [ sacarJugador, dispatchTitularSuplente, jugador, contMouseEnter ] = spread;

	const jugadorEliminado = () => {
		if (contMouseEnter === 1) {
			dispatchTitularSuplente({
				type: 'JUGADOR_SACADO',
				payload: jugador
			});
		}
	}
	
	sacarJugador.addEventListener('click', jugadorEliminado);
}