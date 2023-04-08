fetch('https://joyller.github.io/datafile/Menu.json')
  .then(response => response.json())
  .then(Menu => {

    let list = document.getElementById("El_Menu");

    let respaldo = Menu;
    
    respaldo.forEach(respaldo => {
        Menu.sort((a, b) => a.identificador - b.padre)
    });

    for(var t = 0 ; t < Menu.length ; x++){
      console.log(Menu[x].descripcion)
    }
    /*Menu.forEach(Opcion => {
      //console.log(Opcion.padre);

      if (Opcion.padre != null) {
        console.log(Opcion.descripcion)
      }
      let link = Opcion.url;
      let enlance = document.createElement('a');
      enlance.innerHTML = Opcion.descripcion;
      enlance.setAttribute('href', link);
      El_Menu.appendChild(enlance);

      //if(Opcion.padre == Menu[])
      //console.log(Menu[x].descripcion);
      //let lista = document.createElement("li");
      //lista.innerText = Opcion.descripcion;
      //list.appendChild(lista);
      //console.log(Opcion.identificador);

    });*/
  })
  .catch(error => console.error(error))
