const { DEFAULT_LOG, MAGENTA_LOG } = require("../constants/loggerConstants");

function loggingMiddleware(req, res, next) {
  req.time = new Date(Date.now()).toString();

  // Gather request data
  const method = req.method;
  const hostname = req.hostname;
  const path = req.path;
  const time = req.time;

  // Log requests in magenta
  console.log(
    `${MAGENTA_LOG}${method} ${hostname} ${path} ${time}${DEFAULT_LOG}`
  );

  next();
}

module.exports = { loggingMiddleware };
