function prueba(){
    console.log("hola");

    var arreglo = new XMLHttpRequest();
    arreglo.open("GET",  'https://joyller.github.io/datafile/Menu.json', false);
    arreglo.send(null);
    var jsonObject = JSON.parse(arreglo.responseText);

    for (var x = 3 ; x < 10 ; x++)
    {
        console.log(jsonObject);

        
    }
}