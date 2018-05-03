'use strict';
import _ from 'lodash';
import FormioExportUtils from 'formio-export/utils';

export default (element, component) => {
  if (component && component.input) {
    let componentElement = FormioExportUtils.createElement('div', {
      class: `formio-component ${component.type}-component`,
      id: Math.random().toString(36).substring(7)
    });

    let labelElement = FormioExportUtils.createElement('div', {
      class: 'col col-sm-3 component-label'
    }, component.label);
    let valueElement = FormioExportUtils.createElement('div', {
      class: 'col col-sm-9 component-value'
    });

    _.forEach(component._value, (file) => {
      if (_.isObject(file)) {
        if (file.type.indexOf('image/') === 0) {
          valueElement.appendChild(FormioExportUtils.createElement('img', { src: file.url, class: 'img-responsive' }));
        } else {
          valueElement.innerHTML = `${file.name} (${file.size / 1024} KB)`;
        }
      }
    });

    componentElement.appendChild(labelElement);
    componentElement.appendChild(valueElement);

    if (_.isElement(element)) {
      element.appendChild(componentElement);
    }
    return componentElement;
  }
  return null;
};
