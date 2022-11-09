"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var puppeteer = require("puppeteer");

function main() {
  return _main.apply(this, arguments);
}

function _main() {
  _main = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
    var browser, adIdsArray, mobile, elements;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return puppeteer.launch({
              headless: true
            });

          case 2:
            browser = _context3.sent;
            adIdsArray = [];
            _context3.next = 6;
            return browser.newPage();

          case 6:
            mobile = _context3.sent;
            _context3.next = 9;
            return mobile.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4272.0 Safari/537.36");

          case 9:
            _context3.next = 11;
            return mobile["goto"]("https://suchen.mobile.de/fahrzeuge/search.html?damageUnrepaired=NO_DAMAGE_UNREPAIRED&isSearchRequest=true&scopeId=C&sfmr=false&sortOption.sortBy=creationTime&sortOption.sortOrder=DESCENDING");

          case 11:
            _context3.next = 13;
            return mobile.$$("a[data-ad-id]");

          case 13:
            elements = _context3.sent;
            elements.map( /*#__PURE__*/function () {
              var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(el, index) {
                var idAD;
                return _regenerator["default"].wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return mobile.evaluate(function (link) {
                          return link.getAttribute('data-ad-id');
                        }, el).then(function (result) {
                          return result;
                        });

                      case 2:
                        idAD = _context2.sent;
                        adIdsArray.push(idAD);

                      case 4:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x, _x2) {
                return _ref2.apply(this, arguments);
              };
            }());
            _context3.next = 17;
            return console.log("ad:", adIdsArray);

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _main.apply(this, arguments);
}

(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return main();

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))();