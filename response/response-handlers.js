const responseHandler = (req, res, next) => {
  res.successResponse = (data, message = 'Success', statusCode = 200) => {
    res.status(statusCode).json({
      status: 'success',
      message: message,
      data: data,
      code: statusCode
    });
  };

  res.errorResponse = (message, statusCode = 500) => {
    res.status(statusCode).json({
      status: 'error',
      message: message,
      code: statusCode
    });
  };

  next();
};

module.exports = responseHandler;
