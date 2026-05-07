const toggle = document.getElementById('langToggle');
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
let lang = 'de';

toggle?.addEventListener('click', () => {
  lang = lang === 'de' ? 'en' : 'de';
  document.documentElement.lang = lang;
  toggle.textContent = lang === 'de' ? 'EN' : 'DE';
  document.querySelectorAll('[data-de][data-en]').forEach(el => {
    el.textContent = el.dataset[lang];
  });
});

menuToggle?.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

document.querySelectorAll('#mainNav a').forEach(link => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
});

window.addEventListener('scroll', () => {
  document.getElementById('siteHeader')?.classList.toggle('scrolled', window.scrollY > 40);
});
