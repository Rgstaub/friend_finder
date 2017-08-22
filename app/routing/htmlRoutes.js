"use strict"

// Dependencies
const express = require('express');
const path = require('path');
let router = express.Router();


router.get('/', (req, res) => {
  let publicDir = path.normalize(__dirname + "\\..\\public\\");
  console.log(publicDir);
  res.sendFile(path.join(publicDir + "survey.html"));
});

module.exports = router;

