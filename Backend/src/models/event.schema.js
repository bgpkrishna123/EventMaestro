const mongoose = require("mongoose");



const EventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    eventDate: { type: String, required: true },
    organizer: { type: String , required: true},
    category: { type: String, required: true },
    imageUrl: { type: [String] },
    eventPlaner:{type:String, required: true},
    eventBooked: { type: [String]},
    time:{type: String},
    mode:{type:String,required:true},
    Price:{type:Number,required:true},
    location: { type: String, required: true },
    ticketTypes: {
    type: [{ type: String }],
      default: function () {
          return ["Bronze"];
      }
  },
},
  { versionKey: false }
);

const EventModel = mongoose.model("event", EventSchema);

module.exports = { EventModel };