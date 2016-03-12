import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('new-message-form', 'Integration | Component | new message form', {
  integration: true
});

test('it sends text to an action', function(assert) {
  // assert.expect(1);
  const done = assert.async();

  this.set('externalAction', (text) => {
    assert.equal(text, 'TEST', 'Unexpected value were passed to an action: ' + text);
    done();
    return Promise.resolve();
  });
  this.render(hbs`{{new-message-form onSend=(action externalAction)}}`);

  this.$('input[type="text"]').val('TEST');
  this.$('input[type="text"]').change();

  this.$('input[type="submit"]').click();
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{new-message-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#new-message-form}}
      template block text
    {{/new-message-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
