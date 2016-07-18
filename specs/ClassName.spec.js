import { className } from 'index';
import Backbone from 'backbone';

describe('Decorators / Backbone / ClassName', () => {

  it('should apply a className to the class its attached to', () => {

    // Setup the class with annotation
    @className('entity form-group')
    class View extends Backbone.View { }

    // Create a new instance
    const view = new View();

    // The url should be present
    expect(view.className).to.equal('entity form-group');
  });

});
