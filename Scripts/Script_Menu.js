fetch('https://joyller.github.io/datafile/Menu.json')
  .then(response => response.json())
  .then(Menu => {
    let lista = document.getElementById("Menuhtml");

    Menu.forEach(Father => {
      let li = document.createElement("li");
      li.innerText = Father.descripcion;
      lista.appendChild(li);

      /*Menu.forEach(Hijo => {
        if(Father.identificador == Hijo.padre){
          console.log (Father.descripcion + " es el padre de " + Hijo.descripcion);
          

        }
        
        /*console.log(Padre.padre);
        console.log(Padre.descripcion);
        console.log(Padre.identificador);
        

      });*/
    });
  })
  .catch(error => console.error(error))