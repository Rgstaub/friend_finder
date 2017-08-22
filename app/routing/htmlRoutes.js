"use strict"

// Dependencies
const express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
  res.send("Routed!");
});

module.exports = router;

