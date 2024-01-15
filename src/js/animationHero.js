import { gsap } from 'gsap-trial';

export default function animationHero() {
  const hero = document.querySelector('.header__hero');

  hero.style.setProperty('--mouse-x', `0deg`);
  hero.style.setProperty('--mouse-y', `0deg`);

  gsap.from('.layer-3', {
    y: 120,
    opacity: 0.1,
    duration: 1.5,
  });
  gsap.from('.layer-4', {
    x: 120,
    opacity: 0.2,
    duration: 1,
  });
  gsap.from('.layer-5', {
    x: -120,
    opacity: 0.2,
    duration: 1.6,
  });
  gsap.from('.layer-6', {
    x: 180,
    opacity: 0.2,
    duration: 2,
  });
  gsap.from('.layer-7', {
    x: -150,
    opacity: 0.2,
    duration: 1.8,
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
