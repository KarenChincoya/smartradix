const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const postsRoutes = require("./routes/posts");
const reportsRoutes = require("./routes/reports");
const userRoutes = require("./routes/user");
const app = express();

mongoose.connect("mongodb+srv://karen:"+process.env.MONGO_ATLAS_PW+"@cluster0-brpxk.mongodb.net/smart-radix")
  .then(()=>{
    console.log('Connected to database!');
  })
  .catch(() => {
    console.log('Connection failed!');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  next();
});

app.use("/api/posts",postsRoutes);
app.use("/api/reports",reportsRoutes);
app.use("/api/user", userRoutes);

module.exports = app;
