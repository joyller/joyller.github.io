const menuUrl = 'menu.json';

function createMenu(parentId, menu) {
  const menuItems = menu.filter(item => item.padre === parentId);
  if (!menuItems.length) return null;
  const ulElement = document.createElement('ul');
  menuItems.forEach(item => {
    const liElement = document.createElement('li');
    const aElement = document.createElement('a');
    aElement.textContent = item.descripcion;
    liElement.appendChild(aElement);
    const subMenu = createMenu(item.identificador, menu);
    if (subMenu) liElement.appendChild(subMenu);
    ulElement.appendChild(liElement);
  });
  return ulElement;
}

fetch('https://joyller.github.io/datafile/Menu.json')  
.then(response => response.json())
  .then(data => {
    const menuElement = document.getElementById('MenuNav');
    const menu = createMenu(null, data);
    menuElement.appendChild(menu);
  })
  .catch(error => console.error(error));
