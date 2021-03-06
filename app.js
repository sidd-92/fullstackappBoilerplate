const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const testRoutes = require("./api/routes/test");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/test", testRoutes);
module.exports = app;
