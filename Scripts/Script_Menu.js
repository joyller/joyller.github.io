fetch('https://joyller.github.io/datafile/Menu.json')
  .then(response => response.json())
  .then(Menu => {

    let lista = document.getElementById("Menuhtml");

    Menu.forEach((Father) => {
      Menu.forEach(Hijo => {
        if (Father.identificador == Hijo.padre) {
          console.log(Father.descripcion + " es el padre de " + Hijo.descripcion);
          let li = document.createElement("li");
          li.innerText = Hijo.descripcion;
          lista.appendChild(li);
        }
      });
    });
  })
  .catch(error => console.error(error))

/*console.log(Father.padre);
        console.log(Father.descripcion);
        console.log(Father.identificador);*/