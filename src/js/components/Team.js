'use strict';

export default class Team {
  constructor() {
    this.team = document.querySelector('.js-team');
    this.view = this.team.querySelector('.js-team-view');
    this.btnBottom = this.team.querySelector('*[data-team-bottom]');
    this.btnTop = this.team.querySelector('*[data-team-top]');
    this.marginTop = 0;
    this.itemHeight = this.team.querySelector('.js-team-item').offsetHeight;
    this.viewHeight = this.view.offsetHeight;
    this.maxHeight = this.team.querySelector('.js-team-blocks').offsetHeight;
  }

  slideBottom() {
    if (this.marginTop >= -(this.viewHeight - this.maxHeight - 60)) {
      this.marginTop -= this.itemHeight;
      this.view.style.marginTop = `${this.marginTop}px`;
      if (this.marginTop <= -(this.viewHeight - this.maxHeight)) {
        this.team.classList.add('end');
      }
    } else {
      this.marginTop = -(this.viewHeight - this.maxHeight);
      this.view.style.marginTop = `${this.marginTop}px`;
      this.team.classList.add('end');
    }
  }

  slideTop() {
    if (this.marginTop < 0 - 60) {
      this.marginTop += this.itemHeight;
      this.view.style.marginTop = `${this.marginTop}px`;
      this.team.classList.remove('end');
    } else {
      this.marginTop = 0;
      this.view.style.marginTop = `${this.marginTop}px`;
    }
  }

  run() {
    this.btnBottom.addEventListener('click', () => {
      this.slideBottom();
    });
    
    this.btnTop.addEventListener('click', () => {
      this.slideTop();
    });
  }

}
