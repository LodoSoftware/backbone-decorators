import { tagName } from 'index';
import Backbone from 'backbone';

describe('Decorators / Backbone / TagName', () => {

  it('should apply a tag name to the class its attached to', () => {

    // Setup the class with annotation
    @tagName('li')
    class View extends Backbone.View { }

    // Create a new instance
    const view = new View();

    // The url should be present
    expect(view.tagName).to.equal('li');
  });

});
