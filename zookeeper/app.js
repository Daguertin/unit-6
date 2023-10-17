require("dotenv").config();
const express = require("express");
const app = express();
const zooController = require("./Controllers/zoo.controller");
const mongoose = require("mongoose");


const PORT = process.env.PORT;
const DBName = process.env.DBName;
const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL+DBName);
const db = mongoose.connection;
db.once("open", ()=>{
    console.log("connect to the DB", DBName);
})


app.use (express.json());
app.use ("/user", zooController);

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});