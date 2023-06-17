const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = 5000;



app.listen(PORT, () => {
  console.log(`Server is running  at PORT ${PORT}`);
});