'use strict';
import _ from 'lodash';
import BaseComponent from '../base';

class DateTimeComponent extends BaseComponent {
  constructor (component, data, options) {
    super(component, data, options);
  }

  formatValue () {
    if (_.isNil(this._value)) {
      return this.emptyValue();
    }
    return typeof this._value === 'string' ? this._value.replace('T', ' ').split('.')[0] + ' UTC' : this._value;
  }
}

export default DateTimeComponent;
