export default function animationHero() {
  const hero = document.querySelector('.hero');
  let animationFrameId;

  function animateValues(targetX, targetY) {
    // Получаем текущие значения из стилей элемента
    const currentX = parseFloat(
      getComputedStyle(hero).getPropertyValue('--mouse-x'),
    );
    const currentY = parseFloat(
      getComputedStyle(hero).getPropertyValue('--mouse-y'),
    );

    // Рассчитываем изменение координат для анимации
    const deltaX = (targetX - currentX) * 0.1;
    const deltaY = (targetY - currentY) * 0.1;

    // Плавная анимация, пока изменения значительны
    if (Math.abs(deltaX) > 0.1 || Math.abs(deltaY) > 0.1) {
      hero.style.setProperty('--mouse-x', `${currentX + deltaX}deg`);
      hero.style.setProperty('--mouse-y', `${currentY + deltaY}deg`);

      // Запускаем следующий кадр анимации
      animationFrameId = requestAnimationFrame(() =>
        animateValues(targetX, targetY),
      );
    } else {
      // Когда изменения незначительны, устанавливаем окончательные значения
      hero.style.setProperty('--mouse-x', `${targetX}deg`);
      hero.style.setProperty('--mouse-y', `${targetY}deg`);
    }
  }

  hero.addEventListener('mousemove', (event) => {
    if (animationFrameId !== undefined) {
      cancelAnimationFrame(animationFrameId);
    }
    const elementRect = hero.getBoundingClientRect();
    // Вычисление центра элемента
    const elementCenterX = elementRect.left + elementRect.width / 2;
    const elementCenterY = elementRect.top + elementRect.height / 2;

    const targetX = (event.clientX - elementCenterX) * -0.005;
    const targetY = (event.clientY - elementCenterY) * 0.01;

    animateValues(targetX, targetY);
  });

  hero.addEventListener('mouseleave', () => {
    if (animationFrameId !== undefined) {
      cancelAnimationFrame(animationFrameId);
    }
    hero.style.setProperty('--mouse-x', '0deg');
    hero.style.setProperty('--mouse-y', '0deg');
    hero.style.setProperty('--transition-duration', '0.3s');
  });

  hero.addEventListener('mouseenter', () => {
    hero.style.setProperty('--transition-duration', '0.0s');
  });
}
