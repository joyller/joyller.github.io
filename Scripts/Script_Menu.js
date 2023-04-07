fetch('https://joyller.github.io/datafile/Menu.json')
  .then(response => response.json())
  .then(Menu => {

    let list = document.getElementById("El_Menu");

    for(var x = 0; x < Menu.length; x++)
    {
      console.log(Menu[x].descripcion);
      let lista = document.createElement("li");
      let site = document.createElement("a href= #")
      lista.innerText = Opcion.descripcion;
      list.appendChild(lista);
    }

    Menu.forEach(Opcion => {
      //console.log(Opcion.padre);
      
      if(Opcion.padre != null)
      {
        console.log(Opcion.descripcion)
      }

      let lista = document.createElement("li");
      lista.innerText = Opcion.descripcion;
      list.appendChild(lista);
      
      //console.log(Opcion.identificador);

    });
  })
  .catch(error => console.error(error));
