var alm_menu = fetch('https://joyller.github.io/datafile/Menu.json').then((response) => response.json()).then((json) => console.log(json));

console.log("hola");
console.log(alm_menu);
