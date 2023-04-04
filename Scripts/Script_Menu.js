fetch('https://joyller.github.io/datafile/Menu.json')
    .then(response => response.json())
    .then(data => {
        // Get the menu container
        const menu = document.getElementById('menu');

        // Create the menu items
        data.menu.forEach(item => {
            const link = document.createElement('a');
            link.href = item.url;
            link.textContent = item.name;

            const listItem = document.createElement('li');
            listItem.appendChild(link);

            menu.appendChild(listItem);
        });
    })
    .catch(error => console.error(error));

