
const section = document.querySelector('.section3');
const containers = document.querySelectorAll('.container');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const containerWidth = containers[0].offsetWidth;
let currentIndex = 0;

prevBtn.addEventListener('click', () => {
  currentIndex = Math.max(currentIndex - 1, 0);
  updateContainerPosition();
});

nextBtn.addEventListener('click', () => {
  currentIndex = Math.min(currentIndex + 1, containers.length - 1);
  updateContainerPosition();
});

function updateContainerPosition() {
  const newPosition = -currentIndex * containerWidth;
  section.style.transform = `translateX(${newPosition}px)`;
}