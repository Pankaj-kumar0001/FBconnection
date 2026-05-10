const express = require("express");

const router = express.Router();

const {
    getMessages,
    addMessage,
    deleteMessage
} = require("../controllers/messagesController");

router.get("/", getMessages);

router.post("/", addMessage);

router.delete("/:id", deleteMessage);

module.exports = router;