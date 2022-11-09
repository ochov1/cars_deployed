"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _timers = require("timers");

var _getCars = _interopRequireDefault(require("../getCars"));

var _carsMiddlewares = _interopRequireDefault(require("./carsMiddlewares.js"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _adsMiddleware = _interopRequireDefault(require("./adsMiddleware.js"));

var _adsDAO = _interopRequireDefault(require("../DAO/adsDAO.js"));

var _logsDAO = _interopRequireDefault(require("../DAO/logsDAO"));

var isRunning = false;
var delay = 10;

var cars = function cars() {
  try {
    if (!isRunning) {
      (0, _timers.setInterval)( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var log;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                isRunning = true;
                _context.next = 3;
                return _logsDAO["default"].composeLog("Time scheduled", null, "Fetching handlers ads.", null, null);

              case 3:
                log = _context.sent;
                console.log("Running");
                _context.next = 7;
                return _carsMiddlewares["default"].cars();

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })), process.env.SECONDS_FOR_HANDLERS * 1000);
    }
  } catch (e) {
    console.log(e.message);
  }
};

var ads = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            (0, _timers.setInterval)( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
              var log, adsArray;
              return _regenerator["default"].wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log("Running ads cars fetching");
                      _context2.next = 3;
                      return _logsDAO["default"].composeLog("Time scheduled", null, "Fetching ads.", null, null);

                    case 3:
                      log = _context2.sent;
                      _context2.t0 = _toConsumableArray2["default"];
                      _context2.t1 = Set;
                      _context2.next = 8;
                      return _getCars["default"].getAdsID();

                    case 8:
                      _context2.t2 = _context2.sent;
                      _context2.t3 = new _context2.t1(_context2.t2);
                      adsArray = (0, _context2.t0)(_context2.t3);
                      _context2.next = 13;
                      return _adsMiddleware["default"].dataTransforms(adsArray);

                    case 13:
                      if (!(adsArray.length > 0)) {
                        _context2.next = 16;
                        break;
                      }

                      _context2.next = 16;
                      return _adsDAO["default"].insertBulk(adsArray);

                    case 16:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            })), 50000);

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function ads() {
    return _ref2.apply(this, arguments);
  };
}();

var detailsInsert = function detailsInsert() {
  (0, _timers.setInterval)( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })), 5000);
};

var middleware = function middleware(app) {
  app.use(_bodyParser["default"].json());
  clearInterval(cars());
  clearInterval(ads());
  clearInterval(detailsInsert());
};

var _default = middleware;
exports["default"] = _default;