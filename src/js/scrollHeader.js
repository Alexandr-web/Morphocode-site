const scrollHeader = () => {
  const header = document.querySelector('.header');
  
  let coordinates = [];

  window.addEventListener('scroll', () => {
    coordinates.push(pageYOffset);
    
    checkCoordinates();
    cleanCoordinates();
  });

  function cleanCoordinates() {
    coordinates = coordinates.length > 2 ? coordinates.splice(coordinates.length, 1) : coordinates;
  }

  function checkCoordinates() {
    for (let i = 0; i < coordinates.length; i++) {
      for (let j = i + 1; j < coordinates.length; j++) {
        coordinates[i] < coordinates[j] ? header.classList.add('hide') : header.classList.remove('hide');
      }
    }
  }
}

export default scrollHeader();