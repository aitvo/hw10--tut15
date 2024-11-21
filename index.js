const express = require("express");
const app = express();
require('dotenv').config();

////////////////////////////////////////
//////// CONFIG - SET UP EJS
app.set("view engine", "ejs");
app.use(express.static("public/css"))

/////// START SERVER
app.listen(process.env.PORT || 3000, () => {
  console.log("Server started (http://localhost:3000/) !");
});

////////////////////////////////////////

////////// INDEX PATH
app.get("/", (req, res) => {
  // res.send("Hello world...");
  res.render("index");
});

///////// ABOUT PATH
app.get("/about", (req, res) => {
  res.render("about");
});

//////// DATA PATH
app.get("/data", (req, res) => {
  const test = {
    title: "Test",
    items: ["one", "two", "three"]
  };
  res.render("data", { model: test });
});

//////////////////////////////////////////////////
// Add database package and connection string (can remove ssl)
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  },
  max: 2
});