const mongoose = require("mongoose");

const categoryEnum = [
  "Music",
  "Tech",
  "Workshop",
  "Sports",
  "Photography",
  "Food",
  "Art",
  "Expo",
  "Fashion",
  "Education",
  "Health",
  "Business",
  "Science",
  "Travel",
  "Entertainment",
  "Fitness",
  "Culture",
  "Environment",
  "Politics",
  "Religion",
  "History",
];

const EventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    eventDate: { type: Date, required: true },
    organizer: { type: String , required: true},
    category: { type: String, enum: categoryEnum, required: true },
    imageUrl: { type: String },
    eventPlaner:{type:String, required: true},
    time:{type: String},
    mode:{type:String,required:true},
    Price:{type:Number,required:true},
    location: { type: String, required: true },
    ticketTypes: {
    type: [{ type: String, enum:  ["Gold", "Silver", "Bronze"] }],
      default: function () {
          return ["Bronze"];
      }
  },
},
  { versionKey: false }
);

const EventModel = mongoose.model("event", EventSchema);

module.exports = { EventModel };