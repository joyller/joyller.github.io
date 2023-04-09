fetch('https://joyller.github.io/datafile/Menu.json')
  .then(response => response.json())
  .then(Menu => {

    Menu.forEach(Opcion => {
        console.log(Opcion.padre);
        console.log(Opcion.descripcion);
        console.log(Opcion.identificador);
    })


    /*let lista = document.getElementById("Menuhtml");
    
    var ul = document.createElement('ul');
		document.getElementById('Menuhtml').appendChild(ul);

    Menu.forEach((Father) => {
      let li = document.createElement("li");
      li.innerText = Father.descripcion;
      ul.appendChild(li);

      

      Menu.forEach(Hijo => {
        if (Father.identificador == Hijo.padre) {
          console.log(Father.descripcion + " es el padre de " + Hijo.descripcion);

          
        }
      });*/
  })
  .catch(error => console.error(error))

/*console.log(Father.padre);
        console.log(Father.descripcion);
        console.log(Father.identificador);*/