import Ember from 'ember';

export default Ember.Route.extend({
  messageBroker: Ember.inject.service(),
  beforeModel () {
    const mb = this.get('messageBroker');
    console.log(mb);
  }
});
