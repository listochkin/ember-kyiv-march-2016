import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return Ember.RSVP.hash({
      room: this.store.findRecord('room', params.room_id),
      messages: this.store.filter('message', {
        // query params fro the server API call
        // http://localhost:4200/api/messages?room_id=11
        room_id: params.room_id
      }, (m) => {
        console.log(m)
        return m.get('roomId') == params.room_id
      })
    });
  },
  actions: {
    sendMessage (text) {
      return 'value from route ' + text;
    }
  }
});
