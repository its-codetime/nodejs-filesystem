const NotFoundHandler = (req, res, next) => {
  const error = new Error("route not found");
  res.status(404); // set status to 404
  next(error); // pass error to next error handler
};

const ErrorHandler = (error, req, res, next) => {
  res.status(res.statusCode || 500); // set status code to 500 if its not set
  res.json({ error: error.message });
};

module.exports = {
  NotFoundHandler,
  ErrorHandler,
};
