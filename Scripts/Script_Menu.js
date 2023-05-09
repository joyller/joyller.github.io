fetch('https://joyller.github.io/datafile/Menu.json')
.then(response => response.json())
.then(data => {
  const menuItems = new Map();
  for (const item of data) {
    menuItems.set(item.identificador, item);
  }

  const menuElement = document.getElementById('MenuNav');
  for (const item of data) {
    if (!item.padre) {
      const liElement = document.createElement('li');
      const aElement = document.createElement('a');
      aElement.textContent = item.descripcion;
      liElement.appendChild(aElement);
      menuElement.appendChild(liElement);
    } 
  }
})
.catch(error => {
  console.error(error);
});
