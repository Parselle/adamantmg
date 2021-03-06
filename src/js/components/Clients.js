'use strict';

export default class Clients {
  constructor() {
    this.clients = document.querySelector('.js-clients');
    this.clientsItems = this.clients.querySelectorAll('.js-clients-item');
    this.clientsBtn = this.clients.querySelector('.js-clients-btn');
  }

  _showAll() {
    this.clientsItems.forEach((item) => {
      item.classList.remove('hidden');
    });

    this.clientsBtn.classList.add('hidden');
  }

  

  run() {
    this.clientsBtn.addEventListener('click', () => {
      this._showAll();
    });
  }
}
