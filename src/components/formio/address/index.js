'use strict';
import BaseComponent from '../base';

class AddressComponent extends BaseComponent {
  constructor (component, data, options) {
    super(component, data, options);
  }

  formatValue () {
    if (this._value === null) {
      return this.emptyValue();
    }
    return typeof this._value === 'object' ? this._value.formatted_address : this._value;
  }
}

export default AddressComponent;
