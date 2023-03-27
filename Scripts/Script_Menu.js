var almmenu = fetch('https://joyller.github.io/datafile/Menu.json').then((response) => response.json()).then((json) => console.log(json));

console.log("hola");
console.log(almmenu);
