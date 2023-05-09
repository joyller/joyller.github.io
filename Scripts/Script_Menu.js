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
  
  function obj(DatosMenu, contenedor){
    DatosMenu.forEach(caso =>{
      objeto = DatosMenu[caso];
      var li = document.createElement("li");
      if(objeto.padre != null){
        var a = document.createElement("a");
        a.innerHTML = objeto.descripcion;
        a.href = objeto.url;
        li.appendChild(a);
        contenedor.appendChild(li)
      }
    })

    return contenedor;
  }