
fetch('https://joyller.github.io/datafile/Menu.json')
    .then(response => response.json())
    .then(data => {
        const menu = document.getElementById('menu');

        data.menu.forEach(item => {
            const link = document.createElement('a');
            link.href = item.url;
            link.textContent = item.name;

            const listItem = document.createElement('li');
            listItem.appendChild(link);

            // Check if the menu item has a submenu
            if (item.subMenu) {
                const subMenu = document.createElement('ul');

                // Create the submenu items
                item.subMenu.forEach(subItem => {
                    const subLink = document.createElement('a');
                    subLink.href = subItem.url;
                    subLink.textContent = subItem.name;

                    const subListItem = document.createElement('li');
                    subListItem.appendChild(subLink);

                    subMenu.appendChild(subListItem);
                });

                // Add the submenu to the menu item
                listItem.appendChild(subMenu);
            }

            menu.appendChild(listItem);
        });
    })
    .catch(error => console.error(error));
