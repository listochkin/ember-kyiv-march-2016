import Ember from 'ember';

export default Ember.Component.extend({
  text: '',

  actions: {
    submit (...params) {
      // let text = this.get('text');
      let result = this.attrs.onSend(...params);
      console.log(result);
    }
  }
});
