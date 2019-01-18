import IMask from 'imask'; //https://unmanner.github.io/imaskjs/

export default class InputMask {
  constructor() {
    this.rules = {
      'name': {mask: /[А-Яа-я]$/},
      'phone': {mask: '+{7} (000) 000 - 00 - 00'},
      'height': {mask: '000'},
      'weight': {mask: '000'},
      'age': {mask: '00'},
      'number': {
        mask: Number,
        min: -10000,
        max: 1000000,
        thousandsSeparator: '',
        scale: 2
      },
      '500' : {
        mask: Number,
        min: 500,
        max: 1000000,
        thousandsSeparator: '',
        scale: 2
      },
      '700' : {
        mask: Number,
        min: 700,
        max: 1000000,
        thousandsSeparator: '',
        scale: 2
      },
      '50000' : {
        mask: Number,
        min: 50000,
        max: 1000000,
        thousandsSeparator: '',
        scale: 2
      },
      '20%' : {
        mask: Number,
        min: 20,
        max: 100,
      },
      '30%' : {
        mask: Number,
        min: 30,
        max: 100,
      }
    };
  }

  run() {
    for (let type in this.rules) {
      let inputs = document.querySelectorAll(`input[data-mask="${type}"]`);
      if (inputs) {
        inputs.forEach((input) => {
          new IMask(input, this.rules[type]);
        });
      }
    }
  }

}