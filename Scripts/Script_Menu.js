fetch('https://joyller.github.io/datafile/Menu.json')
  .then(response => response.json())
  .then(data => {
    // Access the name variable using dot notation
    console.log(data.name);
    
    // Access the name variable using bracket notation
    console.log(data['name']);
  })
  .catch(error => console.error(error));