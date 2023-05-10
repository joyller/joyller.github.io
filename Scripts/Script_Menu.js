fetch('https://joyller.github.io/datafile/Menu.json')
  .then(response => response.json())
  .then(DatosMenu => {

    var contenedor = document.getElementById("Menu");
    var lista = document.createElement("ul");

    
    DatosMenu.forEach(Opcion => { // ver los datos

      lista.textContent = Opcion.descripcion;

      Menu.appendChild(lista);

      lista = document.createElement('li');

      console.log(Opcion.identificador);
      console.log(Opcion.descripcion);
      console.log(Opcion.padre);

      lista.createElement("li").Opcion.descripcion;

      const menu = document.querySelector('#Menu');
      Menu.appendChild(li);
    })
  })
  .catch(error => console.error(error));
