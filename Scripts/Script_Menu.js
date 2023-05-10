fetch('https://joyller.github.io/datafile/Menu.json')
  .then(response => response.json())
  .then(DatosMenu => {

    var contenedor = document.getElementById("Menu");
    var lista = document.createElement("li");

    for (var x = 0; x < DatosMenu.length; x++) {
      for (var y = 0; y < DatosMenu.length; y++) {
        if (DatosMenu.padre === null) {
          console.log(x);
          lista.textContent = DatosMenu.descripcion;

          Menu.appendChild(lista);

          lista = document.createElement('li');
          lista.createElement = DatosMenu.descripcion;

          const menu = document.querySelector('#Menu');
          Menu.appendChild(lista);

          console.log(DatosMenu.identificador);
          console.log(DatosMenu.descripcion);
          console.log(DatosMenu.padre);
        }
      }
    }
  })
  .catch(error => console.error(error));
