import { isArray } from 'underscore';

/**
 * Property decorator that turns a model attribute into a model property.
 * Useful if you want to access a model attribute directly rather than
 * calling 'get' and 'set'.
 *
 * model.set('myAttribute', 'test')  becomes  model.myAttribute = 'test'
 * model.get('myAttribute')  becomes  model.myAttribute
 */
export function accessor(target, property, desc) {
  if (typeof target !== 'object') {
    throw new Error('@accessor can only be applied to class properties');
  }

  return {
    set: function (value) {
      this.set(property, value);
    },

    get: function() {
      return this.get(property);
    },

    enumerable: true,
    configurable: true
  };
}

/**
 * Class decorator that accepts a list of model attributes and turns them into
 * class properties.
 * Useful if you want to access model attributes directly rather than
 * calling 'get' and 'set'.
 *
 * model.set('myAttribute', 'test')  becomes  model.myAttribute = 'test'
 * model.get('myAttribute')  becomes  model.myAttribute
 */
export function accessors(modelAttributes) {
  return function decorator(target) {
    if (!isArray(modelAttributes)) {
      throw new Error('@accessors must be an array');
    }

    modelAttributes.forEach((modelAttribute) => {
      Object.defineProperty(target.prototype, modelAttribute, accessor(null, modelAttribute));
    });
  };
}
