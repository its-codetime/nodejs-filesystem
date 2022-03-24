const NotFoundHandler = (req, res, next) => {
  const error = new Error("route not found");
  res.status(404);
  next(error);
};

const ErrorHandler = (error, req, res, next) => {
  res.status(res.statusCode || 500);
  res.json({ error: error.message });
};

module.exports = {
  NotFoundHandler,
  ErrorHandler,
};
