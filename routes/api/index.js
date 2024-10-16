const express = require('express');
const sendMessageRouter = require('./send-message');

const router = express.Router().use('/send-message', sendMessageRouter);

module.exports = router;
