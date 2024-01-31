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
      scrub: true,
    },
  });

  gsap.to('.layer-3, .layer-5, .layer-6', {
    y: 200,
    opacity: 1,
    scrollTrigger: {
      trigger: '.header',
      start: '100 top',
      end: 'bottom top',
      scrub: true,
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
      scrub: true,
    },
  });

  // Services
  gsap.from('.services__item', {
    opacity: 0,
    y: 100,
    stagger: 0.4,
    scrollTrigger: {
      trigger: '.services__content',
      start: '150 bottom',
    },
  });

  // consultation
  gsap.from('.consultation', {
    opacity: 0,
    y: 100,
    scrollTrigger: {
      trigger: '.consultation',
      start: '150 bottom',
    },
  });

  // about us
  gsap.from('.about', {
    opacity: 0,
    duration: 1.3,
    scrollTrigger: {
      trigger: '.about',
      start: '150 bottom',
    },
  });

  gsap.from('.about__item', {
    opacity: 0,
    x: 100,
    stagger: 0.4,
    scrollTrigger: {
      trigger: '.about',
      start: '30% bottom',
    },
  });

  // contacts
  gsap.from('.contacts__header', {
    opacity: 0,
    y: 100,
    scrollTrigger: {
      trigger: '.contacts',
      start: '25% bottom',
    },
  });

  gsap.from('.contacts__item', {
    opacity: 0,
    x: 100,
    stagger: 0.5,
    scrollTrigger: {
      trigger: '.contacts',
      start: '40% bottom',
      markers: true,
    },
  });
}
