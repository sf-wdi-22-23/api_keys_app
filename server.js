// SERVER-SIDE JAVASCRIPT

// REQUIREMENTS //
var express = require("express"),
    app = express(),
    path = require("path"),
    bodyParser = require("body-parser");

require('dotenv').load();

// CONFIG //
// set ejs as view engine
app.set('view engine', 'ejs');
// serve js & css files
app.use("/static", express.static("public"));
// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));

var GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

app.get('/', function(req, res) {
    res.render('index', {GOOGLE_MAPS_API_KEY: GOOGLE_MAPS_API_KEY});
});

app.listen(3000, function (){
  console.log("listening on port 3000");
});