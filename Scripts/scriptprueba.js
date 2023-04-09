const data = [
    {
      "ElementID": 1,
      "Name": "fruits"
    },
    {
      "ElementID": 2,
      "Name": "Fish"
    },
    {
      "ElementID": 3,
      "Name": "Apple",
      "FatherID": 1
    },
    {
      "ElementID": 4,
      "Name": "Salmon",
      "FatherID": 2
    },
    {
      "ElementID": 5,
      "Name": "Orange",
      "FatherID": 2
    },
    {
      "ElementID": 6,
      "Name": "Tuna",
      "FatherID": 1
    },
    {
      "ElementID": 7,
      "Name": "Gala",
      "FatherID": 3
    },
    {
      "ElementID": 8,
      "Name": "River",
      "FatherID": 4
    },
    {
      "ElementID": 9,
      "Name": "Tangerine",
      "FatherID": 5
    },
    {
      "ElementID": 10,
      "Name": "Tin",
      "FatherID": 6
    }
  ]
  
  function createNestedListElements(parentId) {
  const parentElements = data.filter(element => element.ElementID === parentId);
  if (parentElements.length === 0) {
    return null;
  }
  const parentElement = parentElements[0];
  const childElements = data.filter(element => element.FatherID === parentId);
  const listElement = document.createElement('ul');
  const listItemElement = document.createElement('li');
  listItemElement.textContent = parentElement.Name;
  listElement.appendChild(listItemElement);
  childElements.forEach(childElement => {
    const childListElement = createNestedListElements(childElement.ElementID);
    if (childListElement) {
      listItemElement.appendChild(childListElement);
    }
  });
  return listElement;
}

const rootListElement = createNestedListElements(null);
document.body.appendChild(rootListElement);