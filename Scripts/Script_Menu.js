function prueba(){
    console.log("hola");

    var arreglo = new XMLHttpRequest();
    arreglo.open("GET", 'https://joyller.github.io/datafile/Menu.json', false);
    arreglo.send(null);
    var jsonObject = JSON.parse(arreglo.responseText);

    for (var x = 0 ; x < jsonObject.lenght ; x++)
    {
        console.log(jsonObject[x].IDe);   
        console.log(jsonObject[x].Desc);  
        console.log(jsonObject[x].Tipo);  
    }
}