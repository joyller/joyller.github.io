fetch(`https://joyller.github.io/datafile/Menu.json`)
  .then(response => response.json())
  .then(DataMenu => {

    const contMenu = document.getElementById("Menuhtml");
    contMenu.appendChild(creadorMenu(DataMenu));

    DataMenu.forEach(Opcion => {
      console.log(Opcion.identificador);
      console.log(Opcion.descripcion);
      console.log(Opcion.padre);
    })
  })
  .catch(error => console.error(error));

function creadorMenu(MenuData){
  
}