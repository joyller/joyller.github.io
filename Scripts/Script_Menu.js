fetch('https://joyller.github.io/datafile/Menu.json')
  .then(response => response.json())
  .then(Menu => {
    // Loop through each person in the array
    Menu.forEach(Option => {
      // Access each person's data using dot notation or bracket notation
      console.log(Option.father);
      console.log(Option.ident);
    });
  })
  .catch(error => console.error(error));
