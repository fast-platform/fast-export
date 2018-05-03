'use strict';
import BaseComponent from '../base';

class DayComponent extends BaseComponent {
  constructor (component, data, options) {
    super(component, data, options);
  }

  formatValue () {
    if (this._value === null) {
      return this.emptyValue();
    }
    if (typeof this._value === 'string') {
      let parts = this._value.split('/');

      if (this.dayFirst) {
        return [parts[2], parts[1], parts[0]].join('-');
      }
      return [parts[2], parts[0], parts[1]].join('-');
    }
    return this._value;
  }
}

export default DayComponent;
