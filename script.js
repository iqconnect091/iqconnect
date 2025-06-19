// Scroll Animation
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

sections.forEach(section => {
  observer.observe(section);
});

// Parallax Effect
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
  let offset = window.pageYOffset;
  hero.style.backgroundPositionY = offset * 0.5 + 'px';
});
