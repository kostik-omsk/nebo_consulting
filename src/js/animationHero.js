export default function animationHero() {
  const hero = document.querySelector('.header__hero');

  hero.style.setProperty('--mouse-x', `0deg`);
  hero.style.setProperty('--mouse-y', `0deg`);

  hero.addEventListener('mousemove', (event) => {
    const elementRect = hero.getBoundingClientRect();
    // Вычисление центра элемента
    const elementCenterX = elementRect.left + elementRect.width / 2;
    const elementCenterY = elementRect.top + elementRect.height / 2;

    const targetX = (event.clientX - elementCenterX) * -0.008;
    const targetY = (event.clientY - elementCenterY) * 0.016;

    hero.style.setProperty('--mouse-x', `${targetX}deg`);
    hero.style.setProperty('--mouse-y', `${targetY}deg`);
  });

  hero.addEventListener('mouseleave', () => {
    hero.style.setProperty('--mouse-x', '0deg');
    hero.style.setProperty('--mouse-y', '0deg');
  });
}
