function prueba(cedu) {

	let ejemplo = document.getElementById("cedula").value;

	var cedula = ejemplo.split('');
	var total = 0;
	var auxiliar = 0;

	var digReal = 0;

	for (var x = 0; x < 10; x++) {
		if ((x + 1) % 2 != 0) {
			total = parseInt(Number(total) + Number(cedula[x]));
		}

		if ((x + 1) % 2 == 0) {

			auxiliar = parseInt(Number(cedula[x]) * Number(2));

			if (auxiliar < 10) {
				total = parseInt(Number(total) + Number(auxiliar));
			} else if (auxiliar >= 10) {
				var aux = String(auxiliar).split("").map((auxiliar) => {
					return Number(auxiliar)
				})

				auxiliar = parseInt(Number(aux[0]) + Number(aux[1]));

				total = parseInt(Number(total) + Number(auxiliar));
			}
		}
	}

	digReal = parseInt(Number(10) - (Number(total) % Number(10)));

	if (digReal == cedula[10] || digReal == 10) {
		document.getElementById("valido").innerHTML = '<b style="color:rgb(167, 219, 131);">cedula valida</b>';
	} else {
		document.getElementById("valido").innerHTML = '<b style="color:rgb(219, 144, 131);">cedula invalida</b>';
	}
}

