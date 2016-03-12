import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    sendMessage (text) {
      return 'value from route ' + text;
    }
  }
});
