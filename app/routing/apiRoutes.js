"use strict"

// Dependencies
const express = require('express');
const path = require('path');
// Associated modules
let friends = require('./../data/friends.js');
let match = require('../data/match.js');

// create the router middleware
let router = express.Router();

// route to the survey page for all request with the survey path
router.get('/friends', (req, res) => {
  console.log(friends);
  res.status(200);
  res.json(friends); 
}); 

router.post('/friends', (req, res) => {
  // Call the match function module to calculate and return the best match
  let selected = match(req.body);
  // Respond with the best match object
  res.json(selected);
  res.status(200);
});

// ship it
module.exports = router;