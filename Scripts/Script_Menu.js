var almmenu = fetch('https://joyller.github.io/datafile/Menu.json').then((response) => response.json());

console.log("hola");
console.log(almmenu);

function crearMenu(){
  for(var x = 0; x <= almmenu.length; x++){
    console.log(almmenu.length);
  }
}

