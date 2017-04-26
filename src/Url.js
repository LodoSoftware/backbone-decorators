/**
 * Class decorator for 'Backbone.Model' and 'Backbone.Collection' that assigns a 'url'
 * to the prototype to use for the model/collection
 * e.g. @url('/path/to/resource')
 *
 * @export
 * @param value - url to assign to a view
 */
export function url(value) {
  return function decorator(target) {
    target.prototype.url = value;
  };
}
