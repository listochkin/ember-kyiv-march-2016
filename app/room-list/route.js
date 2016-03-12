import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return Ember.RSVP.resolve([
      { id: 11, name: 'Welcome' },
      { id: 12, name: 'Need Help' },
      { id: 13, name: 'Offtopic' }
    ]);
  }
});
