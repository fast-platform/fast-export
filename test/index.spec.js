import chai from 'chai';
import FormioExport from '../lib/formio-export.js';

import form from './samples/form.json';
import submission from './samples/submission.json';

chai.expect();

const expect = chai.expect;

let lib;

describe('Given an instance of FormioExport class', () => {
  before(() => {
    lib = new FormioExport(form, submission, {});
  });
  describe('when I need the constructor name', () => {
    it('should return the name', () => {
      expect(lib.constructor.name).to.be.equal('FormioExport');
    });
  });

  describe('when I need the formio component', () => {
    it('should return the component', () => {
      expect(lib.component.type).to.be.equal(form.type);
    });
  });

  describe('when I need the formio component\'s data', () => {
    it('should return the component\' data', () => {
      expect(lib.data).to.be.equal(submission.data);
    });
  });
});
