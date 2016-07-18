import { url } from 'index';
import Backbone from 'backbone';

describe('Decorators / Backbone / Url', () => {

  it('should apply a url to the model its attached to', () => {

    // Setup the class with annotation
    @url('/path/to/my/resource')
    class Model extends Backbone.Model { }

    // Create a new instance
    const model = new Model();

    // The url should be present
    expect(model.url).to.equal('/path/to/my/resource');
  });

  it('should apply a url to the collection its attached to', () => {

    // Setup the class with annotation
    @url('/path/to/my/resource')
    class Collection extends Backbone.Collection { }

    // Create a new instance
    const collection = new Collection();

    // The url should be present
    expect(collection.url).to.equal('/path/to/my/resource');
  });

});
