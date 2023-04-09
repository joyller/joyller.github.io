fetch('https://joyller.github.io/datafile/Menu.json')
  .then(response => response.json())
  .then(Menu => {

    let lista = document.getElementById("Menuhtml"); 

    Menu.forEach((Father) => {

      let li = document.createElement("li");
      li.innerText = Father.descripcion;
      lista.appendChild(li);

      Menu.forEach(Hijo => {
        if(Father.identificador == Hijo.padre){
          console.log (Father.descripcion + " es el padre de " + Hijo.descripcion);     
        }
      });
    });
  })
  .catch(error => console.error(error))
        
  /*console.log(Father.padre);
          console.log(Father.descripcion);
          console.log(Father.identificador);*/