const mongoose = require("mongoose");


//Verify Connection
const connection = mongoose.connection;

connection.on("connected",()=>{
console.log("DOC MODAL CONNECTED")
  });

connection.on("error",()=>{
console.log("DOC MODAL CONNECTION ERROR")
});

const boxSchema =  new mongoose.Schema({
"docName": {
    "type" : String,
  },
  "aurthor" : {
    "type" : String,
  },
  "role" : {
    "type" : String,
  },
  "date":{
    "type" : String,
  }
});

const boxModal = mongoose.model("boxs",boxSchema);

module.exports = boxModal;
