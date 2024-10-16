# WhatsApp Web API Project Documentation 📱


This project utilizes the WhatsApp Web API to send messages and manage WhatsApp client state. It includes a Node.js server built with Express.js, handling API requests for sending messages and checking the WhatsApp client status. 🚀

[![Node.js](https://img.shields.io/badge/Node.js-14.17.0-green.svg)](https://nodejs.org/en/)
[![Express.js](https://img.shields.io/badge/Express.js-4.17.1-blue.svg)](https://expressjs.com/)
[![WhatsApp Web API](https://img.shields.io/badge/WhatsApp%20Web%20API-2.0.0-orange.svg)](https://developers.facebook.com/docs/whatsapp/api)
[![Puppeteer](https://img.shields.io/badge/Puppeteer-23.5.3-purple.svg)](https://pptr.dev/)

## Table of Contents

1. [API Documentation](#api-documentation)
2. [Sample Requests and Responses](#sample-requests-and-responses)
3. [Environment Variables](#environment-variables)
4. [Dependencies](#dependencies)
5. [Running the Project](#running-the-project)
6. [Contributing](#contributing)
7. [Also Known Issues](#also-known-issues)

## API Documentation

### Endpoints

#### 1. `/api/send-message`

* **Method:** POST 📨
* **Description:** Sends a message to a specified recipient. 📩
* **Request Body:**
	+ `data`: The data to be formatted into a message. 📝
		- Note: The data should include the booking code, name, date, from, and to.
	+ `recipient`: The phone number of the recipient in international format (e.g., +6281234567890). 📞
		- Note: Indonesian phone numbers should start with `+62` followed by the phone number. The leading `0` should be omitted.
* **Response:**
	+ `recipient`: The formatted phone number of the recipient. 📱
	+ `message`: The message sent. 📬
	+ `status`: The status of the message sending operation. 📤
* **Error Handling:**
	+ Returns an error response if the message or recipient is missing. ❌
	+ Returns an error response if the WhatsApp client is not initialized. ❌
	+ Returns an error response if there's an error sending the message. ❌

#### 2. `/api/send-message`

* **Method:** GET 📊
* **Description:** Checks the status of the WhatsApp client. 📈
* **Response:**
	+ `status`: The status of the WhatsApp client (ready or not initialized). 📈
* **Error Handling:**
	+ Returns an error response if the WhatsApp client is not initialized. ❌

### Sample Requests and Responses

#### 1. `/api/send-message` (POST)

**Request:**
```json
POST /api/send-message HTTP/1.1
Content-Type: application/json

{
  "data": {
    "bookingCode": "ABC123",
    "name": "John Doe",
    "date": "2022-01-01",
    "from": "Jakarta",
    "to": "Bandung"
  },
  "recipient": "+6281234567890"
}
```

**Successful Response:**
```json
HTTP/1.1 200 OK
Content-Type: application/json

{
  "recipient": "6281234567890@c.us",
  "message": "Konfirmasi Pemesanan Tiket\n\nKode Booking: ABC123\nNama: John Doe\nTanggal: 2022-01-01\nDari: Jakarta\nKe: Bandung\n\nTerima kasih telah memesan tiket di tiketq.com. Silakan simpan kode booking ini untuk referensi Anda.",
  "status": "Message sent successfully"
}
```

**Error Response (Missing Message):**
```json
HTTP/1.1 400 Bad Request
Content-Type: application/json

{
  "error": "Message and recipient are required"
}
```

**Error Response (WhatsApp Client Not Initialized):**
```json
HTTP/1.1 500 Internal Server Error
Content-Type: application/json

{
  "error": "WhatsApp client is not initialized"
}
```

#### 2. `/api/send-message` (GET)

**Request:**
```http
GET /api/send-message HTTP/1.1
```

**Successful Response:**
```json
HTTP/1.1 200 OK
Content-Type: application/json

{
  "status": "WhatsApp client is ready"
}
```

**Error Response (WhatsApp Client Not Initialized):**
```json
HTTP/1.1 500 Internal Server Error
Content-Type: application/json

{
  "error": "WhatsApp client is not initialized"
}
```

### Environment Variables

* `PORT`: The port number on which the server will run. Defaults to 3000 if not set. 🖥️

### Dependencies

* **Node.js** 📦: For building the server.
* **Express.js** 🚀: For handling API requests.
* **WhatsApp Web API** 📱: For interacting with WhatsApp.
* **qrcode-terminal** 📟: For generating QR codes in the terminal.
* **dotenv** 🌐: For managing environment variables.
* **Puppeteer** 🕷️: For automating browser tasks.

### Running the Project

1. Clone the project repository. 📂
2. Install dependencies using `npm install` or `yarn install`. 📦
3. Set the `PORT` environment variable if needed. 🛠️
4. Run the project using `node app.js` or `yarn start`. 🚀

### Contributing

Contributions are welcome. Please open a pull request with your changes. 🙌

### Also Known Issues

* **QR Code Generation:** The QR code generation process may fail if the terminal does not support Unicode characters.
* **WhatsApp Client Initialization:** The WhatsApp client may not initialize properly if the system does not have the required dependencies installed.
* **Message Sending:** Message sending may fail if the recipient's phone number is not in the correct format. Specifically, Indonesian phone numbers should start with `+62` followed by the phone number, omitting the leading `0`.
* **Phone Number Validation:** The system may not validate phone numbers correctly if they start with `0` or do not follow the expected format.
