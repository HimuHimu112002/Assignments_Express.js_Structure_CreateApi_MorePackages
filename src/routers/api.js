const express = require('express')
const router = express.Router()

const simple = require("../controllers/simpleController");
router.get("/simple",simple);

module.exports = router