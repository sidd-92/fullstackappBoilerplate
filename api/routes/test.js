const express = require("express");
const router = express.Router();
router.get("/", (req, res, next) => {
  let response = { message: "My First Mern Stack App" };
  res.status(200).json(response);
});

module.exports = router;
