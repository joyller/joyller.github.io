fetch('https://joyller.github.io/datafile/Menu.json')
.then(response => response.json())
.then(data => {
  // Find the person with name "Jane Smith"
  const jane = data.find(person => person.name === "Jane Smith");
  
  // Access Jane's age using dot notation or bracket notation
  console.log(jane.age);
})
.catch(error => console.error(error));