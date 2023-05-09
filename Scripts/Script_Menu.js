fetch(`https://joyller.github.io/datafile/Menu.json`)
  .then(response => response.json())
  .then(DatosMenu => {

    const contMenu = document.getElementById("Menuhtml"); // recibir el nav del menu
    contMenu.appendChild(creadorMenu(DatosMenu));

    DatosMenu.forEach(Opcion => { // ver los datos
      console.log(Opcion.identificador);
      console.log(Opcion.descripcion);
      console.log(Opcion.padre);
    })
  })
  .catch(error => console.error(error));

function creadorMenu(MenuData){
  const pad = document.createElement("ul");
  MenuData.forEach(caso => {
    /*const lista = document.createElement("li");
    const cont = document.createElement("ul");
    const parrafo = document.createElement("p");

    parrafo.appendChild(document.createTextNode(MenuData[caso].descripcion));*/
    console.log("haha!");
  })
}