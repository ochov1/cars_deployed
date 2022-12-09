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
var mobile;
var cars;
var MobileDAO = /*#__PURE__*/function () {
  function MobileDAO() {
    (0, _classCallCheck2["default"])(this, MobileDAO);
  }
  (0, _createClass2["default"])(MobileDAO, null, [{
    key: "injectDB",
    value: function () {
      var _injectDB = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(conn) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!mobile) {
                  _context.next = 2;
                  break;
                }
                return _context.abrupt("return");
              case 2:
                _context.prev = 2;
                _context.next = 5;
                return conn.db(process.env.DB_NAME).collection("cars");
              case 5:
                cars = _context.sent;
                _context.next = 11;
                break;
              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](2);
                console.error("Unable to establish a collection handle in Mobile: ".concat(_context.t0));
              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 8]]);
      }));
      function injectDB(_x) {
        return _injectDB.apply(this, arguments);
      }
      return injectDB;
    }()
  }, {
    key: "addCarsBulk",
    value: function () {
      var _addCarsBulk = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      function addCarsBulk() {
        return _addCarsBulk.apply(this, arguments);
      }
      return addCarsBulk;
    }()
    /**
     *
     * @param {Object} car
     * @returns {DAOResponse}
     */
  }, {
    key: "addCar",
    value: function () {
      var _addCar = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(car) {
        var existCar;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return this.findOneByCustomAdId(car['adID']);
              case 3:
                existCar = _context3.sent;
                if (existCar) {
                  _context3.next = 10;
                  break;
                }
                _context3.next = 7;
                return cars.insertOne(car);
              case 7:
                return _context3.abrupt("return", _context3.sent);
              case 10:
                return _context3.abrupt("return", {
                  error: "exist"
                });
              case 11:
                _context3.next = 17;
                break;
              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](0);
                console.error("Unable to insert car", _context3.t0);
                return _context3.abrupt("return", {
                  error: _context3.t0
                });
              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 13]]);
      }));
      function addCar(_x2) {
        return _addCar.apply(this, arguments);
      }
      return addCar;
    }()
  }, {
    key: "removeCars",
    value: function () {
      var _removeCars = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return cars.updateMany({
                  'adID': parseInt(id)
                }, {
                  $set: {
                    'discarded': true
                  }
                }, {
                  multi: true
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
      function removeCars(_x3) {
        return _removeCars.apply(this, arguments);
      }
      return removeCars;
    }()
  }, {
    key: "getCars",
    value: function () {
      var _getCars = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
        var _ref,
          _ref$filters,
          filters,
          _ref$page,
          page,
          _ref$carsPerPage,
          carsPerPage,
          hCars,
          pipeline,
          updatePrints,
          _args5 = arguments;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _ref = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : {}, _ref$filters = _ref.filters, filters = _ref$filters === void 0 ? {} : _ref$filters, _ref$page = _ref.page, page = _ref$page === void 0 ? 1 : _ref$page, _ref$carsPerPage = _ref.carsPerPage, carsPerPage = _ref$carsPerPage === void 0 ? 50 : _ref$carsPerPage;
                filters["discarded"] = false;
                filters["prints"] = {
                  $lt: 10
                };
                hCars = [];
                _context5.prev = 4;
                pipeline = [{
                  '$match': {
                    'discarded': false,
                    'prints': {
                      '$lt': 10
                    }
                  }
                }, {
                  '$lookup': {
                    'from': 'carsDetails',
                    'localField': 'adID',
                    'foreignField': 'id',
                    'as': 'url'
                  }
                }, {
                  '$project': {
                    'url.url': 1,
                    'adID': 1,
                    'makeModelDescription': 1,
                    'firstRegistration': 1,
                    'mileage': 1,
                    'priceModel': 1,
                    'prints': 1
                  }
                }, {
                  '$skip': (page - 1) * carsPerPage
                }, {
                  '$limit': carsPerPage
                }, {
                  '$sort': {
                    'makeModelDescription': 1
                  }
                }];
                _context5.next = 8;
                return cars.aggregate(pipeline).toArray();
              case 8:
                hCars = _context5.sent;
                if (!(hCars.length !== 0)) {
                  _context5.next = 13;
                  break;
                }
                updatePrints = hCars.map(function (vehicles) {
                  return {
                    updateOne: {
                      "filter": {
                        adID: vehicles.adID
                      },
                      "update": {
                        $set: {
                          "prints": vehicles.prints + 1
                        }
                      }
                    }
                  };
                });
                _context5.next = 13;
                return cars.bulkWrite(updatePrints);
              case 13:
                return _context5.abrupt("return", hCars);
              case 16:
                _context5.prev = 16;
                _context5.t0 = _context5["catch"](4);
                console.log(_context5.t0);
              case 19:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[4, 16]]);
      }));
      function getCars() {
        return _getCars.apply(this, arguments);
      }
      return getCars;
    }()
    /**
     *
     * @param adId
     * @returns {Promise<*|{error}>}
     */
  }, {
    key: "findOneByCustomAdId",
    value: function () {
      var _findOneByCustomAdId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(adId) {
        var pipeline;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                pipeline = [{
                  '$match': {
                    'adID': adId
                  }
                }];
                _context6.next = 4;
                return cars.aggregate(pipeline).next();
              case 4:
                return _context6.abrupt("return", _context6.sent);
              case 7:
                _context6.prev = 7;
                _context6.t0 = _context6["catch"](0);
                console.error("Unable to find this ad: ");
                return _context6.abrupt("return", {
                  error: _context6.t0
                });
              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 7]]);
      }));
      function findOneByCustomAdId(_x4) {
        return _findOneByCustomAdId.apply(this, arguments);
      }
      return findOneByCustomAdId;
    }()
    /**
     *
     * @returns {Promise<*|{error}>}
     */
  }, {
    key: "fetchAllAds",
    value: function () {
      var _fetchAllAds = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return cars.find({
                  $query: {},
                  $orderby: {
                    $natural: -1
                  }
                }).limit(200).toArray();
              case 3:
                return _context7.abrupt("return", _context7.sent);
              case 6:
                _context7.prev = 6;
                _context7.t0 = _context7["catch"](0);
                console.error("Unable to find this ad: ", _context7.t0);
                return _context7.abrupt("return", {
                  error: _context7.t0
                });
              case 10:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[0, 6]]);
      }));
      function fetchAllAds() {
        return _fetchAllAds.apply(this, arguments);
      }
      return fetchAllAds;
    }()
    /**
     *
     * @param {Array} carsArray
     * @returns {Promise<void>}
     */
  }, {
    key: "removeMultipleCars",
    value: function () {
      var _removeMultipleCars = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(carsArray) {
        var pipeline;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                pipeline = [{
                  '$match': {
                    'discarded': false
                  }
                }, {
                  '$facet': {
                    'categorizedByMake': [{
                      '$sortByCount': '$make.localized'
                    }],
                    'categorizedByPrice': [{
                      '$match': {
                        'price': {
                          '$exists': 1
                        }
                      }
                    }, {
                      '$bucketAuto': {
                        'groupBy': '$price.grs.amount',
                        'buckets': 5
                      }
                    }],
                    'categorizedByPriceRating': [{
                      '$sortByCount': '$priceRating.rating'
                    }],
                    'categorizedByCarType': [{
                      '$sortByCount': '$category'
                    }]
                  }
                }];
                return _context8.abrupt("return", cars.bulkWrite(carsArray, {
                  ordered: false
                }));
              case 5:
                _context8.prev = 5;
                _context8.t0 = _context8["catch"](0);
              case 7:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[0, 5]]);
      }));
      function removeMultipleCars(_x5) {
        return _removeMultipleCars.apply(this, arguments);
      }
      return removeMultipleCars;
    }()
  }]);
  return MobileDAO;
}();
/**
 * Success/Error return object
 * @typedef DAOResponse
 * @property {boolean} [success] - Success
 * @property {string} [error] - Error
 */
/**
 *A car from cars
 *@typedef CarsCtrl
 * @property {string} _id
 * @property {string} adID
 * @property {string} body
 * @property {string} climatisation
 * @property {string} firstRegistration
 * @property {string} fuelConsumption
 * @property {string} fuelType
 * @property {string} image
 * @property {string} makeModelDescription
 * @property {string} mileage
 * @property {string} power
 * @property {string} priceModel
 * @property {string} transmission
 * @property {string} usageType
 * @property {Date} date
 * @property {Handler} handler
 */
/**
 * The handler
 * @typedef Handler
 * @property {string} handlerName
 * @property {string} street
 * @property {string} number
 * @property {string} zip
 * @property {string} city
 * @property {string} country
 * @property {string} phoneNumber
 * @property {string} mobilePhoneNumber
 * @property {string} webPage
 */
exports["default"] = MobileDAO;