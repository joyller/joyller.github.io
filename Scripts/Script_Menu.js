fetch('https://joyller.github.io/datafile/Menu.json')
  .then(response => response.json())
  .then(Menu => {
        


    Menu.forEach(Father => {
      Menu.forEach(Hijo => {
        if(Father.identificador == Hijo.padre){
          console.log (Father.descripcion + " es el padre de " + Hijo.descripcion); 
          console.log(Father.padre);
          console.log(Father.descripcion);
          console.log(Father.identificador);
        }
      });
    });
  })
  .catch(error => console.error(error))
        
  /*console.log(Padre.padre);
  console.log(Padre.descripcion);
  console.log(Padre.identificador);*/