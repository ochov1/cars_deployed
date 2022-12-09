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
var _carsDetailsDAO = _interopRequireDefault(require("../DAO/carsDetailsDAO"));
var VehiclesController = /*#__PURE__*/function () {
  function VehiclesController() {
    (0, _classCallCheck2["default"])(this, VehiclesController);
  }
  (0, _createClass2["default"])(VehiclesController, null, [{
    key: "getVehicles",
    value: function () {
      var _getVehicles = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var vehicles;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Object.assign(req.params, {
                  query: req.query
                });
                _context.next = 3;
                return _carsDetailsDAO["default"].getVehicles(req.params);
              case 3:
                vehicles = _context.sent;
                _context.next = 6;
                return res.status(200).send(vehicles);
              case 6:
                return _context.abrupt("return", _context.sent);
              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      function getVehicles(_x, _x2) {
        return _getVehicles.apply(this, arguments);
      }
      return getVehicles;
    }()
  }, {
    key: "discardVehicle",
    value: function () {
      var _discardVehicle = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _carsDetailsDAO["default"].discardVehicle(req.params.id);
              case 2:
                _context2.next = 4;
                return res.status(204).send({});
              case 4:
                return _context2.abrupt("return", _context2.sent);
              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      function discardVehicle(_x3, _x4) {
        return _discardVehicle.apply(this, arguments);
      }
      return discardVehicle;
    }()
  }, {
    key: "getStart",
    value: function () {
      var _getStart = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var vehicles;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _carsDetailsDAO["default"].getStartVehicle();
              case 2:
                vehicles = _context3.sent;
                _context3.next = 5;
                return res.status(200).send(vehicles);
              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
      function getStart(_x5, _x6) {
        return _getStart.apply(this, arguments);
      }
      return getStart;
    }()
  }, {
    key: "getBrand",
    value: function () {
      var _getBrand = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));
      function getBrand(_x7, _x8) {
        return _getBrand.apply(this, arguments);
      }
      return getBrand;
    }()
  }, {
    key: "vehiclesFilters",
    value: function () {
      var _vehiclesFilters = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
        var _req$query, make, model, page, filters, vehicles;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _req$query = req.query, make = _req$query['make.localized'], model = _req$query["model.localized"], page = _req$query.page;
                filters = {
                  make: make,
                  model: model
                };
                _context5.next = 5;
                return _carsDetailsDAO["default"].filterVehicles({
                  filters: filters,
                  page: page
                });
              case 5:
                vehicles = _context5.sent;
                _context5.next = 8;
                return res.status(200).send(vehicles);
              case 8:
                return _context5.abrupt("return", _context5.sent);
              case 11:
                _context5.prev = 11;
                _context5.t0 = _context5["catch"](0);
                _context5.next = 15;
                return res.status(_context5.t0.response.status).send(_context5.t0.message);
              case 15:
                return _context5.abrupt("return", _context5.sent);
              case 16:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 11]]);
      }));
      function vehiclesFilters(_x9, _x10) {
        return _vehiclesFilters.apply(this, arguments);
      }
      return vehiclesFilters;
    }()
  }]);
  return VehiclesController;
}();
exports["default"] = VehiclesController;