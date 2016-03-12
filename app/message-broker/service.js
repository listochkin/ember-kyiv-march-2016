import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),

  init () {
    this._super(...arguments);

    setInterval(() => {
      const rooms = [11, 12, 13];
      const room = rooms[Math.floor(Math.random()*rooms.length)];
      this.get('store').pushPayload({
        data: [{
          id: Math.random() * 1000 |0,
          type: 'messages',
          attributes: {
            'room-id': room,
            'text': 'new message for room ' + room
          }
        }]
      });
    }, 1000)
  }
});
