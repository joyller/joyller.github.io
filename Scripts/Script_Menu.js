fetch('https://joyller.github.io/datafile/Menu.json')
  .then(response => response.json())
  .then(Menu => {

    var auxiliar = Menu;
    
    for(var x = 0; x < Menu.length ; x++)
    {
      if(auxiliar[x+1].padre == Menu.identificacion){
        console.log(auxiliar[x].descripcion + " es el padre de " + Menu[x+1].descripcion)
      }
    }
    


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