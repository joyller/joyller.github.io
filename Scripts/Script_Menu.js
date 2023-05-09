fetch('https://joyller.github.io/datafile/Menu.json')
.then(response => response.json())
.then(data => {
  const menuItems = new Map();
  for (const item of data) {
    menuItems.set(item.identificador, item);
  }

  const menuElement = document.getElementById('menu');
  for (const item of data) {
    if (!item.padre) {
      const liElement = document.createElement('li');
      const aElement = document.createElement('a');
      aElement.textContent = item.descripcion;
      liElement.appendChild(aElement);
      menuElement.appendChild(liElement);
    } else {
      const liElement = document.createElement('li');
      const aElement = document.createElement('a');
      aElement.textContent = item.descripcion;
      liElement.appendChild(aElement);
      const parent = menuItems.get(item.padre);
      const parentLiElement = menuElement.querySelector(`[data-id="${parent.identificador}"]`);
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
})
.catch(error => {
  console.error(error);
});
