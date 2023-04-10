// cargar el JSON
fetch('https://joyller.github.io/datafile/Menu.json')
  .then(response => response.json())
  .then(Menu => {
    // Almacena el menu 
    // llama la funcion 
    const lista = CrearMenu(Menu);

    // Prueba de datos
    Menu.forEach(Opcion => {
      console.log(Opcion.padre);
      console.log(Opcion.descripcion);
      console.log(Opcion.identificador);
    })

    // Add the HTML markup to the page
    document.getElementById('Menuhtml').innerHTML = lista;
    generateList(Menu);
  })
  .catch(error => console.error(error));

// Create the HTML markup for the list
function generateList(Menu) {
  const tree = buildTree(Menu);
  const rootNodes = getRootNodes(tree);

  const ul = document.createElement('ul');

  rootNodes.forEach(root => {
    const li = document.createElement('li');
    li.textContent = root.descripcion;
    ul.appendChild(li);

    const childUl = buildChildUl(root, tree);
    li.appendChild(childUl);
  });

  return ul;
}

function buildChildUl(node, tree) {
  const childUl = document.createElement('ul');
  const children = getChildren(node, tree);

  children.forEach(child => {
    const childLi = document.createElement('li');
    childLi.textContent = child.descripcion;
    childUl.appendChild(childLi);

    if (child.children) {
      const nestedChildUl = buildChildUl(child, tree);
      childLi.appendChild(nestedChildUl);
    }
  });

  return childUl;
}




/*let lista = document.getElementById("Menuhtml");
 
var ul = document.createElement('ul');
document.getElementById('Menuhtml').appendChild(ul);

Menu.forEach((Father) => {
  let li = document.createElement("li");
  li.innerText = Father.descripcion;
  ul.appendChild(li);

  

  Menu.forEach(Hijo => {
    if (Father.identificador == Hijo.padre) {
      console.log(Father.descripcion + " es el padre de " + Hijo.descripcion);

      
    }
  });
})
.catch(error => console.error(error))

/*console.log(Father.padre);
    console.log(Father.descripcion);
    console.log(Father.identificador);*/