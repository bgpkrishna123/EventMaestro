const { EventModel } = require("../models/event.schema");
const { UserModel } = require("../models/user.schema");

const getEvents = async (req, res) => {
    try {
        const events = await EventModel.find();
        res.status(200).json({ events });
    } catch (err) {
        console.error("Error while fetching events:", err);
        res.status(500).json({ error: err.message || "Internal Server Error" });
    }
};



const event = async (req, res) => {
    const { id } = req.params; 
    try {
      const eventData = await EventModel.find({ eventPlaner: id });
      if (!eventData) { 
        return res.status(404).json({ error: true, message: "You have not creted any event yet" });
      }
      res.status(200).json({ error: false, eventData });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: true, message: error.message });
    }
  };
  
  module.exports = { event };
  


async function searchEventsByTitle(req, res) {
    try {
        const title = req.query.title; 
        const recipes = await EventModel.find({ title: { $regex: title, $options: "i" } });
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const addEvent = async (req, res) => {
    try {
        const { title, description, eventDate, category, imageUrl, mode, time, Price, location, ticketTypes } = req.body;

        const organizer = req.user.username;
        const eventPlaner = req.user.userID;
        const newEvent = new EventModel({ title, description, eventDate, mode, time, organizer, category, imageUrl, eventPlaner, Price, location, ticketTypes });

        const savedEvent = await newEvent.save();

        await UserModel.findOneAndUpdate({ username: eventPlaner }, { $push: { eventsPlanned: savedEvent._id } }, { new: true });
        await UserModel.findByIdAndUpdate(eventPlaner, { $push: { eventsBooked: savedEvent._id } }, { new: true });

        res.status(201).json({ success: true, event: savedEvent });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Not able to add Event", error: error.message });
    }
};

const updateEvent = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedEvent = await EventModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedEvent) {
            return res.status(404).json({ success: false, message: "Event not found" });
        }
        res.status(200).json({ success: true, event: updatedEvent });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};


const bookTicket = async (req, res) => {
    const { id } = req.params;
    const userId = req.user.userID;

    try {
        const event = await EventModel.findById({_id: id});
        if (!event) {
            return res.status(404).json({ success: false, message: "Event not found" });
        }
        if (event.eventBooked.includes(userId)) {
            return res.status(400).json({ success: false, message: "You have already booked this ticket" });
        }
        
        await UserModel.findByIdAndUpdate(userId, { $push: { tickets: id } }, { new: true });

        await EventModel.findByIdAndUpdate(id, { $push: { eventBooked: userId } }, { new: true });

        res.status(200).json({ success: true, message: "Ticket booked successfully" });
    } catch (error) {
        console.error("Error while booking ticket:", error);
        res.status(500).json({ success: false,  error: error });
    }
};

const deleteEvent = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedEvent = await EventModel.findByIdAndDelete(id);
        if (!deletedEvent) {
            return res.status(404).json({ success: false, message: "Event not found" });
        }

        res.status(200).json({ success: true, message: "Event deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};


module.exports = { getEvents,  event, addEvent,bookTicket, updateEvent, deleteEvent,searchEventsByTitle };
