const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { 
    type: String, 
    required: true, 
  },
  password: { 
    type: String, 
    required: true,
  },
  profilePicture: { type: String },
  role: { 
    type: String, 
    enum: ["user", "admin", "eventPlanner"], 
    default: "user" 
  },
  eventsBooked: { 
    type: [mongoose.Schema.Types.ObjectId], 
    ref: 'Event', 
    default: [] 
  },
  tickets: {
    type: [mongoose.Schema.Types.ObjectId],  
    ref: 'Event', 
    default: []     
  },
  isDisabled: { 
    type: Boolean, 
    default: false 
  }
});

const UserModel = mongoose.model("User", userSchema);

module.exports = { UserModel };
