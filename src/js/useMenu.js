import { gsap } from 'gsap-trial';

export default function useMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const headerNav = document.querySelector('.header__nav');
  const logo = document.querySelector('.logo__link');

  const tl = gsap.timeline();

  function openMenu() {
    headerNav.classList.add('menu-opened');
    document.body.classList.add('no-scroll');
    tl.from('.nav__item', {
      opacity: 0,
      y: -20,
      duration: 0.2,
      stagger: 0.1,
    });
  }
  function clouseMenu() {
    menuToggle.checked = false;
    headerNav.classList.remove('menu-opened');
    document.body.classList.remove('no-scroll');
  }

  menuToggle.addEventListener('change', () => {
    if (menuToggle.checked) {
      openMenu();
    } else {
      clouseMenu();
    }
  });

  headerNav.addEventListener('click', clouseMenu);
  logo.addEventListener('click', clouseMenu);
}
