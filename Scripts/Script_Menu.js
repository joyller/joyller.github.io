fetch('https://joyller.github.io/datafile/Menu.json')
  .then(response => response.json())
  .then(Menu => {

    let list = document.getElementById("El_Menu");

    Menu.forEach(Opcion => {
      console.log(Opcion.padre);
        console.log(Opcion.descripcion);

        let link = Opcion.url;
        let enlance = document.createElement('a');
        enlance.innerHTML = Opcion.descripcion;
        enlance.setAttribute('href', link);
        El_Menu.appendChild(enlance);

          console.log(Menu.descripcion);
          let lista = document.createElement("li");
          lista.innerText = Opcion.descripcion;
          list.appendChild(lista);
          console.log(Opcion.identificador);

      });
  })
  .catch(error => console.error(error))
