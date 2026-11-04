const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
function closeMenu() { menu.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'باز کردن منو'); }
toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') === 'true'; menu.classList.toggle('open', !open); toggle.setAttribute('aria-expanded', String(!open)); toggle.setAttribute('aria-label', open ? 'باز کردن منو' : 'بستن منو'); });
menu.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { closeMenu(); toggle.focus(); } });
