import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  model (params) {
    return Ember.RSVP.hash({
      room: this.store.findRecord('room', params.room_id),
      messages: this.store.filter('message', {
        // query params fro the server API call
        // http://localhost:4200/api/messages?room_id=11
        room_id: params.room_id
      }, (m) => m.get('roomId') == params.room_id)
    });
  },

  setupController (controller, model) {
    this._super(controller, model);
    controller.set('session', this.get('session'));
  },

  actions: {
    sendMessage (roomId, text) {
      const message = this.store.createRecord('message', { roomId, text });
      return message.save();
    }
  }
});
