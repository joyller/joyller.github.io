fetch('https://joyller.github.io/datafile/Menu.json')
  .then(response => response.json())
  .then(DatosMenu => {

    var contenedor = document.getElementById("Menu");
    var lista = document.createElement("li");

    for(var x = 0 ; x < DatosMenu.length ; x++){
      for(var y = 0 ; y < DatosMenu.length ; y++){
        console.log(x);
      /*lista.textContent = Opcion.descripcion;

      Menu.appendChild(lista);

      lista = document.createElement('li');
      lista.createElement = Opcion.descripcion;

      const menu = document.querySelector('#Menu');
      Menu.appendChild(lista);

      console.log(Opcion.identificador);
      console.log(Opcion.descripcion);
      console.log(Opcion.padre);*/
      }
    }
  })
  .catch(error => console.error(error));
