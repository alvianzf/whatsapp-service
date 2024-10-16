// utils/phoneNumberFormatter.js

function formatPhoneNumber(phoneNumber) {
    // Remove any non-digit characters
    let cleaned = phoneNumber.replace(/\D/g, '');
  
    // If the number starts with 0, change it to 62
    if (cleaned.startsWith('0')) {
      cleaned = '62' + cleaned.substring(1);
    }
  
    // Format as required by WhatsApp Web API
    return cleaned + '@c.us';
  }
  
  module.exports = { formatPhoneNumber };