import 'the-new-css-reset/css/reset.css';
import '../styles/style.css';
import { gsap } from 'gsap-trial';
import useMenu from './useMenu';
import animationHero from './animationHero';
import useForm from './useForm';
import useAnimation from './useAnimation';

const mm = gsap.matchMedia();

mm.add('(min-width: 768px)', () => {
  // desktop setup code here...
  animationHero();
});
useAnimation();
useMenu();
useForm();

const year = document.querySelector('.year');
const currentYear = new Date().getFullYear();
year.innerHTML = currentYear;
