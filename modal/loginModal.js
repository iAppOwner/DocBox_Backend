const mongoose = require("mongoose");


//Verify Connection
const connection = mongoose.connection;

connection.on("connected",()=>{
console.log("LOGIN MODAL CONNECTED")
  });

connection.on("error",()=>{
console.log("LOGIN MODAL CONNECTION ERROR")
});

const loginSchema =  new mongoose.Schema({
"username": {
    "type" : String,
  },
  "password" : {
    "type" : String,
  },
  "role":{
    "type" : String,
  }
});

const loginModal = mongoose.model("logins",loginSchema);

module.exports = loginModal;
