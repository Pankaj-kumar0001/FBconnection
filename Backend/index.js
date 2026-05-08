const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// database (temporary in memory)
let messages = [];

/* GET all messages */
app.get("/api/messages", (req, res) => {
    res.json(messages);
});

/* POST message (with ID) */
app.post("/api/messages", (req, res) => {

    const newMessage = {
        id: Date.now(),   // unique id
        text: req.body.text
    };

    messages.push(newMessage);

    res.json({ success: true, message: "Added" });
});

/* DELETE message */
app.delete("/api/messages/:id", (req, res) => {

    const id = parseInt(req.params.id);

    messages = messages.filter(msg => msg.id !== id);

    res.json({ success: true, message: "Deleted" });
});

app.listen(5000, () => {
    console.log("Backend running on 5000");
});