import { isFunction } from 'underscore';

// class method decorator for methods that should be triggered on an event
// e.g. @on('click .btn')
// value: string ('event selector') - event selector string to trigger method on
// TODO: add tests
export default function on(eventName) {
  return function decorator(target, name, descriptor) {
    if (!target.events) {
      target.events = {};
    }
    if (isFunction(target.events)) {
      throw new Error('The on decorator is not compatible with an events method');
    }
    if (!eventName) {
      throw new Error('The on decorator requires an eventName argument');
    }
    target.events[eventName] = name;
    return descriptor;
  };
}
