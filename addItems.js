const baseAPI = 'https://studentsmarksbackend.azurewebsites.net/api';

async function addItem() {
    const name = document.getElementById('itemName').value;
    const saying = parseFloat(document.getElementById('itemCost').value);
    const id = document.getElementById('itemID').value;
    const newItem = { id, name, saying };
    try {
      const response = await fetch('https://studentsmarksbackend.azurewebsites.net/api/heroes', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newItem)
      });
      
      if (response.ok) {
        console.log('Item added successfully');
      } else {
        console.error('Error adding item:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding item:', error);
    }
  }


  function create() {
    const name = document.getElementById('itemName').value;
    const saying = parseFloat(document.getElementById('itemCost').value);
    const id = document.getElementById('itemID').value;
    const hero = {"id": id, "name" : name, "saying": saying };
    //console.log(JSON.stringify({id, name, saying}))
    console.log("Akshit is here")
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/hero`, {
        method: 'PUT',
        body: JSON.stringify(hero),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      })
        .then(result => result.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
    });
  }