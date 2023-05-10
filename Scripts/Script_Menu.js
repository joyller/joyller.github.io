fetch('https://joyller.github.io/datafile/Menu.json')
  .then(response => response.json())
  .then(DatosMenu => {

    var contenedor = document.getElementById("Menu");
    var lista = document.createElement("li");

    for (var x = 0; x < DatosMenu.length; x++) {
      for (var y = 0; y < DatosMenu.length; y++) {
        if (DatosMenu[x].padre === null) {
          console.log(x);
          lista.textContent = DatosMenu[x].descripcion;

          Menu.appendChild(lista);

          lista = document.createElement('li');
          lista.createElement = DatosMenu[x].descripcion;

          const menu = document.querySelector('#Menu');
          Menu.appendChild(lista);

          console.log(DatosMenu[x].identificador);
          console.log(DatosMenu[x].descripcion);
          console.log(DatosMenu[x].padre);
        }
      }
    }
  })
  .catch(error => console.error(error));
