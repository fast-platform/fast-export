import chai from 'chai';
import FormioExport from '../lib/formio-export.js';

import form from './samples/form.json';
import submission from './samples/submission.json';

chai.expect();

const expect = chai.expect;

let lib;
let config = {
  component: form,
  submission: submission,
  formio: {

  }
};

describe('Given an instance of FormioExport library', () => {
  before(() => {
    lib = new FormioExport(null, null, config);
  });
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(lib.name).to.equal('FormioExport');
    });
  });
});
