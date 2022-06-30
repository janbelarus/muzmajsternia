const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const ranges = player.querySelectorAll('.player__slider');
const playBtn = player.querySelector('.play-btn');
const volume = player.querySelector('.volume-icon');

function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function btnPlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateBtn() {
    const btn = this.paused ? playBtn.style.display = "" : playBtn.style.display = "none";
    playBtn.textContent = btn;
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function handleProgress() {
   const percent = (video.currentTime / video.duration) * 100;
   progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
   const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
   video.currentTime = scrubTime;
 }

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);
video.addEventListener('play', updateBtn);
video.addEventListener('pause', updateBtn);
playBtn.addEventListener('click', btnPlay);
video.addEventListener('timeupdate', handleProgress);
ranges.forEach(range => range.addEventListener('click', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
volume.addEventListener("click", () => {
    volume.classList.toggle("mute");
});

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

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