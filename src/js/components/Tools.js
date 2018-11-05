import SmoothScroll from 'smooth-scroll';

export default class Tools {
  constructor() {
    this.tools = document.querySelector('.js-tools');
    this.items = this.tools.querySelectorAll('.js-tools-item');
    this.headers = this.tools.querySelectorAll('.js-tools-header');
  }

  hideAll() {
    this.items.forEach((item) => {
      item.querySelector('.js-tools-header').classList.remove('active');
      item.querySelector('.js-tools-article').classList.remove('active');
    });
  }
  
  showItem(item) {
    this.hideAll();
    item.querySelector('.js-tools-header').classList.add('active');
    item.querySelector('.js-tools-article').classList.add('active');

    let scroll = new SmoothScroll();
    let anchor = this.tools.querySelector('#' + item.getAttribute('id'));
    setTimeout(() => {
      scroll.animateScroll(anchor, {}, {
        speed: 800,
        easing: 'easeInOutCubic',
        ignore: 'a[data-scroll-ignore]',
        offset: 140
      });
    }, 1000);
  }

  run() {
    this.headers.forEach((item) => {
      item.addEventListener('click', (e) => {
        let target = e.target;
        this.showItem(target.parentNode);
      });
    });
  }

}