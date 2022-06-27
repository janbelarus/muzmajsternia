const portfolioButtons = document.querySelector('.portfolio-buttons');
const portfolioButton = document.querySelectorAll('.portfolio-button');
const portfolioImages = document.querySelectorAll('.portfolio-image');
const seasons = ['winter', 'spring', 'summer', 'autumn'];

portfolioButtons.addEventListener('click', changeImage);

function changeImage(event) {
    if (event.target.classList.contains('portfolio-button')) {
      portfolioButton.forEach((button) => button.classList.remove('active'));
      event.target.classList.add('active');
      portfolioImages.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg` );
    }
  }

function preloadImages(season) {
    for(let i = 0; i <= 5; i++) {
      const img = new Image();
      img.src = `./assets/img/${season}/${index + 1}.jpg`;
    }
  }

  seasons.forEach(season => preloadImages(season));
