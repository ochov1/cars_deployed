"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cars = cars;
exports.dataTransformer = dataTransformer;
exports["default"] = void 0;
exports.transformsTimes = transformsTimes;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _handlersDAO = _interopRequireDefault(require("../DAO/handlersDAO"));
var _getCars = _interopRequireDefault(require("../getCars"));
var _carsDAO = _interopRequireDefault(require("../DAO/carsDAO"));
var _adsDAO = _interopRequireDefault(require("../DAO/adsDAO.js"));
var _moment = _interopRequireDefault(require("moment"));
/**
 *
 * @param {Array} cars
 * @returns {Promise<void>}
 */
function dataTransformer(cars) {
  try {
    cars.map(function (car, index) {
      if (car["firstRegistration"].includes("EZ")) {
        car["firstRegistration"] = car["firstRegistration"].replace("EZ ", "");
      }
      if (car["priceModel"]) {
        car["priceModel"] = parseInt(car["priceModel"].replace(/\D/g, ""));
      }
      if (car["mileage"]) {
        car["mileage"] = parseInt(car["mileage"].replace(/\D/g, ""));
      }
      if (car["secondaryPrice"]) {
        car["secondaryPrice"] = parseInt(car["secondaryPrice"].replace(/\D/g, ""));
      }
      cars[index] = car;
    });
  } catch (e) {}
}
function cars() {
  return _cars.apply(this, arguments);
}
function _cars() {
  _cars = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
    var handlers;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _handlersDAO["default"].getHandlers();
          case 2:
            handlers = _context3.sent;
            handlers.map( /*#__PURE__*/function () {
              var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(el) {
                var carsArray, actualCars, toDelete;
                return _regenerator["default"].wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return _getCars["default"].cars(el.url);
                      case 2:
                        carsArray = _context2.sent;
                        _context2.next = 5;
                        return _carsDAO["default"].getCars({
                          filters: {
                            available: false
                          },
                          carsPerPage: 1000
                        });
                      case 5:
                        actualCars = _context2.sent;
                        toDelete = actualCars.map(function (el) {
                          var isAvailable = false;
                          carsArray.map(function (newCar) {
                            if (newCar['adID'] === el["adID"]) isAvailable = true;
                          });
                          if (isAvailable === false) {
                            return {
                              updateOne: {
                                filter: {
                                  adID: el.adID
                                },
                                update: {
                                  $set: {
                                    discarded: true
                                  }
                                }
                              }
                            };
                          }
                        });
                        if (!(toDelete.length !== 0)) {
                          _context2.next = 10;
                          break;
                        }
                        _context2.next = 10;
                        return _carsDAO["default"].removeMultipleCars(toDelete);
                      case 10:
                        _context2.next = 12;
                        return dataTransformer(carsArray);
                      case 12:
                        setTimeout(function () {}, 2000);
                        if (Array.isArray(carsArray)) {
                          carsArray.map( /*#__PURE__*/function () {
                            var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(car) {
                              var inserted;
                              return _regenerator["default"].wrap(function _callee$(_context) {
                                while (1) {
                                  switch (_context.prev = _context.next) {
                                    case 0:
                                      car["handler"] = el._id;
                                      car["prints"] = 0;
                                      car["discarded"] = false;
                                      car["timeStamp"] = new Date();
                                      car["priority"] = 1;
                                      _context.next = 7;
                                      return _carsDAO["default"].addCar(car);
                                    case 7:
                                      inserted = _context.sent;
                                      _context.next = 10;
                                      return _adsDAO["default"].insertOne({
                                        adID: car.adID,
                                        fetch: false,
                                        priority: 1
                                      });
                                    case 10:
                                    case "end":
                                      return _context.stop();
                                  }
                                }
                              }, _callee);
                            }));
                            return function (_x3) {
                              return _ref2.apply(this, arguments);
                            };
                          }());
                        }
                      case 14:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));
              return function (_x2) {
                return _ref.apply(this, arguments);
              };
            }());
          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _cars.apply(this, arguments);
}
function transformsTimes(_x) {
  return _transformsTimes.apply(this, arguments);
}
function _transformsTimes() {
  _transformsTimes = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(carDetails) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if ("created" in carDetails) carDetails["created"] = _moment["default"].unix(carDetails["created"]).toDate();
            if ("modified" in carDetails) carDetails["modified"] = _moment["default"].unix(carDetails["modified"]).toDate();
            if ("renewed" in carDetails) carDetails["renewed"] = _moment["default"].unix(carDetails["renewed"]).toDate();
            if (!"model" in carDetails) carDetails["model"] = {
              localized: "No info"
            };
            carDetails["timeStamp"] = new Date();
            carDetails["discarded"] = false;
          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _transformsTimes.apply(this, arguments);
}
var _default = {
  dataTransformer: dataTransformer,
  cars: cars,
  transformsTimes: transformsTimes
};
exports["default"] = _default;