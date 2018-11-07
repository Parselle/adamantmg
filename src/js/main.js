import SmoothScroll from 'smooth-scroll'; //https://github.com/cferdinandi/smooth-scroll#readme
import InputMask from './base/InputMask';
import Menu from './components/Menu';
import './components/Particles';
import Asteroids from './components/Asteroids';
import Clients from './components/Clients';
import Modal from './components/Modal';
import Tools from './components/Tools';
import Team from './components/Team';
import Tabs from './components/Tabs';

let preloader = document.querySelector('.js-preloader');

window.onload = function() {

  setTimeout(() => {
    preloader.remove();
    document.body.classList.remove('active');
  }, 750);

  new SmoothScroll('*[href*="#"]', {
    speed: 800,
    easing: 'easeInOutCubic',
    ignore: 'a[data-scroll-ignore]',
    offset: 67
  });

  new InputMask().run();

  new Menu().run();

  let particles = document.querySelector('#particles-js');
  if (particles) {
    particlesJS.load('particles-js', 'media/Particles.config.json', function() {
      console.log('callback - particles.js config loaded');
    });
  }

  let asteroid1 = document.querySelector('.js-asteroids-outer');
  let asteroid2 = document.querySelector('.js-asteroids-inner');
  if (asteroid1 && asteroid1) {
    new Asteroids({
      element: asteroid1,
      max: 5,
      min: -15,
      speed: 10,
      direction: true
    });
    
    new Asteroids({
      element: asteroid2,
      max: 10,
      min: -10,
      speed: 15,
      direction: false
    });
  }

  let clients = document.querySelector('.js-clients');
  if (clients) {
    new Clients().run();
  }

  let tools = document.querySelector('.js-tools');
  if (tools) {
    new Tools().run();
  }

  let team = document.querySelector('.js-team');
  if (team) {
    new Team().run();
  }

  let tabs = document.querySelector('.js-tabs');
  if (tabs) {
    new Tabs().run();
  }

  // document.querySelectorAll('.js-slider').forEach((item) => {
  //   new Slider(item).run();
  // });

  // document.querySelectorAll('.js-timer').forEach((item) => {
  //   new Timer(item).run();
  // });

  // document.querySelectorAll('.js-counter').forEach((item) => {
  //   new Counter(item).run();
  // });

  new Modal().run();
  
};