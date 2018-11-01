'use strict';

export default class Clients {
  constructor() {
    this.clients = document.querySelector('.js-clients');
    this.clientsItems = this.clients.querySelectorAll('.js-clients-item');
    this.clientsBtn = this.clients.querySelector('.js-clients-btn');
  }

  _hideOverflow() {
    this.clientsItems.forEach((item, index) => {
      if (index > 5) item.classList.add('hidden');
    });
  }

  _showAll() {
    this.clientsItems.forEach((item) => {
      item.classList.remove('hidden');
    });

    this.clientsBtn.remove();
  }

  

  run() {
    this._hideOverflow();

    this.clientsBtn.addEventListener('click', () => {
      this._showAll();
    });
  }
}
