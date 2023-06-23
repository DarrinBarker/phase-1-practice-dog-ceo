console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
    // Challenge 1
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        const imageContainer = document.getElementById('dog-image-container');
  
        data.message.forEach(imageUrl => {
          const imageElement = document.createElement('img');
          imageElement.src = imageUrl;
          imageContainer.appendChild(imageElement);
        });
      });
  
    // Challenge 2
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
  
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const breedList = document.getElementById('dog-breeds');
  
        for (const breed in data.message) {
          const breedElement = document.createElement('li');
          breedElement.textContent = breed;
          breedList.appendChild(breedElement);
        }
      });
  
    // Challenge 3
    const dogBreeds = document.getElementById('dog-breeds');
  
    dogBreeds.addEventListener('click', event => {
      if (event.target.tagName === 'LI') {
        event.target.style.color = 'red';
      }
    });
  
    // Challenge 4
    const breedDropdown = document.getElementById('breed-dropdown');
  
    breedDropdown.addEventListener('change', event => {
      const selectedLetter = event.target.value;
      const breedListItems = dogBreeds.getElementsByTagName('li');
  
      for (const breedListItem of breedListItems) {
        if (!breedListItem.textContent.startsWith(selectedLetter)) {
          breedListItem.style.display = 'none';
        } else {
          breedListItem.style.display = 'list-item';
        }
      }
    });
  });
  