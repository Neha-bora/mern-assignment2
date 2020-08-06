const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express()



//middleware
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

//Import file from outer
const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profile");


//DB connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("connect DB");
  });

  //Middleware use

app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());


//my routes
app.use("/api", authRoutes);
app.use("/api", profileRoutes);



app.get("/" , (req , res) =>{
    res.send("hello")
})


const port = process.env.PORT || 8000;
app.listen( port , () =>{
    console.log("server is running on port 8000")
}) 