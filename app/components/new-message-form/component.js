import Ember from 'ember';

export default Ember.Component.extend({
  text: '',
  errorMessage: '',

  actions: {
    submit (...params) {
      // let text = this.get('text');
      let result = this.attrs.onSend(...params).catch(() => {
        this.set('errorMessage', "Couldn't save your message");
      });
      console.log(result);
    }
  }
});
