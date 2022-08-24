document.addEventListener("DOMContentLoaded", () => {
	const $tiempoTranscurrido = document.querySelector("#tiempoTranscurrido"),
		$btnIniciar = document.querySelector("#btnIniciar"),
		$btnPausar = document.querySelector("#btnPausar"),
		$btnMarca = document.querySelector("#btnMarca"),
		$btnDetener = document.querySelector("#btnDetener"),
		$contenedorMarcas = document.querySelector("#contenedorMarcas");
	let marcas = [],
		idInterval,
		tiempoInicio = null;
	let diferenciaTemporal = 0;

	const ocultarElemento = elemento => {
		elemento.style.display = "none";
	}

	const mostrarElemento = elemento => {
		elemento.style.display = "";
	}

	const agregarCeroSiEsNecesario = valor => {
		if (valor < 10) {
			return "0" + valor;
		} else {
			return "" + valor;
		}
	}
})