import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  actions: {
    login () {
      this.get('session').authenticate('authenticator:application').then(() => this.transitionTo('room-list'));
    }
  }
});
