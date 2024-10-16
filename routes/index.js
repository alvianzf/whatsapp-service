const express = require('express');
const router = express.Router();

const welcomeMessageHandler = (req, res) => {
  res.successResponse(null, "Welcome to the root API!");
};

router.get('/', welcomeMessageHandler);
router.use('/api', require('./api'));

module.exports = router;
