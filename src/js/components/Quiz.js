export default class Quiz {

  constructor(obj) {
    this.obj = obj;
    this.inputs = this.obj.querySelectorAll('.js-quiz-input[required]');
    this.form = this.obj.querySelector('.js-quiz-formResult');
  }

  checkQuizInputs(inputs = this.inputs) {
    for(let i=0; i<inputs.length; i++) {
      if(inputs[i].value == '' && inputs[i].value.length < 2) {
        alert('Заполните обязательные поля!');
        return false;
      }

      let tempValue = inputs[i].value;
      tempValue.split(' ').join();

      if(tempValue.indexOf('http') > -1) {
        alert('Нельзя вводить ссылки!');
        return false;
      }
    }

    return true;
  }

  checkFormInputs() {
    const form = this.form;
    const digits_reg = new RegExp('[^0-9]', 'g');

    let nameInput = form.elements['Lead[name]'];
    if (nameInput.value == '' && nameInput.value.length < 2) {
      alert('Имя указано неверно!');
      return false;
    }

    let phoneInput = form.elements['Lead[phone]'];
    let phoneInputValue = phoneInput.value.replace(digits_reg, '');
    if (
      phoneInputValue == '' ||
      phoneInputValue.length < 11 ||
      phoneInputValue.length > 11
    ) {
      alert(
        'Телефон указан неверно! Должен сождержать 11 цифр. Пример: +7(912)345-67-89 или городской с кодом города +7(495)123-45-67'
      );
      return false;
    } else {
      phoneInput.value = phoneInputValue;
    }

    return true;
  }

  writeData() {
    let message = '';

    this.obj.querySelectorAll('.js-quiz-input').forEach(item => {
      const name = item.getAttribute('data-quiz');
      const value = item.value;

      if(value.length != 0) {
        message += name + ' - ' + value + '; ';
      }
    });

    this.form.elements['Lead[data]'].value = message;
  }

  run() {
    
    this.form.addEventListener('submit', (e) => {
      if(this.checkFormInputs() && this.checkQuizInputs()) {
        this.writeData();
        e.target.submit();
      } else {
        e.preventDefault();
      }
    });

  }
}