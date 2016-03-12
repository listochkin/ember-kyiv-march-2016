/*jshint node:true*/

// Find a route in Ember Inspector and press $E link
//
//     var room = $E.store.createRecord('message', { text: 'debug', roomId: 11});
//     room.save();

var MESSAGES = [
  { id: 21, type: 'messages', attributes: { 'room-id': 11, text: 'Hi' } },
  { id: 22, type: 'messages', attributes: { 'room-id': 11, text: 'Hello' } },
  { id: 23, type: 'messages', attributes: { 'room-id': 11, text: 'Have a good day' } }
];

module.exports = function(app) {
  var express = require('express');
  var messagesRouter = express.Router();

  messagesRouter.get('/', function(req, res) {
    res.send({
      'data': MESSAGES
    });
  });

  messagesRouter.post('/', function(req, res) {
    // FIXME: req.body is empty for some reason
    res.status(201).end();
  });

  messagesRouter.get('/:id', function(req, res) {
    res.send({
      'data': MESSAGES.filter(m => m.id == req.params.id)
    });
  });

  messagesRouter.put('/:id', function(req, res) {
    res.send({
      'messages': {
        id: req.params.id
      }
    });
  });

  messagesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  app.use('/api/messages', require('body-parser').json());
  app.use('/api/messages', messagesRouter);
};
