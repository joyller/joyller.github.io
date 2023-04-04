function prueba(){
    console.log("hola");

    var arreglo = new XMLHttpRequest();
    arreglo.open("GET",  'https://joyller.github.io/datafile/Menu.json', false);
    arreglo.send(null);
    var jsonObject = JSON.parse(arreglo.responseText);

    for (var x = 0 ; x < jsonObject.lenght ; x++)
    {
        console.log(jsonObject[0]);   

        var fila =  '<tr> <td>jsonObject[x].ID</td> <td>jsonObject[x].Desc</td> <td>jsonObject[x].Tipo</td></tr>';

        table.innerHTML += fila;
    }
}