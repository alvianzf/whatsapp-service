const express = require('express');
const router = express.Router();

router.post('/send', (req, res) => {
    const { message, recipient } = req.body;

    if (!message || !recipient) {
        return res.errorResponse('Message and recipient are required', 400);
    }

    console.log(`Sending message: "${message}" to ${recipient}`);
    
    return handleResponse(res, 200, { success: true, message: 'Message sent successfully' });
});

module.exports = router;


