fetch('https://joyller.github.io/datafile/Menu.json')
  .then(response => response.json())
  .then(data => {
    const menu = document.getElementById('menu');

    data.menu.forEach(item => {
      const link = document.createElement('a');
      link.href = item.ident;
      link.textContent = item.desc;

      const listItem = document.createElement('li');
      listItem.appendChild(link);
    
        console.log(menu.ident);
        console.log(menu.desc);
      menu.appendChild(listItem);
    });
  })
  .catch(error => console.error(error));
