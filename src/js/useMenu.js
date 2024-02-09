import { gsap } from 'gsap-trial';

export default function useMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const headerNav = document.querySelector('.header__nav');

  const tl = gsap.timeline();

  function openMenu() {
    headerNav.classList.add('menu-opened');
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
  }

  menuToggle.addEventListener('change', () => {
    if (menuToggle.checked) {
      openMenu();
    } else {
      clouseMenu();
    }
  });

  headerNav.addEventListener('click', (event) => {
    if (event.target.classList.contains('nav__link')) {
      clouseMenu();
    }
  });
}
