const mongoose = require("mongoose");


//Verify Connection
const connection = mongoose.connection;

connection.on("connected",()=>{
console.log("FILE MODAL CONNECTED")
  });

connection.on("error",()=>{
console.log("FILE MODAL CONNECTION ERROR")
});

const fileSchema =  new mongoose.Schema({
"docName": {
    "type" : String,
  },
  "filename" : {
    "type" : String,
  },
  "role" : {
    "type" : String,
  },
  "aurthor":{
    "type" : String,
  },
  "date": {
    "type" : String
  }
});

const fileModal = mongoose.model("files",fileSchema);

module.exports = fileModal;
