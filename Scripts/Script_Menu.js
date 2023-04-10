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
  })
  .catch(error => console.error(error));

// Create the HTML markup for the list
function CrearMenu(Menu) {
  // Your code here
  const parentElements = data.filter(element => element.padre === Menu.identificador);
  if (parentElements.length === 0) {
    return null;
  }
  const parentElement = parentElements[0];
  const childElements = data.filter(element => element.padre === Menu.identificador);
  const listElement = document.createElement('ul');
  const listItemElement = document.createElement('li');
  listItemElement.textContent = parentElement.descripcion;
  listElement.appendChild(listItemElement);
  childElements.forEach(childElement => {
    const childListElement = CrearMenu(childElement.padre);
    if (childListElement) {
      listItemElement.appendChild(childListElement);
    }
  });
  return listElement;
}

const rootListElement = CrearMenu(null);
document.body.appendChild(rootListElement);
  

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