
const client = require("prom-client");
const collectDefaultMetrics = client.collectDefaultMetrics;
const register = client.register;

module.exports = function (timeout = 5000) {
  collectDefaultMetrics({ timeout});
  return function (req, res, next) {
    res.statusCode = 200;
    res.setHeader('Content-Type', register.contentType);
    res.end(register.metrics());
  }
}
