fetch('https://joyller.github.io/datafile/Menu.json')
  .then(response => response.json())
  .then(as => {
    DatosMenu.forEach(Opcion => { // ver los datos
      console.log(Opcion.identificador);
      console.log(Opcion.descripcion);
      console.log(Opcion.padre);
    })
  })
  .catch(error => console.error(error));

function creadorMenu(MenuData){
  MenuData.forEach(caso => {
    console.log(caso.descripcion[caso]);
  })
}