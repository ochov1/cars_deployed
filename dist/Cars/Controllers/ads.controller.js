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
var _adsDao = _interopRequireDefault(require("../DAO/adsDao.js"));
var AdsController = /*#__PURE__*/function () {
  function AdsController() {
    (0, _classCallCheck2["default"])(this, AdsController);
  }
  (0, _createClass2["default"])(AdsController, null, [{
    key: "insertNewAd",
    value:
    /**
     *
     * @param {string} adID
     * @returns {Promise<void>}
     */
    function () {
      var _insertNewAd = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(adID) {
        var ad;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                ad = {
                  adID: adID,
                  parsed: false
                };
                _context.next = 3;
                return _adsDao["default"].insertOne(ad);
              case 3:
                return _context.abrupt("return", _context.sent);
              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      function insertNewAd(_x) {
        return _insertNewAd.apply(this, arguments);
      }
      return insertNewAd;
    }()
    /**
     * @param {object} ad
     * @returns {Promise<void>}
     */
  }, {
    key: "updateAd",
    value: function () {
      var _updateAd = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(ad) {
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
      function updateAd(_x2) {
        return _updateAd.apply(this, arguments);
      }
      return updateAd;
    }()
  }]);
  return AdsController;
}();
exports["default"] = AdsController;