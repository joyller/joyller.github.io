fetch('https://joyller.github.io/datafile/Menu.json')
  .then(response => response.json())
  .then(Menu => {
    const parentElements = Menu.filter(element => element.ElementID === Menu.padre);
    if (parentElements.length === 0) {
      return null;
    }
    const parentElement = parentElements[0];
    const childElements = Menu.filter(element => element.FatherID === parentId);
    const listElement = document.createElement('ul');
    const listItemElement = document.createElement('li');
    listItemElement.textContent = parentElement.Name;
    listElement.appendChild(listItemElement);
    childElements.forEach(childElement => {
      const childListElement = createNestedListElements(childElement.ElementID);
      if (childListElement) {
        listItemElement.appendChild(childListElement);
      }
    });
    return listElement;
  })
.catch(error => console.error(error))

const rootListElement = createNestedListElements(null);
document.body.appendChild(rootListElement);

/*fetch('https://joyller.github.io/datafile/Menu.json')
  .then(response => response.json())
  .then(Menu => {

    var auxiliar = Menu;
    
    for(var x = 0; x < Menu.length ; x++)
    {
    }
    


    let lista = document.getElementById("Menuhtml");
    
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

console.log(Father.padre);
        console.log(Father.descripcion);
        console.log(Father.identificador);*/