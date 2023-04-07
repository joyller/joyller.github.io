fetch('https://joyller.github.io/datafile/Menu.json')
  .then(response => response.json())
  .then(Menu => {

    let list = document.getElementById("El_Menu");

    var fix = -1;
    // Loop through each person in the array
    Menu.forEach(Opcion => {

      while(!!~(fix = Opcion.findIndex(e => Opcion[i].pid == e.id)) && fix > i) [Opcion[i],a[fix]] = [Opcion[fix],Opcion[i]];
      lut[Opcion[i].id]=i;
      // Access each person's data using dot notation or bracket notation
      console.log(Opcion.padre);
      
      let li = document.createElement("li");
      li.innerText = Opcion.descripcion;
      list.appendChild(li);

      console.log(Opcion.identificador);

    });
  })
  .catch(error => console.error(error));


  