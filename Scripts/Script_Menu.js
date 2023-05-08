fetch(`https://joyller.github.io/datafile/Menu.json`)
  .then(response => response.json())
  .then(Menu => {

    Menu.forEach(Opcion => {
      console.log(Opcion.identificador);
      console.log(Opcion.descripcion);
      console.log(Opcion.padre);
    })
  })
  .catch(error => console.error(error));

