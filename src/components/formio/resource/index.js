'use strict';
import _ from 'lodash';
import FormioUtils from 'formiojs/utils';
import SelectComponent from '../select';

class ResourceComponent extends SelectComponent {
  constructor (component, data, options) {
    super(component, data, options);
  }

  formatValues () {
    if (!this._value) {
      return this.emptyValue();
    }
    let values = [];

    _.forEach(this._value, (value) => {
      values.push(this.formatValue(value));
    });
    return values;
  }

  formatValue (value) {
    if (value === null) {
      return this.emptyValue();
    }
    if (typeof value === 'object') {
      return FormioUtils.interpolate(this.template, { item: value });
    }
    return value;
  }
}

export default ResourceComponent;
