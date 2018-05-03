'use strict';
import _ from 'lodash';
import BaseComponent from '../base';

class RadioComponent extends BaseComponent {
  constructor (component, data, options) {
    super(component, data, options);
  }

  formatValue () {
    if (this._value === null) {
      return this.emptyValue();
    }
    let item = _.find(this.values, (o) => {
      return o.value === this._value;
    });

    return item ? item.label : this._value;
  }
}

export default RadioComponent;
