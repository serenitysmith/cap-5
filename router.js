 import config from "./config";


// config.js
const amadeus = new Amadeus({
  clientId: API_KEY,
  clientSecret: API_SECRET,
});


 // router.js
const { API_KEY, API_SECRET } = require("./config");
const Amadeus = require("amadeus");
const express = require("express");
// Create router
const router = express.Router();
// ...
module.exports = router;