"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _vehicles = _interopRequireDefault(require("../routes/vehicles.routes"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var mobile;
var carsDetails;

var carsDetailsDAO = /*#__PURE__*/function () {
  function carsDetailsDAO() {
    (0, _classCallCheck2["default"])(this, carsDetailsDAO);
  }

  (0, _createClass2["default"])(carsDetailsDAO, null, [{
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
                return conn.db(process.env.DB_NAME).collection("carsDetails");

              case 5:
                carsDetails = _context.sent;
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
    /**
     *Insetting an array of carsDetails
     * @param {Array} ids
     * @returns {Promise<void>}
     */

  }, {
    key: "insertBulk",
    value: function () {
      var _insertBulk = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(ids) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return carsDetails.insertMany(ids);

              case 3:
                return _context2.abrupt("return", _context2.sent);

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", _context2.t0);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 6]]);
      }));

      function insertBulk(_x2) {
        return _insertBulk.apply(this, arguments);
      }

      return insertBulk;
    }()
    /**
     * Inserting a ad.
     *
     * @param {Object} ad
     * @returns {Promise<void>}
     */

  }, {
    key: "insertOne",
    value: function () {
      var _insertOne = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(ad) {
        var exist, newAd;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return carsDetails.findOne({
                  id: ad.id
                });

              case 3:
                exist = _context3.sent;

                if (exist) {
                  _context3.next = 13;
                  break;
                }

                _context3.next = 7;
                return carsDetails.insertOne(ad);

              case 7:
                newAd = _context3.sent;
                _context3.next = 10;
                return newAd.insertedId;

              case 10:
                ad['_id'] = _context3.sent;

                if (ad['priceRating']["rating"] === 'VERY_GOOD_PRICE') {
                  io.emit("newcar", JSON.stringify(ad));
                }

                return _context3.abrupt("return", newAd);

              case 13:
                _context3.next = 18;
                break;

              case 15:
                _context3.prev = 15;
                _context3.t0 = _context3["catch"](0);
                return _context3.abrupt("return", _context3.t0);

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 15]]);
      }));

      function insertOne(_x3) {
        return _insertOne.apply(this, arguments);
      }

      return insertOne;
    }()
    /**
     * Update an existing ad.
     * @param {Object} ad
     * @returns {Promise<void>}
     */

  }, {
    key: "updateAd",
    value: function () {
      var _updateAd = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(ad) {
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

      function updateAd(_x4) {
        return _updateAd.apply(this, arguments);
      }

      return updateAd;
    }()
  }, {
    key: "getVehicles",
    value: function () {
      var _getVehicles = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
        var _ref,
            _ref$filters,
            filters,
            _ref$page,
            page,
            _ref$carsPerPage,
            carsPerPage,
            matchStage,
            sortStage,
            facetBrands,
            facetBrandsModels,
            countingPipeline,
            countingPipelineBrandAndModel,
            results,
            resultsBrandsAndModel,
            cars,
            _args5 = arguments;

        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _ref = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : {}, _ref$filters = _ref.filters, filters = _ref$filters === void 0 ? {} : _ref$filters, _ref$page = _ref.page, page = _ref$page === void 0 ? 1 : _ref$page, _ref$carsPerPage = _ref.carsPerPage, carsPerPage = _ref$carsPerPage === void 0 ? 20 : _ref$carsPerPage;
                filters = {
                  'priceRating.rating': 'VERY_GOOD_PRICE',
                  'price.grs.amount': {
                    '$exists': 1
                  },
                  'discarded': false
                };
                matchStage = {
                  $match: filters
                };
                sortStage = {
                  $sort: {
                    "timeStamp": -1
                  }
                };
                facetBrands = {
                  '$facet': {
                    'categorizedByBrand': [{
                      '$group': {
                        '_id': '$makeKey',
                        'count': {
                          '$sum': 1
                        }
                      }
                    }, {
                      '$sort': {
                        'count': -1
                      }
                    }]
                  }
                };
                facetBrandsModels = {
                  '$facet': {
                    'categorizedByBrandAndModel': [{
                      '$group': {
                        '_id': {
                          'make': '$make.localized',
                          'model': '$model.localized'
                        },
                        'count': {
                          '$sum': 1
                        }
                      }
                    }, {
                      '$sort': {
                        'count': -1
                      }
                    }]
                  }
                };
                countingPipeline = [matchStage, sortStage, facetBrands];
                countingPipelineBrandAndModel = [matchStage, sortStage, facetBrandsModels];
                _context5.prev = 8;
                _context5.next = 11;
                return carsDetails.aggregate(countingPipeline);

              case 11:
                _context5.next = 13;
                return _context5.sent.next();

              case 13:
                results = _context5.sent;
                _context5.next = 16;
                return carsDetails.aggregate(countingPipelineBrandAndModel);

              case 16:
                _context5.next = 18;
                return _context5.sent.next();

              case 18:
                resultsBrandsAndModel = _context5.sent;
                _context5.next = 21;
                return carsDetails.find(filters).sort({
                  $natural: -1
                }).skip((page - 1) * carsPerPage).limit(carsPerPage).project({
                  price: 1,
                  title: 1,
                  attributes: 1,
                  url: 1,
                  id: 1,
                  make: 1,
                  images: 1
                }).toArray();

              case 21:
                cars = _context5.sent;
                return _context5.abrupt("return", _objectSpread(_objectSpread({
                  cars: cars
                }, resultsBrandsAndModel), results));

              case 25:
                _context5.prev = 25;
                _context5.t0 = _context5["catch"](8);
                return _context5.abrupt("return", _context5.t0.message);

              case 28:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[8, 25]]);
      }));

      function getVehicles() {
        return _getVehicles.apply(this, arguments);
      }

      return getVehicles;
    }()
  }, {
    key: "discardVehicle",
    value: function () {
      var _discardVehicle = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(id) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return carsDetails.updateMany({
                  'id': parseInt(id)
                }, {
                  $set: {
                    'discarded': true
                  }
                }, {
                  multi: true
                });

              case 2:
                return _context6.abrupt("return", _context6.sent);

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function discardVehicle(_x5) {
        return _discardVehicle.apply(this, arguments);
      }

      return discardVehicle;
    }()
  }, {
    key: "getStartVehicle",
    value: function () {
      var _getStartVehicle = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8() {
        var brands, no, i, brand, vehicle;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                brands = ["Audi", "Mercedes-Benz", "BMW", "Volkswagen", "Opel", "Skoda"];
                i = 1;
                brand = [];
                vehicle = []; // random brand and cars

              case 4:
                _context8.next = 6;
                return Promise.all(brands.map( /*#__PURE__*/function () {
                  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(el, index) {
                    var filteredCars;
                    return _regenerator["default"].wrap(function _callee7$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            _context7.next = 2;
                            return carsDetails.countDocuments({
                              "make.localized": el,
                              discarded: false
                            });

                          case 2:
                            filteredCars = _context7.sent;
                            no = Math.floor(Math.random() * filteredCars);
                            _context7.next = 6;
                            return carsDetails.find({
                              "makeKey": el
                            }).project({
                              price: 1,
                              title: 1,
                              images: 1,
                              url: 1,
                              id: 1,
                              makeKey: 1,
                              attributes: 1,
                              model: 1
                            }).skip(no).limit(1).toArray();

                          case 6:
                            vehicle = _context7.sent;

                            if (!(vehicle.length > 0)) {
                              _context7.next = 12;
                              break;
                            }

                            if (vehicle[0]["model"] === undefined) vehicle[0]["model"] = {
                              localized: "no info."
                            };
                            vehicle[0].attributes.map(function (el) {
                              if (el.tag === "firstRegistration") vehicle[0]["year"] = el["value"];
                              if (el.tag === "fuel") vehicle[0]["fuel"] = el["value"];
                              if (el.tag === "mileage") vehicle[0]["mileage"] = el["value"].replace("&nbsp;", " ");
                            });
                            delete vehicle[0].attributes;
                            return _context7.abrupt("return", brand.push(vehicle[0]));

                          case 12:
                          case "end":
                            return _context7.stop();
                        }
                      }
                    }, _callee7);
                  }));

                  return function (_x6, _x7) {
                    return _ref2.apply(this, arguments);
                  };
                }()));

              case 6:
                i += 1;

              case 7:
                if (i <= 1) {
                  _context8.next = 4;
                  break;
                }

              case 8:
                return _context8.abrupt("return", brand);

              case 9:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function getStartVehicle() {
        return _getStartVehicle.apply(this, arguments);
      }

      return getStartVehicle;
    }()
  }, {
    key: "filterVehicles",
    value: function () {
      var _filterVehicles = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9() {
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                return _context9.abrupt("return", true);

              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      function filterVehicles() {
        return _filterVehicles.apply(this, arguments);
      }

      return filterVehicles;
    }()
  }]);
  return carsDetailsDAO;
}();

exports["default"] = carsDetailsDAO;