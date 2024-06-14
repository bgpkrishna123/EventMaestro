const express = require('express');

const access = require('../Middleware/access');
const auth = require('../Middleware/auth');
const { getEvents, eventData, addEvent, updateEvent, deleteEvent, event } = require('../controlles/event');

const eventRouter = express.Router();

eventRouter.get('/', getEvents);
eventRouter.get('/:id', event);

eventRouter.get('/user/events',auth, eventData);

eventRouter.post('/',auth, access('eventPlanner', 'admin'), addEvent);
eventRouter.patch('/:id',auth, access('eventPlanner', 'admin'), updateEvent);
eventRouter.delete('/:id',auth, access('eventPlanner', 'admin'), deleteEvent);

module.exports = {eventRouter};
