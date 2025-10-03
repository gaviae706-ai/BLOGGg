
document.addEventListener('DOMContentLoaded', function(){
  const overlay = document.getElementById('loading-overlay');
  setTimeout(()=> {
    overlay.classList.add('hidden');
  }, 600); // pequeño delay para mostrar transición
});


const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  if(window.scrollY > 30) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
});

const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('main-nav');
hamburger.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', String(!expanded));
  nav.classList.toggle('open');
});


const heroBg = document.querySelector('.hero-bg');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
 
  if(heroBg) heroBg.style.transform = `translateY(${scrolled * 0.15}px) scale(1.02)`;
});


const appearElements = document.querySelectorAll('.appear');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

appearElements.forEach(el => io.observe(el));


const yearSpan = document.getElementById('year');
if(yearSpan) yearSpan.textContent = new Date().getFullYear();
