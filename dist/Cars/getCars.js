"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _puppeteer = _interopRequireDefault(require("puppeteer"));
var Cars = /*#__PURE__*/function () {
  function Cars() {
    (0, _classCallCheck2["default"])(this, Cars);
  }
  (0, _createClass2["default"])(Cars, null, [{
    key: "browserInit",
    value:
    /**
     *
     * @param {URL} url
     * @returns {Promise<Page>}
     */
    function () {
      var _browserInit = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(url) {
        var browser, mobile;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _puppeteer["default"].launch({
                  headless: true,
                  args: ['--lang=de-DE,de']
                });
              case 2:
                browser = _context.sent;
                _context.next = 5;
                return browser.newPage();
              case 5:
                mobile = _context.sent;
                _context.next = 8;
                return mobile.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4272.0 Safari/537.36");
              case 8:
                _context.next = 10;
                return mobile.setExtraHTTPHeaders({
                  "accept-language": "en-US,en;q=0.9,es;q=0.8"
                });
              case 10:
                return _context.abrupt("return", mobile["goto"](url.pathname));
              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      function browserInit(_x) {
        return _browserInit.apply(this, arguments);
      }
      return browserInit;
    }()
    /**
     *
     * @param id
     * @returns {Promise<*>}
     */
  }, {
    key: "getCarDetails",
    value: function () {
      var _getCarDetails = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
        var browser, mobile, urlDetails, details;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _puppeteer["default"].launch({
                  headless: true,
                  args: ['--lang=de-DE,de']
                });
              case 2:
                browser = _context2.sent;
                _context2.next = 5;
                return browser.newPage();
              case 5:
                mobile = _context2.sent;
                _context2.next = 8;
                return mobile.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4272.0 Safari/537.36");
              case 8:
                _context2.next = 10;
                return mobile.setExtraHTTPHeaders({
                  "accept-language": "en-US,en;q=0.9,es;q=0.8"
                });
              case 10:
                urlDetails = new URL("https://home.mobile.de/home/svc/a/" + id + ".json");
                _context2.next = 13;
                return mobile["goto"](urlDetails.protocol + urlDetails.hostname + urlDetails.pathname);
              case 13:
                _context2.next = 15;
                return mobile.$eval("pre", function (el) {
                  return el.innerHTML;
                });
              case 15:
                details = _context2.sent;
                _context2.next = 18;
                return browser.close();
              case 18:
                return _context2.abrupt("return", details);
              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      function getCarDetails(_x2) {
        return _getCarDetails.apply(this, arguments);
      }
      return getCarDetails;
    }()
    /**
     *
     * @returns {Promise<string[]>}
     */
  }, {
    key: "getAdsID",
    value: function () {
      var _getAdsID = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var browser, mobile, ids;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _puppeteer["default"].launch({
                  headless: true,
                  args: ['--lang=de-DE,de']
                });
              case 3:
                browser = _context3.sent;
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
                return mobile.waitForSelector("[data-listing-id]");
              case 13:
                _context3.next = 15;
                return mobile.$$eval("[data-listing-id]", function (ads) {
                  return ads.map(function (ad) {
                    return ad.getAttribute("data-listing-id");
                  });
                });
              case 15:
                ids = _context3.sent;
                _context3.next = 18;
                return browser.close();
              case 18:
                console.log(ids);
                return _context3.abrupt("return", ids);
              case 22:
                _context3.prev = 22;
                _context3.t0 = _context3["catch"](0);
                return _context3.abrupt("return", []);
              case 25:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 22]]);
      }));
      function getAdsID() {
        return _getAdsID.apply(this, arguments);
      }
      return getAdsID;
    }()
  }, {
    key: "getCars",
    value: function () {
      var _getCars = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(handlerWebAddress) {
        var _ret;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                return _context9.delegateYield( /*#__PURE__*/_regenerator["default"].mark(function _callee8() {
                  var browser, mobile, response, cars, error, carResponse;
                  return _regenerator["default"].wrap(function _callee8$(_context8) {
                    while (1) {
                      switch (_context8.prev = _context8.next) {
                        case 0:
                          _context8.next = 2;
                          return _puppeteer["default"].launch({
                            headless: true,
                            slowMo: 25
                          });
                        case 2:
                          browser = _context8.sent;
                          _context8.next = 5;
                          return browser.newPage();
                        case 5:
                          mobile = _context8.sent;
                          _context8.next = 8;
                          return mobile.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4272.0 Safari/537.36");
                        case 8:
                          _context8.next = 10;
                          return mobile["goto"](handlerWebAddress);
                        case 10:
                          _context8.next = 12;
                          return mobile.waitForResponse( /*#__PURE__*/function () {
                            var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(response) {
                              return _regenerator["default"].wrap(function _callee4$(_context4) {
                                while (1) {
                                  switch (_context4.prev = _context4.next) {
                                    case 0:
                                      if (!(response.url().includes("home.mobile.de/home/ses.html") && response.status() === 200)) {
                                        _context4.next = 2;
                                        break;
                                      }
                                      return _context4.abrupt("return", response);
                                    case 2:
                                    case "end":
                                      return _context4.stop();
                                  }
                                }
                              }, _callee4);
                            }));
                            return function (_x4) {
                              return _ref.apply(this, arguments);
                            };
                          }());
                        case 12:
                          response = _context8.sent;
                          _context8.next = 15;
                          return response.json().then( /*#__PURE__*/function () {
                            var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(response) {
                              return _regenerator["default"].wrap(function _callee5$(_context5) {
                                while (1) {
                                  switch (_context5.prev = _context5.next) {
                                    case 0:
                                      _context5.next = 2;
                                      return response['searchResultItems'];
                                    case 2:
                                      return _context5.abrupt("return", _context5.sent);
                                    case 3:
                                    case "end":
                                      return _context5.stop();
                                  }
                                }
                              }, _callee5);
                            }));
                            return function (_x5) {
                              return _ref2.apply(this, arguments);
                            };
                          }());
                        case 15:
                          cars = _context8.sent;
                          _context8.next = 18;
                          return mobile.waitForSelector(".mde-consent-accept-btn");
                        case 18:
                          _context8.next = 20;
                          return mobile.click(".mde-consent-accept-btn");
                        case 20:
                          error = false;
                        case 21:
                          _context8.prev = 21;
                          _context8.next = 24;
                          return mobile.waitForSelector("div.moreResults > button", {
                            timeout: 2000
                          });
                        case 24:
                          _context8.next = 26;
                          return mobile.$eval("div.moreResults > button", function (e) {
                            e.scrollIntoView({
                              block: 'end',
                              inline: 'end'
                            });
                          });
                        case 26:
                          _context8.next = 34;
                          break;
                        case 28:
                          _context8.prev = 28;
                          _context8.t0 = _context8["catch"](21);
                          _context8.next = 32;
                          return browser.close();
                        case 32:
                          console.log("not found");
                          error = true;
                        case 34:
                          if (error) {
                            _context8.next = 50;
                            break;
                          }
                          _context8.prev = 35;
                          _context8.next = 38;
                          return mobile.click("#ses > div.ses > div.moreResults > button");
                        case 38:
                          _context8.next = 45;
                          break;
                        case 40:
                          _context8.prev = 40;
                          _context8.t1 = _context8["catch"](35);
                          _context8.next = 44;
                          return browser.close();
                        case 44:
                          return _context8.abrupt("return", {
                            v: cars
                          });
                        case 45:
                          _context8.next = 47;
                          return mobile.waitForResponse( /*#__PURE__*/function () {
                            var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(response) {
                              return _regenerator["default"].wrap(function _callee6$(_context6) {
                                while (1) {
                                  switch (_context6.prev = _context6.next) {
                                    case 0:
                                      if (!(response.url().includes("home.mobile.de/home/ses.html") && response.status() === 200)) {
                                        _context6.next = 2;
                                        break;
                                      }
                                      return _context6.abrupt("return", response);
                                    case 2:
                                    case "end":
                                      return _context6.stop();
                                  }
                                }
                              }, _callee6);
                            }));
                            return function (_x6) {
                              return _ref3.apply(this, arguments);
                            };
                          }());
                        case 47:
                          carResponse = _context8.sent;
                          _context8.next = 50;
                          return carResponse.json().then( /*#__PURE__*/function () {
                            var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(response) {
                              return _regenerator["default"].wrap(function _callee7$(_context7) {
                                while (1) {
                                  switch (_context7.prev = _context7.next) {
                                    case 0:
                                      _context7.next = 2;
                                      return response['searchResultItems'].map(function (el) {
                                        cars.push(el);
                                      });
                                    case 2:
                                    case "end":
                                      return _context7.stop();
                                  }
                                }
                              }, _callee7);
                            }));
                            return function (_x7) {
                              return _ref4.apply(this, arguments);
                            };
                          }());
                        case 50:
                          if (!error) {
                            _context8.next = 21;
                            break;
                          }
                        case 51:
                          _context8.next = 53;
                          return browser.close();
                        case 53:
                          return _context8.abrupt("return", {
                            v: cars
                          });
                        case 54:
                        case "end":
                          return _context8.stop();
                      }
                    }
                  }, _callee8, null, [[21, 28], [35, 40]]);
                })(), "t0", 2);
              case 2:
                _ret = _context9.t0;
                if (!((0, _typeof2["default"])(_ret) === "object")) {
                  _context9.next = 5;
                  break;
                }
                return _context9.abrupt("return", _ret.v);
              case 5:
                _context9.next = 10;
                break;
              case 7:
                _context9.prev = 7;
                _context9.t1 = _context9["catch"](0);
                return _context9.abrupt("return", _context9.t1);
              case 10:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, null, [[0, 7]]);
      }));
      function getCars(_x3) {
        return _getCars.apply(this, arguments);
      }
      return getCars;
    }()
  }, {
    key: "getHandlerDetails",
    value: function () {
      var _getHandlerDetails = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(handler) {
        var browser, mobile, imageWait, image, address, name, phonesNumber, addressArray;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return _puppeteer["default"].launch();
              case 2:
                browser = _context10.sent;
                _context10.next = 5;
                return browser.newPage();
              case 5:
                mobile = _context10.sent;
                _context10.next = 8;
                return mobile.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4272.0 Safari/537.36");
              case 8:
                _context10.next = 10;
                return mobile["goto"](handler.replace("#ses", "#contact"));
              case 10:
                _context10.next = 12;
                return mobile.waitForSelector("address > span.address");
              case 12:
                _context10.next = 14;
                return mobile.waitForSelector("address > strong");
              case 14:
                _context10.next = 16;
                return mobile.waitForSelector("address > span.dealerType");
              case 16:
                imageWait = false;
                image = "";
                _context10.prev = 18;
                _context10.next = 21;
                return mobile.waitForSelector("#header > div.navbar.navbar-top > div > div > div.row.brand.span6.img > div.dealerLogo > img", {
                  timeout: 1000
                });
              case 21:
                imageWait = _context10.sent;
                _context10.next = 27;
                break;
              case 24:
                _context10.prev = 24;
                _context10.t0 = _context10["catch"](18);
                console.log("error");
              case 27:
                _context10.next = 29;
                return mobile.$eval("address > span.address", function (e) {
                  return e.innerHTML;
                });
              case 29:
                address = _context10.sent;
                _context10.next = 32;
                return mobile.$eval("address > strong", function (e) {
                  return e.innerHTML;
                });
              case 32:
                name = _context10.sent;
                _context10.next = 35;
                return mobile.$eval("#contact > div.row-fluid.contact > div.span12.left > address > div > div.phoneNumbers.hidden-phone.dealerContactPhoneNumbers", function (e) {
                  return e.innerHTML;
                });
              case 35:
                phonesNumber = _context10.sent;
                addressArray = address.split("<br>");
                if (!imageWait) {
                  _context10.next = 44;
                  break;
                }
                _context10.next = 40;
                return mobile.$eval("#header > div.navbar.navbar-top > div > div > div.row.brand.span6.img > div.dealerLogo > img", function (e) {
                  return e.getAttribute("src");
                });
              case 40:
                image = _context10.sent;
                addressArray.push(name, phonesNumber.replaceAll("<br>", ""), image.replaceAll("<br>", ""));
                _context10.next = 45;
                break;
              case 44:
                addressArray.push(name, phonesNumber.replaceAll("<br>", ""));
              case 45:
                _context10.next = 47;
                return browser.close();
              case 47:
                return _context10.abrupt("return", addressArray);
              case 48:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, null, [[18, 24]]);
      }));
      function getHandlerDetails(_x8) {
        return _getHandlerDetails.apply(this, arguments);
      }
      return getHandlerDetails;
    }()
  }, {
    key: "cars",
    value: function () {
      var _cars = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(handler) {
        var carsArray, _cars2;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.prev = 0;
                carsArray = [];
                _context12.next = 4;
                return this.getCars(handler);
              case 4:
                _cars2 = _context12.sent;
                _context12.next = 7;
                return _cars2.map( /*#__PURE__*/function () {
                  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(car) {
                    return _regenerator["default"].wrap(function _callee11$(_context11) {
                      while (1) {
                        switch (_context11.prev = _context11.next) {
                          case 0:
                            try {
                              carsArray.push({
                                adID: car.adId,
                                body: car.bodyType.value,
                                climatisation: car.climatisation.value,
                                firstRegistration: car.firstRegistration.value,
                                fuelConsumption: "",
                                fuelType: car.fuelType.value,
                                image: car.image.src,
                                makeModelDescription: car.makeModelDescription.value,
                                mileage: car.mileage.value,
                                power: car.power.value,
                                priceModel: car.priceModel.primaryPrice.countryOfSale.value,
                                secondaryPrice: car.priceModel.secondaryPrice.countryOfSale.value,
                                transmission: car.transmission.value,
                                usageType: car.usageType.value
                              });
                            } catch (e) {
                              console.log(e.message);
                            }
                          case 1:
                          case "end":
                            return _context11.stop();
                        }
                      }
                    }, _callee11);
                  }));
                  return function (_x10) {
                    return _ref5.apply(this, arguments);
                  };
                }());
              case 7:
                carsArray.date = new Date();
                return _context12.abrupt("return", carsArray);
              case 11:
                _context12.prev = 11;
                _context12.t0 = _context12["catch"](0);
                console.log(_context12.t0.message);
              case 14:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this, [[0, 11]]);
      }));
      function cars(_x9) {
        return _cars.apply(this, arguments);
      }
      return cars;
    }()
  }]);
  return Cars;
}();
exports["default"] = Cars;