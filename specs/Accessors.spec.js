import { accessor, accessors } from 'index';
import Backbone from 'backbone';

describe('Decorators / Backbone / Accessors', () => {

  describe('accessor', () => {
    let model;

    class AccessorModel extends Backbone.Model {

      @accessor
      testProp;
    }

    beforeEach(() => {
      model = new AccessorModel();
    });

    it('should throw an exception if the decorator is attached to a class property', () => {
      try {
        @accessor
        class FailedAccessorModel extends Backbone.Model {}
      } catch (e) {
        expect(e.message).to.equal('@accessor can only be applied to class properties');
      }
    });

    it('should create getters and setters for the attached property', () => {
      expect(model.get('testProp')).to.be.undefined;
      expect(model.testProp).to.be.undefined;

      model.testProp = 55;

      expect(model.get('testProp')).to.equal(55);
      expect(model.testProp).to.equal(55);

      model.set('testProp', 100)

      expect(model.get('testProp')).to.equal(100);
      expect(model.testProp).to.equal(100);
    });

  });

  describe('accessors', () => {
    let model;

    @accessors(['testProp', 'testProp2'])
    class AccessorsModel extends Backbone.Model {}

    beforeEach(() => {
      model = new AccessorsModel();
    });

    it('should throw an exception if the decorator is not given an array of attributes', () => {
      try {
        @accessors()
        class FailedAccessorsModel extends Backbone.Model {}
      } catch (e) {
        expect(e.message).to.equal('@accessors must be an array');
      }
    });

    it('should create getters and setters for the attached property', () => {
      expect(model.get('testProp')).to.be.undefined;
      expect(model.testProp).to.be.undefined;

      model.testProp = 55;

      expect(model.get('testProp')).to.equal(55);
      expect(model.testProp).to.equal(55);

      model.set('testProp', 100)

      expect(model.get('testProp')).to.equal(100);
      expect(model.testProp).to.equal(100);

      expect(model.get('testProp2')).to.be.undefined;
      expect(model.testProp2).to.be.undefined;

      model.testProp2 = 55;

      expect(model.get('testProp2')).to.equal(55);
      expect(model.testProp2).to.equal(55);

      model.set('testProp2', 100)

      expect(model.get('testProp2')).to.equal(100);
      expect(model.testProp2).to.equal(100);
    });

  });

});
