const { EventModel } = require("../models/event.schema");
const { UserModel } = require("../models/user.schema");

const getEvents = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 20;
        const { minPrice, maxPrice, city, sort, search } = req.query;
        const query = {};

        if (minPrice && maxPrice) {
            query.Price = { $gte: minPrice, $lte: maxPrice };
        } else if (minPrice) {
            query.Price = { $gte: minPrice };
        } else if (maxPrice) {
            query.Price = { $lte: maxPrice };
        }

        if (city) {
            query.location = city;
        }

        if (search) {
            query.$or = [
                { title: { $regex: search, $options: "i" } },
                { category: { $regex: search, $options: "i" } },
                { eventPlaner: { $regex: search, $options: "i" } },
                { organizer: { $regex: search, $options: "i" } },
            ];
        }

        const totalCount = await EventModel.countDocuments(query);
        const totalPages = Math.ceil(totalCount / limit);

        const sortCriteria = sort === "desc" ? { eventDate: -1 } : { eventDate: 1 };

        const skip = (page - 1) * limit;
        const events = await EventModel.find(query).skip(skip).sort(sortCriteria).limit(limit);

        res.status(200).json({ events, totalPages });
    } catch (err) {
        console.error("Error while filtering, searching, and paginating events:", err);
        res.status(500).json({ error: err.message || "Internal Server Error" });
    }
};


const eventData = async (req, res) => {
    const userID = req.user.userID;
    try {
        const user = await UserModel.findById(userID).populate('eventsBooked');
        if (!user) {
            return res.status(404).json({ error: true, message: "User not found" });
        }

        const eventsArray = user.eventsBooked;
        if (!eventsArray || eventsArray.length === 0) {
            return res.status(200).json({ error: false, message: "User has no booked events", item: [] });
        }

        res.status(200).json({ error: false, item: eventsArray });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: true, message: "Internal Server Error" });
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


module.exports = { getEvents, eventData, event, addEvent, updateEvent, deleteEvent };
