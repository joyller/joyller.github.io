import '/.App.cs';
import navLinksData from "https://joyller.github.io/datafile/Menu.json";

fetch('https://joyller.github.io/datafile/Menu.json')
  .then(response => response.json())
  .then(Menu => {

    Menu.forEach(Opcion => {
      console.log(Opcion.padre);
      console.log(Opcion.descripcion);
      console.log(Opcion.identificador);
    })
  })
  .catch(error => console.error(error));

