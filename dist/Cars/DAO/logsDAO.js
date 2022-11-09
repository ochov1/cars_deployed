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

var logs;
var mobile;

var LogsDAO = /*#__PURE__*/function () {
  function LogsDAO() {
    (0, _classCallCheck2["default"])(this, LogsDAO);
  }

  (0, _createClass2["default"])(LogsDAO, null, [{
    key: "injectDB",
    value: function () {
      var _injectDB = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(conn) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!logs) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _context.prev = 2;
                _context.next = 5;
                return conn.db(process.env.DB_NAME);

              case 5:
                mobile = _context.sent;
                _context.next = 8;
                return conn.db(process.env.DB_NAME).collection("logs");

              case 8:
                logs = _context.sent;
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](2);
                console.error("Unable to establish a collection handle in Mobile: ".concat(_context.t0));

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 11]]);
      }));

      function injectDB(_x) {
        return _injectDB.apply(this, arguments);
      }

      return injectDB;
    }()
    /**
     *
     * @param {Object} log
     * @returns {Promise<void>}
     */

  }, {
    key: "postLogs",
    value: function () {
      var _postLogs = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(log) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return logs.insertOne(log);

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function postLogs(_x2) {
        return _postLogs.apply(this, arguments);
      }

      return postLogs;
    }()
    /**
     *
     * @param  action
     * @param user
     * @param description
     * @param session
     * @param result
     * @returns {Promise<{date: Date, result, session, action, description, user}>}
     */

  }, {
    key: "composeLog",
    value: function () {
      var _composeLog = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(action, user, description, session, result) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", {
                  action: action,
                  user: user,
                  description: description,
                  session: session,
                  date: new Date(),
                  result: result
                });

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function composeLog(_x3, _x4, _x5, _x6, _x7) {
        return _composeLog.apply(this, arguments);
      }

      return composeLog;
    }()
  }]);
  return LogsDAO;
}();

exports["default"] = LogsDAO;