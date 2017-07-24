var http_status = function () {
  var self = this;
  self.ok = function (res, msg) {
    typeof msg === 'object' ? res.status(200).jsonp(msg) : res.status(200).end(msg);
  };
  self.not_modified = function (res, msg) {
    console.log(msg);
    res.status(304).json(msg);
  };
  self.bad_request = function (res, msg) {
    console.log(msg);
    res.status(400).json(msg);
  };
  self.unnauthorized = function (res, msg) {
    console.log(msg);
    res.status(401).json(msg);
  };
  self.forbidden = function (res, msg) {
    console.log(msg);
    res.status(403).json(msg);
  };
  self.not_found = function (res, msg) {
    console.log(msg);
    res.status(404).json(msg);
  };
  self.not_acceptable = function (res, msg) {
    console.log(msg);
    res.status(406).json(msg);
  };
  self.gone = function (res, msg) {
    console.log(msg);
    res.status(410).json(msg);
  };
  self.enhance_your_calm = function (res, msg) {
    console.log(msg);
    res.status(420).json(msg);
  };
  self.unprocessable_entity = function (res, msg) {
    console.log(msg);
    res.status(422).json(msg);
  };
  self.internal_server_error = function (res, msg) {
    console.log(msg);
    res.status(500).json(msg);
  };
  self.bad_gateway_api = function (res, msg) {
    console.log(msg);
    res.status(502).json(msg);
  }
};
module.exports = http_status;