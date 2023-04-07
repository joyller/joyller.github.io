fetch('https://joyller.github.io/datafile/Menu.json')
  .then(response => response.json())
  .then(data => {
    // Loop through each person in the array
    data.forEach(person => {
      // Access each person's data using dot notation or bracket notation
      console.log(person.name);
      console.log(person['age']);
      console.log(person.email);
    });
  })
  .catch(error => console.error(error));
