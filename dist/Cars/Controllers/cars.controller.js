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
var _carsDAO = _interopRequireDefault(require("../DAO/carsDAO.js"));
var _logsDAO = _interopRequireDefault(require("../DAO/logsDAO.js"));
var _mongodb = require("mongodb");
var CarsController = /*#__PURE__*/function () {
  function CarsController() {
    (0, _classCallCheck2["default"])(this, CarsController);
  }
  (0, _createClass2["default"])(CarsController, null, [{
    key: "getCars",
    value: function () {
      var _getCars = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var page, results;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                page = req.params.page;
                _context.next = 3;
                return _carsDAO["default"].getCars({
                  filters: {}
                });
              case 3:
                results = _context.sent;
                _context.next = 6;
                return results;
              case 6:
                results = _context.sent;
                _context.next = 9;
                return res.status(200).send(results);
              case 9:
                return _context.abrupt("return", _context.sent);
              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      function getCars(_x, _x2) {
        return _getCars.apply(this, arguments);
      }
      return getCars;
    }()
  }, {
    key: "getAllCars",
    value: function () {
      var _getAllCars = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var log, allCars;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _logsDAO["default"].composeLog(req.method, null, "Fetching all ADs", null, null);
              case 3:
                log = _context2.sent;
                _context2.next = 6;
                return _logsDAO["default"].postLogs(log);
              case 6:
                _context2.next = 8;
                return _carsDAO["default"].fetchAllAds();
              case 8:
                allCars = _context2.sent;
                _context2.next = 11;
                return res.status(200).json(allCars);
              case 11:
                _context2.next = 16;
                break;
              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", _context2.t0);
              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 13]]);
      }));
      function getAllCars(_x3, _x4) {
        return _getAllCars.apply(this, arguments);
      }
      return getAllCars;
    }()
  }, {
    key: "postCars",
    value: function () {
      var _postCars = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return res.status(400).json({
                  errorDescription: "There is no new car from the API."
                });
              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
      function postCars(_x5, _x6) {
        return _postCars.apply(this, arguments);
      }
      return postCars;
    }()
  }, {
    key: "deleteCars",
    value: function () {
      var _deleteCars = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _carsDAO["default"].removeCars(req.params.id);
              case 3:
                _context4.next = 5;
                return res.status(204).send({});
              case 5:
                _context4.next = 11;
                break;
              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                _context4.next = 11;
                return res.status(404).send({
                  error: 404,
                  errorDescription: "not found"
                });
              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 7]]);
      }));
      function deleteCars(_x7, _x8) {
        return _deleteCars.apply(this, arguments);
      }
      return deleteCars;
    }()
  }, {
    key: "putCars",
    value: function () {
      var _putCars = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return res.status(400).json({
                  errorDescription: "There is no new car from the API."
                });
              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));
      function putCars(_x9, _x10) {
        return _putCars.apply(this, arguments);
      }
      return putCars;
    }()
  }, {
    key: "getCarsByHandler",
    value: function () {
      var _getCarsByHandler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
        var cars;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _carsDAO["default"].getCars({
                  filters: {
                    handler: new _mongodb.ObjectId(req.params.id)
                  }
                });
              case 2:
                cars = _context6.sent;
                cars.map(function (el) {
                  if (typeof el.priceModel === "string") el["priceModel"] = "€" + el["priceModel"].replace(/[^0-9\-]+/g, '');
                });
                _context6.next = 6;
                return res.status(200).send(cars);
              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));
      function getCarsByHandler(_x11, _x12) {
        return _getCarsByHandler.apply(this, arguments);
      }
      return getCarsByHandler;
    }()
  }]);
  return CarsController;
}();
exports["default"] = CarsController;