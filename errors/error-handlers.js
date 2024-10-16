module.exports = (req, res, next) => {
  res.errorResponse = (message, statusCode = 500) => {
    res.status(statusCode).json({
      error: {
        message: message,
        status: statusCode
      }
    });
  };

  next();
};
