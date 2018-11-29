export default class Tabs {
  constructor() {
    this.container = document.querySelector('.js-tabs');
    this.tabs = document.querySelectorAll('*[data-tab*="#"]');
    this.plates = document.querySelectorAll('.js-tabs-plates');
  }

  _hideTabs() {
    this.plates.forEach((item) => {
      item.classList.remove('active');
    });
  }

  _showTab(target) {
    let tab = this.container.querySelector(target.getAttribute('data-tab'));
    tab.classList.add('active');
  }

  run() {
    this.tabs.forEach((trigger) => {
      trigger.addEventListener('click', (e) => {
        this.tabs.forEach((item) => {
          item.classList.remove('active');
        });
        e.target.classList.add('active');
        this._hideTabs();
        this._showTab(e.target);
      });
    });
  }
}