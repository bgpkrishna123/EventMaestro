require("dotenv").config();
const express = require('express');
const cors = require('cors');
const connectToDB = require("./src/configs/db");
const { userRouter } = require("./src/routes/user.routes");
const { eventRouter } = require("./src/routes/event.routes");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use("/users",userRouter)
app.use("/events",eventRouter)

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, async() => {
  try {
    await connectToDB(process.env.mongo_URI)
    console.log(`Server is running at ${port}`);
  } catch (error) {
   console.log(error); 
  }
});