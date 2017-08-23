"use strict"

// Dependencies
const express = require('express');
const path = require('path');
let friends = require('./../data/friends.js')

// create the router middleware
let router = express.Router();

// route to the survey page for all request with the survey path
router.get('/friends', (req, res) => {
  console.log(friends);
  res.status(200);
  res.json(friends);
}); 

router.post('/friends', (req, res) => {
  console.log("POST");
  console.log(req.body);
  res.status(200);
  res.send("post complete");
});


module.exports = router;