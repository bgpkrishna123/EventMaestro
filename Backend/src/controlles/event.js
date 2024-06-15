const { EventModel } = require("../models/event.schema");
const { UserModel } = require("../models/user.schema");

const getEvents = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 20;

        const totalCount = await EventModel.countDocuments();
        const totalPages = Math.ceil(totalCount / limit);

        const skip = (page - 1) * limit;
        const events = await EventModel.find().skip(skip).limit(limit);

        res.status(200).json({ events, totalPages, currentPage: page, totalCount });
    } catch (err) {
        console.error("Error while paginating events:", err);
        res.status(500).json({ error: err.message || "Internal Server Error" });
    }
};



const event = async (req, res) => {
    const { id } = req.params;
    try {
        const eventData = await EventModel.findById({ eventPlaner: id });
        if (!eventData) {
            return res.status(404).json({ error: true, message: "Event not found" });
        }
        res.status(200).json({ error: false, eventData });
    } catch (error) {
        console.log(error);
        res.status(404).json({ error: true, message: error.message });
    }
};


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


module.exports = { getEvents,  event, addEvent, updateEvent, deleteEvent };
