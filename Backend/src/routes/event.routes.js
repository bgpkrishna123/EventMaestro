const express = require('express');

const access = require('../Middleware/access');
const auth = require('../Middleware/auth');
const { getEvents, addEvent, updateEvent, deleteEvent, event, searchEventsByTitle, bookTicket, getBookedEvent } = require('../controlles/event');

const eventRouter = express.Router();

eventRouter.get('/', getEvents);
eventRouter.get('/planner/:id', event);

eventRouter.get('/search', searchEventsByTitle);
eventRouter.post('/bookTicket/:id',auth,bookTicket)
eventRouter.get('/getEventsBooked',auth, getBookedEvent)
eventRouter.post('/',auth, access('eventPlanner', 'admin'), addEvent);
eventRouter.patch('/:id',auth, access('eventPlanner', 'admin'), updateEvent);
eventRouter.delete('/:id',auth, access('eventPlanner', 'admin'), deleteEvent);

module.exports = {eventRouter};
