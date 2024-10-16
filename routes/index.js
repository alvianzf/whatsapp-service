const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.successResponse(null, "Welcome to the root API!");
});

module.exports = router;

