const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
      name:{
          type:String,
          required:true
      },
      email:{
          type:String,
          required:true
      },
      phone:{
          type:String,
          required:true
      },
      job:{
          type:String,
          required:true
      },
      company:{
          type:String,
          required:true
      },
      age:{
          type:Number,
          required:true
      },
      city:{
          type:String,
          required:true
      }
})

module.exports = mongoose.model("Profile" , profileSchema)