export default class Asteroids {
  constructor(options) {
    let {
      element,
      speed = 10,
      percent = 0.01,
      min = -10,
      max = 10,
      direction = true
    } = options;

    Object.assign(this, {
      _element: element,
      _speed: speed,
      _percent: percent,
      _min: min,
      _max: max,
      _direction: direction
    });

    this._rotate();
  }

  _rotate() {
    let angle = 0;

    function rotate() {
      this._direction ? angle += this._percent : angle -= this._percent;

      if (angle > this._max) {
        this._direction = false;
      }

      if (angle < this._min) {
        this._direction = true;
      }

      this._element.style.transform = `rotate(${angle}deg)`;
    }

    setInterval(rotate.bind(this), this._speed);
  }
}
