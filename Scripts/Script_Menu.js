fetch('https://joyller.github.io/datafile/Menu.json')
  .then(response => response.json())
  .then(Menu => {

    let list = document.getElementById("El_Menu");

    // Loop through each person in the array
    Menu.forEach(Opcion => {
      
      // Access each person's data using dot notation or bracket notation
      //console.log(Opcion.padre);
      
      let li = document.createElement("li");
      li.innerText = Opcion.descripcion;
      list.appendChild(li);

      if(Opcion.padre != null)
      {
        console.log(Opcion.descripcion)
      }
      //console.log(Opcion.identificador);

    });
  })
  .catch(error => console.error(error));