fetch('https://joyller.github.io/datafile/Menu.json')
  .then(response => response.json())
  .then(Menu => {

    let lista = document.createElement("li");

    for (var pa = 0; pa < Menu.length ; pa++){
      for(var hi = 0; hi < Menu.length ; hi++){
        if(Menu[pa].padre == Menu[hi].identificador){
          lista.innerText = pa.descripcion;
          list.appendChild(lista)
        }
      }
    }

    /*Menu.forEach(Opcion => {
      console.log(Opcion.padre);
      console.log(Opcion.descripcion);
      console.log(Opcion.identificador);



      /*let link = Opcion.url;
      let enlance = document.createElement('a');
      enlance.innerHTML = Opcion.descripcion;
      enlance.setAttribute('href', link);
      El_Menu.appendChild(enlance);

      lista.innerText = Opcion.descripcion;
      list.appendChild(lista);

    });*/
  })
  .catch(error => console.error(error))