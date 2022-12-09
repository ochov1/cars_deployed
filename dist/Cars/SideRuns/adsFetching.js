"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = adsFetching;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _adsDAO = _interopRequireDefault(require("../DAO/adsDAO.js"));
var _carsDetailsDAO = _interopRequireDefault(require("../DAO/carsDetailsDAO.js"));
var _puppeteer = _interopRequireDefault(require("puppeteer"));
var _carsMiddlewares = require("../Middlewares/carsMiddlewares");
var _logsDAO = _interopRequireDefault(require("../DAO/logsDAO"));
/**
 *
 * @param {Object} detailed
 * @returns {Promise<boolean>}
 */
var checkIfIsAvailable = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(detailed) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", detailed["version"] !== 0 && "created" in detailed && detailed["version"] > 0);
          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function checkIfIsAvailable(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 *
 * @returns {Promise<string>}
 */
function adsFetching() {
  return _adsFetching.apply(this, arguments);
}
function _adsFetching() {
  _adsFetching = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var ads, log, browser, mobile, adUpdate, detailed, i, adsNo, error, isAvailable;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _logsDAO["default"].composeLog("Time scheduled", null, "Fetching cars.", null, null);
          case 2:
            log = _context2.sent;
          case 3:
            _context2.next = 5;
            return _puppeteer["default"].launch({
              headless: true,
              args: ['--lang=de-DE,de', '--no-first-run', '--disable-setuid-sandbox', '--disable-gpu', '--no-sandbox']
            });
          case 5:
            browser = _context2.sent;
            _context2.next = 8;
            return browser.newPage();
          case 8:
            mobile = _context2.sent;
            _context2.next = 11;
            return mobile.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4272.0 Safari/537.36");
          case 11:
            _context2.next = 13;
            return mobile.setExtraHTTPHeaders({
              "accept-language": "en-US,en;q=0.9,es;q=0.8"
            });
          case 13:
            _context2.next = 15;
            return _adsDAO["default"].getUnFetchedAds();
          case 15:
            ads = _context2.sent;
            console.log("Getting 100...");
            if (!(ads.length === 0)) {
              _context2.next = 20;
              break;
            }
            _context2.next = 20;
            return mobile.waitForTimeout(10000);
          case 20:
            if (ads.length === 0) {
              _context2.next = 13;
              break;
            }
          case 21:
            adUpdate = void 0;
            detailed = void 0;
            i = 0;
            adsNo = ads.length;
            error = false;
          case 26:
            _context2.prev = 26;
            _context2.next = 29;
            return mobile["goto"]("https://home.mobile.de/home/svc/a/" + ads[i].adID + ".json");
          case 29:
            _context2.next = 31;
            return mobile.waitForSelector("pre");
          case 31:
            _context2.next = 33;
            return mobile.waitForTimeout(5000);
          case 33:
            _context2.next = 35;
            return mobile.$eval("pre", function (el) {
              return el.innerHTML;
            });
          case 35:
            detailed = _context2.sent;
            _context2.next = 38;
            return JSON.parse(detailed);
          case 38:
            detailed = _context2.sent;
            _context2.next = 41;
            return (0, _carsMiddlewares.transformsTimes)(detailed);
          case 41:
            _context2.next = 43;
            return checkIfIsAvailable(detailed);
          case 43:
            isAvailable = _context2.sent;
            if (!isAvailable) {
              _context2.next = 47;
              break;
            }
            _context2.next = 47;
            return _carsDetailsDAO["default"].insertOne(detailed);
          case 47:
            _context2.next = 55;
            break;
          case 49:
            _context2.prev = 49;
            _context2.t0 = _context2["catch"](26);
            error = true;
            _context2.next = 54;
            return _adsDAO["default"].setAdFetched(ads[i]);
          case 54:
            adUpdate = _context2.sent;
          case 55:
            if (!error) {
              _context2.next = 58;
              break;
            }
            _context2.next = 58;
            return mobile.reload();
          case 58:
            _context2.next = 60;
            return _adsDAO["default"].setAdFetched(ads[i]);
          case 60:
            adUpdate = _context2.sent;
            i += 1;
          case 62:
            if (i < adsNo || error) {
              _context2.next = 26;
              break;
            }
          case 63:
            _context2.next = 65;
            return browser.close();
          case 65:
            if (ads.length > 0) {
              _context2.next = 3;
              break;
            }
          case 66:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[26, 49]]);
  }));
  return _adsFetching.apply(this, arguments);
}