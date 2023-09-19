const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use( bodyParser.json());

const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() =>{
    console.log(('DB Connected'));
})
.catch((error) => console.log('DB Connection Error',error));

const studentRouter = require("./Routes/students.js");
app.use("/student",studentRouter);// creates backend routes

//app akata kiynnwa hadala tiyana connection port aka listen krnna kiyala
app.listen(PORT,() =>{
    console.log(`server is up and running on port ${PORT}`);
})
