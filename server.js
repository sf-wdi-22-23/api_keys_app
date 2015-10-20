// SERVER-SIDE JAVASCRIPT

// REQUIREMENTS //
var express = require("express"),
    app = express(),
    path = require("path"),
    bodyParser = require("body-parser"),
    request = require('request');

require('dotenv').load();

// CONFIG //
// set ejs as view engine
app.set('view engine', 'ejs');
// serve js & css files
app.use("/static", express.static("public"));
// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));

var FOOD_API_KEY = process.env.FOOD_API_KEY;

var foods;

request('http://food2fork.com/api/search?key='+FOOD_API_KEY+'&q=chocolate', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    foods = JSON.parse(body).recipes;
  }
});

app.get('/', function(req, res) {
    res.render('index', {foods: foods});
});

app.listen(3000, function (){
  console.log("listening on port 3000");
});