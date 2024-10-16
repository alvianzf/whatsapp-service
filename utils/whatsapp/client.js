const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

let client;
let isAuthenticated = false;
let qrCode;

async function initializeClient() {
  client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    }
  });

  client.on('loading_screen', (percent, message) => {
    console.log('LOADING SCREEN', percent, message);
  });

  client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    qrCode = qr;
    console.log('QR Code generated. Please scan with your WhatsApp app.');
  });

  client.on('authenticated', () => {
    console.log('AUTHENTICATED');
    isAuthenticated = true;
  });

  client.on('auth_failure', (msg) => {
    console.error('AUTHENTICATION FAILURE', msg);
  });

  client.on('ready', () => {
    console.log('Client is ready!');
  });

  await client.initialize();

  return new Promise((resolve) => {
    client.on('ready', () => {
      resolve(client);
    });
  });
}

const authenticated = () => isAuthenticated;
const getCode = () => qrCode;
const getClient = () => client;

module.exports = { initializeClient, authenticated, getCode, getClient };