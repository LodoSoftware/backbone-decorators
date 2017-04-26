// class decorator for 'Backbone.View' that assigns a 'className' to the prototype to use for the view
// e.g. @className('entity')
// value: string - takes a class name to assign to a view
// TODO: add tests and error conditions
export function className(value) {
  return function decorator(target) {
    target.prototype.className = value;
  };
}
