const express = require("express")
const router = express.Router();
 const mailsender = require("../mailsender")    

router.post("/sendMessage",mailsender)

module.exports = router
