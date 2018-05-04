import _ from 'lodash';
import BaseComponent from '../base';

class TextFieldComponent extends BaseComponent {
  constructor (component, data, options) {
    super(component, data, options);
  }

  formatValue () {
    if (_.isEmpty(this._value)) {
      return this.emptyValue();
    }
    return _.isString(this._value) ? this._value : this._value.toString();
  }
}

export default TextFieldComponent;
