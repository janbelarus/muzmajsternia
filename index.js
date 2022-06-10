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

const contact = document.querySelector (".contact");
const header = document.querySelector (".header");
icon.addEventListener("click", () => {
    header.classList.toggle("open");
    contact.classList.toggle("open");
});

const photoButtons = document.querySelector('.photo-buttons');
const photoButton = document.querySelectorAll('.photo-button');
const photoImages = document.querySelectorAll('.photo-image');
const seasons = ['first', 'second', 'third', 'fourth'];

photoButtons.addEventListener('click', changeImage);

function changeImage(event) {
    if (event.target.classList.contains('photo-button')) {
      photoButton.forEach((button) => button.classList.remove('active'));
      event.target.classList.add('active');
      photoImages.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg` );
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