// Middleware to handle custom errors

// 404 Not Found Error
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// Custom error handler
const errorHandler = (err, req, res, next) => {
  // sometime we get a 200 status code even with a error, so we can get a 500
  // code when this happen
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

export { notFound, errorHandler };
