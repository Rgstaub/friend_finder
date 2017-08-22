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
  console.log(req.body);
  res.send("post received");
})

// route to the home page for all other paths
// router.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + "/../public/home.html"));
//   res.status(200);
// })

module.exports = router;