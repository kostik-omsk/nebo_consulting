import { gsap } from 'gsap-trial';

export default function animationHero() {
  const hero = document.querySelector('.header__hero');

  hero.style.setProperty('--mouse-x', `0deg`);
  hero.style.setProperty('--mouse-y', `0deg`);

  gsap.from('.layer-3', {
    y: 150,
    delay: 0.2,
    duration: 1.5,
  });

  gsap.from('.layer-4', {
    y: 220,
    opacity: 0,
    delay: 2,
    duration: 2,
    ease: 'power2.out',
  });

  gsap.from('.layer-5', {
    y: 150,
    delay: 0.7,
    duration: 1.5,
  });

  gsap.from('.layer-6', {
    y: 150,
    delay: 1.3,
    duration: 1.5,
  });

  gsap.from('.layer-7', {
    scale: 0.2,
    opacity: 0,
    delay: 1,
    duration: 3,
    ease: 'power1.out',
  });

  hero.addEventListener('mousemove', (event) => {
    const elementRect = hero.getBoundingClientRect();
    // Вычисление центра элемента
    const elementCenterX = elementRect.left + elementRect.width / 2;
    const elementCenterY = elementRect.top + elementRect.height / 2;

    const targetX = (event.clientX - elementCenterX) * -0.005;
    const targetY = (event.clientY - elementCenterY) * 0.01;

    hero.style.setProperty('--mouse-x', `${targetX}deg`);
    hero.style.setProperty('--mouse-y', `${targetY}deg`);
  });

  hero.addEventListener('mouseleave', () => {
    hero.style.setProperty('--mouse-x', '0deg');
    hero.style.setProperty('--mouse-y', '0deg');
  });
}
