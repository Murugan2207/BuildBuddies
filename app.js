const connectDB = require("./config/database.js");
const express = require("express");
const User = require("./models/user.js");

const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
  const user = new User(req?.body);

  try {
    await user.save();
    res.send("user added successfullly");
  } catch (e) {
    res.status(400).send("Error Saving the Error" + e.message);
  }
});

app.get("/user", async (req, res) => {
  const userName = req.body.firstName;
  try {
    const user = await User.findOne({ firstName: userName });
    if(user.length===0){
      res.status(404).send("No Records Found")
    }
    res.send(user);
  } catch (e) {
    res.status(400).send("something went wrong",e);
  }
});



app.get("/feed", async (req, res) => {
  try {
    const user = await User.find();
    if(user.length===0){
      res.status(404).send("No Records Found")
    }
    res.send(user);
  } catch (e) {
    res.status(400).send("something went wrong",e);
  }
});


app.delete("/delete",async (req,res)=>{
  const userId=req.body.userId
  try {
   const user= await User.findByIdAndDelete(userId)
      res.send("User Deleted Successfully")
    }
   catch (e) {
    res.status(400).send("something went wrong",e);
  }
})


app.patch("/update",async (req,res)=>{
  const userId=req.body.userId
  const data=req.body
  try {
   const user= await User.findByIdAndUpdate(userId,data)
      res.send("User updated Successfully")
    }
   catch (e) {
    res.status(400).send("something went wrong",e);
  }
})

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
