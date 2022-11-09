"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _logsDAO = _interopRequireDefault(require("../DAO/logsDAO.js"));

var LogsController = /*#__PURE__*/function () {
  function LogsController() {
    (0, _classCallCheck2["default"])(this, LogsController);
  }

  (0, _createClass2["default"])(LogsController, null, [{
    key: "getLogs",
    value: function () {
      var _getLogs = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return res.json({
                  route: "route"
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getLogs(_x, _x2) {
        return _getLogs.apply(this, arguments);
      }

      return getLogs;
    }()
  }, {
    key: "postLog",
    value: function () {
      var _postLog = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(log) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _logsDAO["default"].postLogs(log);

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function postLog(_x3) {
        return _postLog.apply(this, arguments);
      }

      return postLog;
    }()
  }]);
  return LogsController;
}();

exports["default"] = LogsController;