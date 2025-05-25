const carousel = document.querySelector('.carousel');
const prev     = document.getElementById('prev');
const next     = document.getElementById('next');

const slide = () => carousel.querySelector('.slide');
const gap   = () => parseInt(getComputedStyle(carousel).gap);
const step  = () => slide().clientWidth + gap();

// Manual controls
prev.addEventListener('click', () => scrollNext(-1));
next.addEventListener('click', () => scrollNext(1));

// Scroll helper: dir = ±1
function scrollNext(dir) {
  const maxScroll = carousel.scrollWidth - carousel.clientWidth;
  const target   = carousel.scrollLeft + dir * step();
  if (dir > 0) {
    // forward
    if (target >= maxScroll) {
      carousel.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      carousel.scrollBy({ left: step(), behavior: 'smooth' });
    }
  } else {
    // backward (wrap to end)
    if (carousel.scrollLeft <= 0) {
      carousel.scrollTo({ left: maxScroll, behavior: 'smooth' });
    } else {
      carousel.scrollBy({ left: -step(), behavior: 'smooth' });
    }
  }
}

// Infinite auto-scroll forward only
setInterval(() => scrollNext(1), 3000); // every 3s, scroll one slide
