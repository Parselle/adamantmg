import SmoothScroll from 'smooth-scroll'; //https://github.com/cferdinandi/smooth-scroll#readme
import InputMask from './base/InputMask';
import Menu from './components/Menu';
import './components/Particles';
import Asteroids from './components/Asteroids';
import Clients from './components/Clients';
// import Slider from './components/Slider';
// import Timer from './components/timer';
// import Counter from './components/Counter';
// import Modal from './components/Modal';

window.onload = function() {

  new SmoothScroll('a[href*="#"]', {
    speed: 800,
    easing: 'easeInOutCubic',
    ignore: 'a[data-scroll-ignore]'
  });

  new InputMask().run();

  new Menu().run();

  particlesJS.load('particles-js', 'media/Particles.config.json', function() {
    console.log('callback - particles.js config loaded');
  });

  new Asteroids({
    element: document.querySelector('.js-asteroids-outer'),
    max: 5,
    min: -15,
    speed: 10,
    direction: true
  });
  
  new Asteroids({
    element: document.querySelector('.js-asteroids-inner'),
    max: 10,
    min: -10,
    speed: 15,
    direction: false
  });

  new Clients().run();

  // document.querySelectorAll('.js-slider').forEach((item) => {
  //   new Slider(item).run();
  // });

  // document.querySelectorAll('.js-timer').forEach((item) => {
  //   new Timer(item).run();
  // });

  // document.querySelectorAll('.js-counter').forEach((item) => {
  //   new Counter(item).run();
  // });

  // new Modal().run();
  
};