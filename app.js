const express = require('express');
const app = express();
const cors = require('cors')
const appRoute = require('./router/saveRoute')
const db_connection = require("./modal/connection")

const port = process.env.PORT || 4000;

require('dotenv').config()

//CORS AND BODY CONFIGURATION
app.use(cors())
app.use(express.json())

//Custome Functions for DB Connection
db_connection()

//ROUTER CONFIGURATION
app.use("/api",appRoute)

app.listen(port,()=>{
    console.log(`APP RUNNING ON PORT ${port}`)
})