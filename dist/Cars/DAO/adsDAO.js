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
var ads;

var AdsDAO = /*#__PURE__*/function () {
  function AdsDAO() {
    (0, _classCallCheck2["default"])(this, AdsDAO);
  }

  (0, _createClass2["default"])(AdsDAO, null, [{
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
                return conn.db(process.env.DB_NAME).collection("ads");

              case 5:
                ads = _context.sent;
                return _context.abrupt("return", ads);

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](2);
                console.error("Unable to establish a collection handle in Mobile: ".concat(_context.t0));

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 9]]);
      }));

      function injectDB(_x) {
        return _injectDB.apply(this, arguments);
      }

      return injectDB;
    }()
    /**
     *Insetting an array of ads
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
                return ads.insertMany(ids, {
                  ordered: false
                });

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
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return ads.insertOne(ad);

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3["catch"](0);
                return _context3.abrupt("return", _context3.t0);

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 6]]);
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
    key: "setAdFetched",
    value: function () {
      var _setAdFetched = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(ad) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return ads.updateMany({
                  'adID': ad.adID
                }, {
                  $set: {
                    'fetch': true
                  }
                });

              case 3:
                return _context4.abrupt("return", _context4.sent);

              case 6:
                _context4.prev = 6;
                _context4.t0 = _context4["catch"](0);
                return _context4.abrupt("return", _context4.t0);

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 6]]);
      }));

      function setAdFetched(_x4) {
        return _setAdFetched.apply(this, arguments);
      }

      return setAdFetched;
    }()
  }, {
    key: "getUnFetchedAds",
    value: function () {
      var _getUnFetchedAds = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
        var unFetched;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                unFetched = ads.find({
                  'priority': {
                    $lte: 1
                  },
                  'fetch': false
                }).sort({
                  priority: -1
                }).limit(100);
                return _context5.abrupt("return", unFetched.toArray());

              case 5:
                _context5.prev = 5;
                _context5.t0 = _context5["catch"](0);
                console.log(_context5.t0.message);

              case 8:
                return _context5.abrupt("return", []);

              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 5]]);
      }));

      function getUnFetchedAds() {
        return _getUnFetchedAds.apply(this, arguments);
      }

      return getUnFetchedAds;
    }()
    /**
     *
     * @param {string} id
     * @returns {Promise<*>}
     */

  }, {
    key: "deleteAds",
    value: function () {
      var _deleteAds = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(id) {
        var query;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                query = {
                  adID: id['adID']
                };
                return _context6.abrupt("return", ads.deleteMany(query).then(function (result) {
                  return result;
                })["catch"](function (err) {
                  return console.log(err);
                }));

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function deleteAds(_x5) {
        return _deleteAds.apply(this, arguments);
      }

      return deleteAds;
    }()
  }]);
  return AdsDAO;
}();

exports["default"] = AdsDAO;