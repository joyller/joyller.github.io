var almmenu = fetch('https://joyller.github.io/datafile/Menu.json').then((response) => response.json());

console.log("hola");

function crearMenu(){
  for(var x = 0; x <= 5; x++){
    console.log(almmenu.length);
  }
}

