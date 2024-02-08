import { gsap } from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export default function useAnimation() {
  gsap.to('.layer-2', {
    y: 200,
    opacity: 1,
    scrollTrigger: {
      trigger: '.header',
      start: '100 top',
      end: 'bottom top',
      scrub: 1,
    },
  });

  gsap.to('.layer-3, .layer-5, .layer-6', {
    y: 200,
    opacity: 1,
    scrollTrigger: {
      trigger: '.header',
      start: '100 top',
      end: 'bottom top',
      scrub: 1,
    },
  });

  gsap.to('.layer-4', {
    y: 200,
    opacity: 1,
    translateZ: 360,
    scrollTrigger: {
      trigger: '.header',
      start: '100 top',
      end: '125% top',
      scrub: 1,
    },
  });

  // Services
  gsap.from('.services__item', {
    autoAlpha: 0,
    y: 100,
    stagger: 0.4,
    scrollTrigger: {
      trigger: '.services__content',
      start: 'top 80%',
      end: 'bottom bottom',
      scrub: 2,
    },
  });

  // process

  gsap.from('.process__item', {
    autoAlpha: 0,
    x: 100,
    stagger: 0.4,
    scrollTrigger: {
      trigger: '.process__content',
      start: 'top 80%',
      end: 'bottom bottom',
      scrub: 1,
    },
  });

  // consultation
  const tlConsultation = gsap.timeline({
    scrollTrigger: {
      trigger: '.consultation',
      start: 'top 90%',
      // toggleActions: 'play none none reset',
    },
  });
  tlConsultation
    .from('.form__group', {
      opacity: 0,
      x: 200,
      stagger: 0.4,
    })
    .from('.form__checkbox', {
      opacity: 0,
      x: 200,
    })
    .from('.form__btn', {
      scaleY: 0,
    });

  // about us

  gsap.from('.about__item', {
    opacity: 0,
    x: 100,
    stagger: 0.4,
    scrollTrigger: {
      trigger: '.about',
      start: '30% bottom',
      // toggleActions: 'play none none reset',
    },
  });

  // contacts

  gsap.from('.contacts__item', {
    opacity: 0,
    x: 100,
    stagger: 0.5,
    scrollTrigger: {
      trigger: '.contacts',
      start: '40% bottom',
      // toggleActions: 'play none none reset',
    },
  });
}
