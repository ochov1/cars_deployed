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
var AdsMiddleware = /*#__PURE__*/function () {
  function AdsMiddleware() {
    (0, _classCallCheck2["default"])(this, AdsMiddleware);
  }
  (0, _createClass2["default"])(AdsMiddleware, null, [{
    key: "dataTransforms",
    value:
    /**
     * @param {Array} ad
     * @returns {Promise<*[]>}
     */
    function () {
      var _dataTransforms = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(ad) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                ad.map(function (el, index) {
                  ad[index] = {
                    adID: parseInt(el),
                    fetch: false,
                    priority: 0
                  };
                });
              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      function dataTransforms(_x) {
        return _dataTransforms.apply(this, arguments);
      }
      return dataTransforms;
    }()
  }]);
  return AdsMiddleware;
}();
exports["default"] = AdsMiddleware;