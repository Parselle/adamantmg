import SmoothScroll from 'smooth-scroll'; //https://github.com/cferdinandi/smooth-scroll#readme
import InputMask from './base/InputMask';
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