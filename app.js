const express = require('express');
const app = express();
const standardErrors = require('./middlewares/errors/standard-errors');
const errorHandlers = require('./middlewares/errors/error-handlers');
const responseHandler = require('./utils/response/response-handlers');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(errorHandlers);
app.use(responseHandler);

app.use('/', require('./routes'));
standardErrors(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
