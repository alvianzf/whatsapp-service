// utils/phoneNumberFormatter.js

function formatPhoneNumber(phoneNumber) {
    // Remove any non-digit characters
    let cleaned = phoneNumber.replace(/\D/g, '');
  
    // Ensure the number starts with a country code
    if (!cleaned.startsWith('62')) {  // Assuming US numbers, change '1' for other countries
      cleaned = '1' + cleaned;
    }
  
    // Format as required by WhatsApp Web API
    return cleaned + '@c.us';
  }
  
  module.exports = { formatPhoneNumber };