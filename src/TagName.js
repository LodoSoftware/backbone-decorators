// class decorator for 'Backbone.View' that assigns a 'tagName' to the prototype to use for the view
// e.g. @tagName('li')
// value: string - takes an element name to assign to a view
// TODO: add tests and error conditions
export function tagName(value) {
  return function decorator(target) {
    target.prototype.tagName = value;
  };
}
