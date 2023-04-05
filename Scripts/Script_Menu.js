async function menu() {
  const response = await fetch('https://joyller.github.io/datafile/Menu.json');
  const ident = await response.json();
  console.log(ident); 
  // logs [{ name: 'Joker'}, { name: 'Batman' }]
}
menu();
