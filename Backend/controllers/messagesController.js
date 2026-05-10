const messages = require("../data/messages");

const getMessages = (req, res) => {
    res.json(messages);
};

const addMessage = (req, res) => {
    const { text } = req.body;

    const newMessage = {
        id: Date.now(),
        text
    };

    messages.push(newMessage);

    res.json({
        message: "Message added",
        data: newMessage
    });
};

const deleteMessage = (req, res) => {
    const id = Number(req.params.id);

    const index = messages.findIndex((msg) => msg.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Message not found"
        });
    }

    messages.splice(index, 1);

    res.json({
        message: "Message deleted"
    });
};

module.exports = {
    getMessages,
    addMessage,
    deleteMessage
};