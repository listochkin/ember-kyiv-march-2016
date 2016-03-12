/*jshint node:true*/
var ROOMS = [
  { id: 11, type: 'rooms', attributes: { name: 'Welcome' } },
  { id: 12, type: 'rooms', attributes: { name: 'Need Help' } },
  { id: 13, type: 'rooms', attributes: { name: 'Offtopic' } }
];


module.exports = function(app) {
  var express = require('express');
  var roomsRouter = express.Router();

  roomsRouter.get('/', function(req, res) {
    res.send({
      'data': ROOMS
    });
  });

  roomsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  roomsRouter.get('/:id', function(req, res) {
    res.send({
      'data': ROOMS.filter(r => r.id == req.params.id)
    });
  });

  roomsRouter.put('/:id', function(req, res) {
    res.send({
      'rooms': {
        id: req.params.id
      }
    });
  });

  roomsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/rooms', require('body-parser').json());
  app.use('/api/rooms', roomsRouter);
};
