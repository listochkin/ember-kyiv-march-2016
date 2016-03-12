import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('room-list', { path: '/' }, function () {
    this.route('room', { path: 'room/:room_name', resetNamespace: true });
  });
});

export default Router;
