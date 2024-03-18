import { start } from "repl";

const express = require("express");
const Amadeus = require("amadeus");
const path = require("path");

// Load environment variables
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

const app = express();
const PORT = process.env.PORT || 1338;

// Initialize Amadeus API client with credentials from environment variables
const amadeus = new Amadeus({
  clientId: process.env.AMADEUS_CLIENT_ID,
  clientSecret: process.env.AMADEUS_CLIENT_SECRET,
});

// Define the router
const router = express.Router();

// Home route
router.get("/", (req, res) => {
  res.send("Home Page");
});

// Example Amadeus API usage route
router.get("/example", async (req, res) => {
  try {
    const response = await amadeus.shopping.flightOffersSearch.get({
      originLocationCode: "SYD",
      destinationLocationCode: "BKK",
      departureDate: "2023-08-01",
      adults: "1",
    });
    res.json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error calling Amadeus API");
  }
});

// Apply JSON parsing middleware
app.use(express.json());

// Apply router
app.use("/", router);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
