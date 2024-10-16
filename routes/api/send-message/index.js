const express = require("express");
const router = express.Router();
const { getClient } = require("../../../utils/whatsapp/client");
const { formatPhoneNumber } = require("../../../utils/phoneNumberFormatter");
const { formatMessage } = require("../../../utils/whatsapp/message-formatter");

router.post("/", async (req, res) => {
  const { data, recipient } = req.body;

  if (!data || !recipient) {
    return res.errorResponse("Message and recipient are required", 400);
  }

  const client = getClient();
  if (!client) {
    return res.errorResponse("WhatsApp client is not initialized", 500);
  }

  try {
    const formattedRecipient = formatPhoneNumber(recipient);

    const message = formatMessage(data);
    
    await client.sendMessage(formattedRecipient, message);
    console.log(`Message sent: "${message}" to ${formattedRecipient}`);
    return res.successResponse(
      { recipient: formattedRecipient, message },
      "Message sent successfully"
    );
  } catch (error) {
    console.error("Error sending message:", error);
    return res.errorResponse(`Failed to send message: ${error.message}`, 500);
  }
});

router.get("/", async (req, res) => {
  const client = getClient();
  if (client) {
    return res.successResponse(null, "WhatsApp client is ready");
  } else {
    return res.errorResponse("WhatsApp client is not initialized", 500);
  }
});

module.exports = router;