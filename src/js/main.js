import 'the-new-css-reset/css/reset.css';
import '../styles/style.css';

import useMenu from './useMenu';
import animationHero from './animationHero';
import useForm from './form';
import useAnimation from './useAnimation';

useAnimation();
useMenu();
animationHero();
useForm();

const year = document.querySelector('.year');
const currentYear = new Date().getFullYear();
year.innerHTML = currentYear;
