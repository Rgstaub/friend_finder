"use strict"

// Dependencies
const express = require('express');
const path = require('path');

// create the router middleware
let router = express.Router();

// route to the survey page for all request with the survey path
router.get('/survey/*', (req, res) => {
  res.sendFile(path.join(__dirname + "/../public/survey.html"));
  res.status(200);
});

// route to the home page for all other paths
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + "/../public/home.html"));
  res.status(200);
})

module.exports = router;

