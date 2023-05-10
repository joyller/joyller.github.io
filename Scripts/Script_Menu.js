fetch('https://joyller.github.io/datafile/Menu.json')
  .then(response => response.json())
  .then(DatosMenu => {
    DatosMenu.forEach(Opcion => { // ver los datos
      console.log(Opcion.identificador);
      console.log(Opcion.descripcion);
      console.log(Opcion.padre);
    })
  })
  .catch(error => console.error(error));

  let contenedor = document.createElement("ul");
  
  function crearMenu(DatosMenu, contenedor)
  {
    for(x = 0 ; x < DatosMenu.length; x++){
      var objeto = DatosMenu[x];
      var li = document.createElement("li");
      if(objeto.padre === null){
        var a = document.createElement("a");
        a.innerHTML = objeto.descripcion;
        a.href = objeto.url;
        li.appendChild(a);
        contenedor.appendChild(li)
    }
  }

    return contenedor;
  }

  contenedor = crearMenu(DatosMenu, contenedor);

let lisNaveg = document.querySelector("lista");
lisNaveg.appendChild(contenedor);