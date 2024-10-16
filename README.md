# WhatsApp Web API Project Documentation

This project utilizes the WhatsApp Web API to send messages and manage WhatsApp client state. It includes a Node.js server built with Express.js, handling API requests for sending messages and checking the WhatsApp client status.

## API Documentation

### Endpoints

#### 1. `/api/send-message`

* **Method:** POST
* **Description:** Sends a message to a specified recipient.
* **Request Body:**
	+ `message`: The message to be sent.
	+ `recipient`: The phone number of the recipient in Indonesian format (e.g., +62xxxxxxxxxx).
* **Response:**
	+ `recipient`: The formatted phone number of the recipient.
	+ `message`: The message sent.
	+ `status`: The status of the message sending operation.
* **Error Handling:**
	+ Returns an error response if the message or recipient is missing.
	+ Returns an error response if the WhatsApp client is not initialized.
	+ Returns an error response if there's an error sending the message.

#### 2. `/api/send-message`

* **Method:** GET
* **Description:** Checks the status of the WhatsApp client.
* **Response:**
	+ `status`: The status of the WhatsApp client (ready or not initialized).
* **Error Handling:**
	+ Returns an error response if the WhatsApp client is not initialized.

### Sample Requests and Responses

#### 1. `/api/send-message` (POST)

**Request:**
```json
POST /api/send-message HTTP/1.1
Content-Type: application/json

{
  "message": "Hello, this is a test message!",
  "recipient": "+6281234567890"
}
```

**Successful Response:**
```json
HTTP/1.1 200 OK
Content-Type: application/json

{
  "recipient": "6281234567890@c.us",
  "message": "Hello, this is a test message!",
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

* `PORT`: The port number on which the server will run. Defaults to 3000 if not set.

### Dependencies

* `express`: For building the Node.js server.
* `whatsapp-web.js`: For interacting with the WhatsApp Web API.
* `qrcode-terminal`: For generating QR codes in the terminal.
* `dotenv`: For managing environment variables.

### Running the Project

1. Clone the project repository.
2. Install dependencies using `npm install` or `yarn install`.
3. Set the `PORT` environment variable if needed.
4. Run the project using `node app.js` or `yarn start`.

### Contributing

Contributions are welcome. Please open a pull request with your changes.


