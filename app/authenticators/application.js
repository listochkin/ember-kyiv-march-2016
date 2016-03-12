import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({
  restore(/*data*/) {
  },

  authenticate(/*args*/) {
    return Ember.RSVP.resolve(); // use arguments to authenticate with a server
  },

  invalidate(/*data*/) {
  }
});
