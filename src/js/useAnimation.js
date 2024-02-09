import { gsap } from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export default function useAnimation() {
  gsap.to('.layer-2', {
    y: 200,
    autoAlpha: 1,
    scrollTrigger: {
      trigger: '.header',
      start: '100 top',
      end: 'bottom top',
      scrub: 1,
    },
  });

  gsap.to('.layer-3, .layer-5, .layer-6', {
    y: 200,
    autoAlpha: 1,
    scrollTrigger: {
      trigger: '.header',
      start: '100 top',
      end: 'bottom top',
      scrub: 1,
    },
  });

  gsap.to('.layer-4', {
    y: 200,
    autoAlpha: 1,
    translateZ: 360,
    scrollTrigger: {
      trigger: '.header',
      start: '100 top',
      end: '125% top',
      scrub: 1,
    },
  });

  const tl = gsap.timeline({ ease: 'power2.out' });

  tl.from('.layer-4', {
    delay: 0.3,
    y: 220,
    autoAlpha: 0,
    duration: 1.8,
  });

  tl.from(
    '.layer-7',
    {
      scale: 0.2,
      autoAlpha: 0,
      duration: 3,
    },
    '<',
  );

  // Services
  const services = gsap.utils.toArray('.services__item');

  services.forEach((service) => {
    gsap.from(service, {
      autoAlpha: 0,
      y: 100,
      scrollTrigger: {
        trigger: service,
        start: 'top bottom',
      },
    });
  });

  // process
  const processItems = gsap.utils.toArray('.process__item');

  processItems.forEach((item) => {
    gsap.from(item, {
      autoAlpha: 0,
      x: 100,
      scrollTrigger: {
        trigger: item,
        start: 'top 90%',
      },
    });
  });

  // consultation
  const tlConsultation = gsap.timeline({
    scrollTrigger: {
      trigger: '.consultation ',
      start: '100 90%',
      toggleActions: 'play none none reset',
    },
  });

  tlConsultation
    .from('.form__group', {
      autoAlpha: 0,
      x: 200,
      stagger: 0.3,
    })
    .from('.form__checkbox', {
      autoAlpha: 0,
      x: 200,
    })
    .from('.form__btn', {
      scaleY: 0,
    });

  // about us
  gsap.from('.about__item', {
    autoAlpha: 0,
    x: 100,
    stagger: 0.4,
    scrollTrigger: {
      trigger: '.about',
      start: '30% bottom',
    },
  });

  // contacts
  gsap.from('.contacts__item', {
    autoAlpha: 0,
    x: 100,
    stagger: 0.5,
    scrollTrigger: {
      trigger: '.contacts',
      start: '40% bottom',
    },
  });
}
