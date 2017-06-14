'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Jwt = function () {
  // constructor (payload, secret, option) {
  function Jwt() {
    _classCallCheck(this, Jwt);
  }

  _createClass(Jwt, [{
    key: 'signE',
    value: function signE(payload, secret, option) {}
  }, {
    key: 'token',
    get: function get() {}
  }]);

  return Jwt;
}();

// NOTE extends not allow. jwt is object


Object.assign(Jwt, _jsonwebtoken2.default);

exports.default = Jwt;