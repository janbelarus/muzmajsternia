import { initTranslation } from './translate.js';
initTranslation();     
const menuButton = document.querySelector(".menu");
const navList = document.querySelector(".nav-list");
const navItem = document.querySelectorAll(".nav-item");

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("open");
    navList.classList.toggle("open");
});

navItem.forEach((item) => {
    item.addEventListener("click", () => {
        if (menuButton.classList.contains("open")){
          navList.classList.toggle("open");
          menuButton.classList.toggle("open");

        }
    })
   });

   let icon = document.getElementById ("icon");
let img = document.getElementById ("logo");

icon.onclick = function(){
    document.body.classList.toggle ("light-theme");
    if (document.body.classList.contains("light-theme")){
        icon.src = "./assets/svg/Header/moon.svg";
        img.src = "./assets/svg/Header/black_logo.svg";
        insta.src ="./assets/svg/footer/VectorInst.svg";
        face.src="./assets/svg/footer/VectorFace.svg";
        twit.src="./assets/svg/footer/VectorTwitter.svg";
        pint.src="./assets/svg/footer/VectorPint.svg";
        
    }
    else{
        icon.src = "./assets/svg/Header/carbon_sun.svg";
        img.src = "./assets/svg/Header/logo.svg";
        insta.src = "./assets/svg/footer/Vector.svg";
        face.src="./assets/svg/footer/Vector-1.svg";
        twit.src="./assets/svg/footer/Vector-2.svg";
        pint.src="./assets/svg/footer/Vector-3.svg"

    }
  }

const contact = document.querySelector (".contact");
const header = document.querySelector (".header");
icon.addEventListener("click", () => {
    header.classList.toggle("open");
    contact.classList.toggle("open");
});

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

  function setLocalStorage() {
    localStorage.setItem('lang', lang);
  }
  window.addEventListener('beforeunload', setLocalStorage)

  function getLocalStorage() {
    if(localStorage.getItem('lang')) {
      const lang = localStorage.getItem('lang');
      getTranslate(lang);
    }
  }
  window.addEventListener('load', getLocalStorage)