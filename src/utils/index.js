'use strict';
import _ from 'lodash';

export default class FormioExportUtils {

  /**
   * Verifies an object properties.
   *
   * @static
   * @param {Object} obj the object to verify
   * @param {Object} props the properties to be verified
   * @returns {Object} the verified object
   * @memberof FormioExportUtils
   */
  static verifyProperties (obj, props) {
    // verify arguments
    props = _.isPlainObject(props) ? props : {};
    obj = _.isPlainObject(obj) ? obj : {};

    // verify each property
    _.forEach(props, (prop, key) => {
      // check if there is any default value defined
      if (prop.hasOwnProperty('default') && !obj.hasOwnProperty(key)) {
        // set default property value
        obj[key] = prop.default;
      }
      // check if the property is required and defined
      if (prop.required && _.isNil(obj[key])) {
        // if not defined, throw error
        throw new Error(`[FormioExportUtils] invalid property (${key} is required)`);
      }
      // check that the property type is valid (defined by constructors)
      if (prop.hasOwnProperty('type') && obj.hasOwnProperty(key)) {
        // check if property has a valid type
        let found = !!_.find(_.isArray(prop.type) ? prop.type : [prop.type], (type) => {
          return FormioExportUtils.isOfType(obj[key], type);
        });

        // check if there has been a match
        if (!found) {
          // if no match found, throw error
          throw new Error(`[FormioExportUtils] invalid property (${key} type is invalid)`);
        }
      }
    });
    // return the verified object
    return obj;
  }

  static isOfType (obj, type) {
    switch (type) {
      case null:
        return _.isNull(obj);
      case undefined:
        return _.isUndefined(obj);
      case String:
        return _.isString(obj);
      case Number:
        return _.isNumber(obj);
      case Boolean:
        return _.isBoolean(obj);
      case Array:
        return _.isArray(obj);
      case Object:
        return _.isPlainObject(obj);
      case Element:
        return _.isElement(obj) || (_.isObject(obj) && obj.nodeType > 0);
      case Function:
        return _.isFunction(obj);
      case Date:
        return _.isDate(obj);
      case RegExp:
        return _.isRegExp(obj);
      case Error:
        return _.isError(obj);
      case Symbol:
        return _.isSymbol(obj);
      default:
        console.warn('[FormioExportUtils] type not implemented');
        return false;

    }
  }

  /**
   * Check if an object is a valid Formio form
   *
   * @static
   * @param {Object} [obj={}] The object to check
   * @returns {Boolean} Is valid Formio form
   * @memberof FormioExportUtils
   */
  static isFormioForm (obj = {}) {
    return _.isPlainObject(obj) && _.isArray(obj.components) && obj.display === 'form';
  }

  /**
   * Check if an object is a valid Formio wizard
   *
   * @static
   * @param {Object} [obj={}] The object to check
   * @returns {Boolean} Is valid Formio wizard
   * @memberof FormioExportUtils
   */
  static isFormioWizard (obj = {}) {
    return _.isPlainObject(obj) && _.isArray(obj.components) && obj.display === 'wizard';
  }

  /**
   * Check if an object is a valid Formio submission
   *
   * @static
   * @param {Object} [obj={}] The object to check
   * @returns {Boolean} Is valid Formio submission
   * @memberof FormioExportUtils
   */
  static isFormioSubmission (obj = {}) {
    return _.isPlainObject(obj) && _.isPlainObject(obj.data);
  }

  /**
   * Creates a DOM element with optional attributes and children elements.
   *
   * @static
   * @param {String} tag The DOM element tag name
   * @param {any} args The DOM element attributes and / or children nodes
   * @returns {Element} The DOM element
   * @memberof Html2PdfUtils
   */
  static createElement (tag, ...args) {
    let el = document.createElement(tag);
    let attributes = {};

    // check if there are attributes defined
    if (!!args[0] && typeof args[0] === 'object') {
      attributes = args[0];
      // ...and remove them from args
      args = args.slice(1);
    }
    // check if HTML style is defined as object
    if (!!attributes.style && typeof attributes.style === 'object') {
      // transform the style object into string
      attributes.style = _.map(attributes.style, (value, key) => {
        return `${key}:${value}`;
      }).join(';');
    }
    // check if innerHTML is defined
    if (attributes.hasOwnProperty('innerHTML')) {
      // ...and delete the original innerHTML property
      el.innerHTML = attributes.innerHTML;
      delete attributes.innerHTML;
    } else {
      // create HTML element with supplied attributes and children (if any)
      _.forEach(args, (arg) => {
        if (_.isString(arg)) {
          el.appendChild(document.createTextNode(arg));
        } else if (_.isElement(arg) || (_.isObject(arg) && arg.nodeType > 0)) {
          el.appendChild(arg);
        }
      });
    }

    _.forEach(attributes, (value, key) => {
      el.setAttribute(key, value);
    });
    // return the created HTML element
    return el;
  }
}
