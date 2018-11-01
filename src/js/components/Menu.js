'use strict';

export default class Menu {
  constructor() {
    this.header = document.querySelector('.js-header');
    this.menu = this.header.querySelector('.js-menu');
    this.menuItems = this.menu.querySelectorAll('.js-menu-item');
    this.menuBtn = this.header.querySelector('.js-menu-btn');
    this.open = false;
  }

  _open() {
    this.menu.classList.add('active');
    this.menuBtn.classList.add('active');
    this.open = true;
  }

  _close() {
    this.menu.classList.remove('active');
    this.menuBtn.classList.remove('active');
    this.open = false;
  }

  _toggle() {
    this.open ? this._close() : this._open();
  }

  _toggleScroll() {
    if (window.pageYOffset >= 1) this.header.classList.add('scroll');
    else this.header.classList.remove('scroll');
  }

  run() {
    this.menuBtn.addEventListener('click', () => {
      this._toggle();
    });

    this.menuItems.forEach((item) => {
      item.addEventListener('click', (e) => {
        let target = e.target;
        this.menuItems.forEach((item) => {
          item.classList.remove('active');
        });
        target.classList.add('active');
        this._close();
      });
    });

    this._toggleScroll();

    window.addEventListener('scroll', () => {
      this._toggleScroll();
    });  
  
  }
}
