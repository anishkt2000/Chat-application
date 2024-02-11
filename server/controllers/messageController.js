const Messages = require("../Models/messageModel");

module.exports.getMessage = async (req, res, next) => {
  try {
    const { from, to } = req.body;
    const sortedUsers = [from, to].sort();

    const messages = await Messages.find({
      "message.users": {
        $all: sortedUsers,
      },
    }).exec();
    const projectedMessages = messages.map((msg) => {
      return {
        fromSelf: msg.message.sender.toString() === from,
        message: msg.message.text,
      };
    });

    res.json(projectedMessages);
  } catch (ex) {
    next(ex);
  }
};
module.exports.addMessage = async (req, res, next) => {
  try {
    const { from, to, message } = req.body;
    const sortedUsers = [from, to].sort();
    const data = await Messages.create({
      message: { text: message, users: sortedUsers, sender: from },
    });
    if (data) {
      return res.json({ msg: "Message added successfully" });
    } else {
      return res.json({
        msg: "Failed to add message to the database",
      });
    }
  } catch (ex) {
    next(ex);
  }
};
