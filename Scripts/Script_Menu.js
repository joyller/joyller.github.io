fetch('https://joyller.github.io/datafile/Menu.json')
  .then(response => response.json())
  .then(DatosMenu => {

    var contenedor = document.getElementById("Menu");
    var lista = document.createElement("ul");

    DatosMenu.forEach(Opcion => { // ver los datos
      console.log(Opcion.identificador);
      console.log(Opcion.descripcion);
      console.log(Opcion.padre);

      lista.createElement("li").Opcion.descripcion;

    })
  })
  .catch(error => console.error(error));
