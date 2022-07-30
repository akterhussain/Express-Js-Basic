const express = require("express");
const helloController = require("../controllers/helloController");
const router = express.Router();

//get routing
router.get("/Hello", helloController.Hello);
router.post("/Hello-post", helloController.Hello);

module.exports = router;