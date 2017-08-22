"use strict"

// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./app/routing/htmlRoutes.js');
 
// Create the express app
let app = express();
const PORT = process.env.PORT || 3000;

// Set up the express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.use(express.static('public'));
app.use('/', router);


// Start the server and listen
app.listen(PORT, () => {
  console.log(`Friend-Finder app listening on PORT ${PORT}`)
})

 