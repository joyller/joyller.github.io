fetch('https://joyller.github.io/datafile/Menu.json')
  .then(response => response.json())
  .then(DatosMenu => {

    const menuItems = new Map();
    for (const item of DatosMenu) {
      menuItems.set(item.ID, item);
    }

    const menuElement = document.getElementById('menu');
    for (const item of DatosMenu) {
      if (!item.father) {
        const liElement = document.createElement('li');
        const aElement = document.createElement('a');
        aElement.textContent = item.description;
        liElement.appendChild(aElement);
        menuElement.appendChild(liElement);
      } else {
        const liElement = document.createElement('li');
        const aElement = document.createElement('a');
        aElement.textContent = item.description;
        liElement.appendChild(aElement);
        const parent = menuItems.get(item.father);
        const parentLiElement = menuElement.querySelector(`[data-id="${parent.ID}"]`);
        if (parentLiElement) {
          const ulElement = parentLiElement.querySelector('ul');
          if (!ulElement) {
            const newUlElement = document.createElement('ul');
            parentLiElement.appendChild(newUlElement);
            ulElement = newUlElement;
          }
          ulElement.appendChild(liElement);
        }
      }
    }
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