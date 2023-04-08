fetch('https://joyller.github.io/datafile/Menu.json')
  .then(response => response.json())
  .then(Menu => {

    let list = document.createElement("ul");

    function crearmenu(Menu, list){
      for(x = 0; x < Menu.length ; x++){
        objmenu = Menu[x];
        lista = document.createElement("li");
        if(objmenu.padre === null){
          enlace = document.createElement("a");
          enlace.innerHTML = objmenu.descripcion;
          enlace.href = objmenu.url;
          li.appendChild(enlace);
          crearmenu.appendChild(li);
        }
      }

      return crearmenu;
    }

    Menu.forEach(Opcion => {
      console.log(Opcion.padre);
      console.log(Opcion.descripcion);
      console.log(Opcion.identificador);



      /*let link = Opcion.url;
      let enlance = document.createElement('a');
      enlance.innerHTML = Opcion.descripcion;
      enlance.setAttribute('href', link);
      El_Menu.appendChild(enlance);

      let lista = document.createElement("li");
      lista.innerText = Opcion.descripcion;
      list.appendChild(lista);*/

    });
  })
  .catch(error => console.error(error))

  crearmenu = nestItems(objmenu, crearmenu);

  let listanavegacion = document.querySelector("#listanavegacion");
  listanavegacion.appendChild(crearmenu);