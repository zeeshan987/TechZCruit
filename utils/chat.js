const Conversation = require('../models/chat/Conversation');

// Add message
const addMessage = async (room, user, message) => {
  try {
    const conversation = await Conversation.findById(room);

    conversation.messages.push({
      user,
      description: message
    });

    await conversation.save();
  } catch (err) {
    console.log(err);
  }
};

module.exports = { addMessage };
