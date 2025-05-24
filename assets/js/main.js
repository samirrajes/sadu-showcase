const prev = document.getElementById('prev');
const next = document.getElementById('next');
const carousel = document.querySelector('.carousel');

prev.addEventListener('click', () => {
  carousel.scrollBy({ left: -carousel.clientWidth * 0.8, behavior: 'smooth' });
});
next.addEventListener('click', () => {
  carousel.scrollBy({ left: carousel.clientWidth * 0.8, behavior: 'smooth' });
});
