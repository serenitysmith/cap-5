// index.js
const express = require("express");
const router = require("./router");





const PORT = 1338;
const app = express();




// Define routes here
router.get('/', (req, res) => {
  res.send('Home Page');
});

module.exports = router;" > router.js && echo ";
 
// Apply JSON parsing middleware
app.use(express.json());
// Apply router
app.use("/", router);
// Serving app on defined PORT
app.listen(PORT, () => {
  console.log(`Express is running on port ${PORT}`);
});
