const connectDB = require("./config/database.js");
const express = require("express");
const User = require("./models/user.js");

const app = express();



app.post('/signup',async (req,res)=>{
    const userObj={
      firstName:"Virat",
      lastName:'Kohli',
      email:"virat@gmail.com",
      password:"1234@abc",
      age:24,
      gender:'Male'
    }
    const user=new User(userObj)
    await user.save()
   res.send("user added successfullly")

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
