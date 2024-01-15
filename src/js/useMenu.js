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

  headerNav.addEventListener('click', (event) => {
    if (event.target.classList.contains('nav__link')) {
      gsap.to(event.target, {
        duration: 0.5,
        scale: 2.5,
        opacity: 0,
        ease: 'power1.inOut',
        onComplete: () => {
          gsap.to(event.target, { duration: 0, scale: 1, opacity: 1 });
        },
      });

      clouseMenu();
    }
  });
  logo.addEventListener('click', clouseMenu);
}
