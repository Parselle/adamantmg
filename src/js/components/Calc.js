export default class Calc {

  constructor(obj) {
    this.obj = obj;
    this.startSteps = this.obj.querySelectorAll('.js-calc-start');
    this.endSteps = this.obj.querySelectorAll('.js-calc-end');
    this.steps = this.obj.querySelectorAll('.js-calc-step');
    this.stepsInputs = this.obj.querySelectorAll('.js-calc-input');

    this.startBtn = this.obj.querySelector('.js-calc-startBtn');
    this.endBtn = this.obj.querySelector('.js-calc-endBtn');
    this.stepBtns = this.obj.querySelectorAll('.js-calc-stepBtn');

    this.data = {};
    this.resultInputs = this.obj.querySelectorAll('.js-calc-resultInput');
    this.form = this.obj.querySelector('.js-calc-form');

    this.curStep = 0;
  }

  startTest() {
    this.startSteps.forEach(item => {
      item.classList.remove('active');
    });

    this.steps[0].classList.add('active');
  }

  endTest() {
    this.steps[this.curStep].classList.remove('active');

    this.calcResult();

    this.endSteps.forEach(item => {
      item.classList.add('active');
    });
  }

  fillData() {
    this.stepsInputs.forEach(item => {
      this.data[item.getAttribute('id')] = null;
    });
  }

  calcResult() {
    const results = {};

    this.resultInputs.forEach(item => {
      results[item.getAttribute('id')] = null;
    });

    let {
      p1_a2,
      p1_b2=100,
      p1_c2,
      p1_e2,
      p1_g2,
      p1_a4,
      p1_c4,
      p1_g4,
      p1_c6
    } = this.data;

    results['p1_d4'] = Math.floor(p1_c4 * p1_b2 / 100);
    results['p1_e4'] = Math.ceil(results['p1_d4'] * p1_c2 / 100);
    results['p1_f4'] = Math.ceil(results['p1_e4'] * p1_e2 / 100);
    results['p1_d6'] = Math.ceil(results['p1_d4'] * p1_a2);
    results['p1_d2'] = Math.floor(results['p1_d4'] * p1_a2 / results['p1_e4']);
    results['p1_f2'] = Math.floor(results['p1_d2'] / p1_e2 * 100);
    results['p1_b4'] = Math.floor(results['p1_f2'] * 1 + p1_g2 / results['p1_f4'] + p1_a4 / results['p1_f4']);
    results['p1_a6'] = Math.ceil(results['p1_f4'] * p1_g4);
    results['p1_b6'] = Math.ceil(results['p1_a6'] * 1 - (p1_g2 * 1 + p1_a4 * 1 + results['p1_f2'] * 1 + p1_c6 * 1 + results['p1_d6'] * 1));

    for(let key in results) {
      this.obj.querySelector(`#${key}`).value = +results[key];
    }

  }

  nextStep() {
    const stepValue = this.stepsInputs[this.curStep].value;
    const stepInputId = this.stepsInputs[this.curStep].getAttribute('id');
    if(stepValue == '') {
      alert('Введите значение!');
      return false;
    } else this.data[stepInputId] = Number(stepValue.toString().replace(/,/g, '.'));

    if(this.curStep == this.steps.length - 1) return false;

    this.steps[this.curStep].classList.remove('active');
    this.steps[++this.curStep].classList.add('active');
  }

  writeData() {
    let message = '';

    this.stepsInputs.forEach(item => {
      const name = item.getAttribute('data-calc');
      const value = item.value;

      if(value.length != 0) {
        message += name + value + '; ';
      }
    });

    this.resultInputs.forEach(item => {
      const name = item.getAttribute('data-calc');
      const value = item.value;

      if(value.length != 0) {
        message += name + value + '; ';
      }
    });

    this.form.elements['Lead[data]'].value = message;
  }

  run() {

    this.fillData();

    this.startBtn.addEventListener('click', () => {
      this.startTest();
    });

    this.endBtn.addEventListener('click', () => {
      this.endTest();
    });

    this.stepBtns.forEach(item => {
      item.addEventListener('click', () => {
        this.nextStep();
      });
    });

    this.form.addEventListener('submit', (e) => {
      this.writeData();
      e.target.submit();
    });

  }
}