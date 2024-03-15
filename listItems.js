async function fetchItems() {
    try {
      const response = await fetch('https://studentsmarksbackend.azurewebsites.net/api/heroes');
      const items = await response.json();
      const itemsList = document.getElementById('itemsList');
      itemsList.innerHTML = ''; // Clear previous items
      items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.saying}`;
        itemsList.appendChild(li);
      });
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  }

  window.onload = fetchItems;