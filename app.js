const connectDB = require("./config/database.js");
const express = require("express");
const User = require("./models/user.js");

const app = express();

app.use(express.json())


app.post("/signup", async (req, res) => {
  const user = new User(req?.body);
  try {
    await user.save();
    res.send("user added successfullly");
  } catch (e) {
    res.status(400).send("Error Saving the Error" + e.message);
  }
});

connectDB()
  .then(() => {
    console.log("DB connected");
    app.listen(3000, () => {
      console.log("Server started successfully");
    });
  })
  .catch((err) => {
    console.error("DB not connected", err);
  });
