fetch('example.json')
  .then(response => response.json())
  .then(data => {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const value = data[key];
        console.log(key + ': ' + value);
      }
    }
  })
  .catch(error => console.error(error));
