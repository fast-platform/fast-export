'use strict';
import BaseComponent from '../base';

class NumberComponent extends BaseComponent {
  constructor (component, data, options) {
    super(component, data, options);
  }

  formatValue () {
    if (this._value === null) {
      return BaseComponent.emptyValue;
    }
    return this._value.toLocaleString();
  }
}

export default NumberComponent;
