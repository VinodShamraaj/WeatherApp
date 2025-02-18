function errorMiddleware(error, req, res, next) {
  console.error(error.stack);
  res.status(500).json({ message: error.message });
}

module.exports = { errorMiddleware };
