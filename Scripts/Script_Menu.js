fetch('https://joyller.github.io/datafile/Menu.json')
  .then(response => response.json())
  .then(Menu => {

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