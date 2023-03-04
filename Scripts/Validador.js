function prueba(cedu){
	var MiCedula = parseInt(cedu,10);
	
	var digitos = MiCedula.toString();
	var separar = digitos.split('');
	var digReal = separar.map(Number);
	var total = 0;
	var multipar = 0;
	var verificador = 0;

for (var x = 0; x < 10 ; x++){
	if((x+1)%2 != 0)
	{
		total= (total + digReal[x])
	}

	if((x+1)%2 == 0)
	{
		multiPar = digReal[x] * 2;
		if(multiPar >= 10)
		{
			var aux = multiPar.toString();
			var auxT = aux.split('');
			var auxN = auxT.map(Number);
			
			total = (total + auxN[0]+auxN[1]);
		}else 
		{
			total = (total + multiPar)
		}
	}
}

verificador = (total % 10);

if(verificador > 0)
{
	verificador = 10-verificador;
	if(verificador == digReal[10])
	{
		document.getElementById("valido").innerHTML = '<b style="color:rgb(167, 219, 131);">cedula valida</b>';
	}
	else
	{
		document.getElementById("valido").innerHTML = '<b style="color:rgb(219, 144, 131);">cedula invalida</b>';
	}

}else
{
	if( 0 == digReal[10])
	{
		document.getElementById("valido").innerHTML = '<b style="color:rgb(167, 219, 131);">cedula valida</b>';
	}
	else
	{
		document.getElementById("valido").innerHTML = '<b style="color:rgb(219, 144, 131);">cedula invalida</b>';
	}
}

}
