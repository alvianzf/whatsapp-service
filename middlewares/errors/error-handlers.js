module.exports = (req, res, next) => {
  res.errorResponse = (message, statusCode = 500, error = null) => {
    res.status(statusCode).json({
      error: {
        message: message,
        status: statusCode,
        error: error
      }
    });
  };

  next();
};
