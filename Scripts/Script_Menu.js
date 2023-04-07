fetch('https://joyller.github.io/datafile/Menu.json')
  .then(response => response.json())
  .then(Menu => {

    let list = document.getElementById("El_Menu");

    Menu.forEach(Opcion => {
      //console.log(Opcion.padre);
      
      if(Opcion.padre != null)
      {
        console.log(Opcion.descripcion)
      }

      let lista = document.createElement("li");
      lista.innerText = Opcion.descripcion;
      list.appendChild(lista);

      if(Opcion.padre == Opcion.identificador){
        let ulta = document.createElement("ul");
        ulta.innerHTML = Opcion.descripcion;
        list.appendChild(ulta);
      }
      //console.log(Opcion.identificador);

    });
  })
  .catch(error => console.error(error));
