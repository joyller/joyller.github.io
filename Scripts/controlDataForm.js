fetch("https://joyller.github.io/datafile/Usuario.json", {
  method: 'POST',
  headers: { 'Content-Type': 'application/json'},
  body: JSON.stringify({
            "id": 2,
            "Nombre": "Jose",
            "Apellido": "Rodriguez",
            "Cedula": "xxxxxxxx",
            "FechaNacimiento": "xxxxxx",
            "Genero": "M",
            "email": "kksskss",
            "Telefono": "5454645"

  })
}).then(res => {
  if(res.ok){
  console.log('Correct')}else{
    console.log('incorrect')
  }
}).then(data => console.log(data)).catch(error => console.log('ERROR'))