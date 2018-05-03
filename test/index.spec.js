import chai from 'chai';
import FormioExport from '../lib/formio-export.js';

chai.expect();

const expect = chai.expect;

let lib;

describe('Given an instance of FormioExport library', () => {
  before(() => {
    lib = new FormioExport();
  });
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('FormioExport');
    });
  });
});
