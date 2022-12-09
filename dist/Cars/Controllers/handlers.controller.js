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
var _logsDAO = _interopRequireDefault(require("../DAO/logsDAO"));
var _handlersDAO = _interopRequireDefault(require("../DAO/handlersDAO.js"));
var _getCars = _interopRequireDefault(require("../getCars.js"));
var Handlers = /*#__PURE__*/function () {
  function Handlers() {
    (0, _classCallCheck2["default"])(this, Handlers);
  }
  (0, _createClass2["default"])(Handlers, null, [{
    key: "apiGetHandlers",
    value: function () {
      var _apiGetHandlers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var handlers;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _handlersDAO["default"].getHandlers({
                  filters: req.query
                });
              case 2:
                handlers = _context.sent;
                _context.next = 5;
                return res.status(200).json(handlers);
              case 5:
                return _context.abrupt("return", _context.sent);
              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      function apiGetHandlers(_x, _x2) {
        return _apiGetHandlers.apply(this, arguments);
      }
      return apiGetHandlers;
    }()
  }, {
    key: "apiPostHandler",
    value: function () {
      var _apiPostHandler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var existHandler, params, url, log, handlerData, handlerDataObject;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                existHandler = [];
                params = req.body;
                url = new URL(params.url);
                _context2.next = 6;
                return _handlersDAO["default"].getHandlerByURL(params.url);
              case 6:
                existHandler = _context2.sent;
                if (!(existHandler.length > 0)) {
                  _context2.next = 11;
                  break;
                }
                _context2.next = 10;
                return res.status(409).json({
                  error: 409,
                  errorDescription: "Already exist"
                });
              case 10:
                return _context2.abrupt("return", _context2.sent);
              case 11:
                _context2.next = 13;
                return _logsDAO["default"].composeLog(req.method, null, "Posting ha all ADs", null, null);
              case 13:
                log = _context2.sent;
                _context2.next = 16;
                return _logsDAO["default"].postLogs(log);
              case 16:
                _context2.next = 18;
                return _getCars["default"].getHandlerDetails(params["url"]);
              case 18:
                handlerData = _context2.sent;
                handlerDataObject = {
                  name: handlerData[3],
                  address: handlerData[0],
                  city: handlerData[1],
                  country: handlerData[2],
                  phone: handlerData[4],
                  url: params.url,
                  logo: handlerData[5]
                };
                _context2.next = 22;
                return _handlersDAO["default"].postHandlers(handlerDataObject);
              case 22:
                _context2.next = 24;
                return res.status(201).json(handlerDataObject);
              case 24:
                return _context2.abrupt("return", _context2.sent);
              case 27:
                _context2.prev = 27;
                _context2.t0 = _context2["catch"](0);
                _context2.next = 31;
                return res.status(400);
              case 31:
                return _context2.abrupt("return", _context2.sent);
              case 32:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 27]]);
      }));
      function apiPostHandler(_x3, _x4) {
        return _apiPostHandler.apply(this, arguments);
      }
      return apiPostHandler;
    }()
  }, {
    key: "apiDeleteHandler",
    value: function () {
      var _apiDeleteHandler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var params;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                params = req.params;
                _context3.next = 4;
                return _handlersDAO["default"].deleteHandler(params);
              case 4:
                _context3.next = 6;
                return res.status(204);
              case 6:
                return _context3.abrupt("return", _context3.sent);
              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);
                _context3.next = 13;
                return res.status(404).json({
                  error: "not found"
                });
              case 13:
                return _context3.abrupt("return", _context3.sent);
              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 9]]);
      }));
      function apiDeleteHandler(_x5, _x6) {
        return _apiDeleteHandler.apply(this, arguments);
      }
      return apiDeleteHandler;
    }()
  }, {
    key: "apiUpdateHandler",
    value: function () {
      var _apiUpdateHandler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return res.status(200).json({
                  errorDescription: "ok"
                });
              case 2:
                return _context4.abrupt("return", _context4.sent);
              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));
      function apiUpdateHandler(_x7, _x8) {
        return _apiUpdateHandler.apply(this, arguments);
      }
      return apiUpdateHandler;
    }()
  }]);
  return Handlers;
}();
exports["default"] = Handlers;