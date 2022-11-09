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

var handlers;
var mobile;

var HandlersDAO = /*#__PURE__*/function () {
  function HandlersDAO() {
    (0, _classCallCheck2["default"])(this, HandlersDAO);
  }

  (0, _createClass2["default"])(HandlersDAO, null, [{
    key: "injectDB",
    value: function () {
      var _injectDB = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(conn) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!handlers) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _context.prev = 2;
                _context.next = 5;
                return conn.db(process.env.DB_NAME);

              case 5:
                mobile = _context.sent;
                _context.next = 8;
                return conn.db(process.env.DB_NAME).collection("handlers");

              case 8:
                handlers = _context.sent;
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](2);
                console.error("Unable to establish a collection handle in Mobile: ".concat(_context.t0));

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 11]]);
      }));

      function injectDB(_x) {
        return _injectDB.apply(this, arguments);
      }

      return injectDB;
    }()
  }, {
    key: "nameSearchQuery",
    value: function nameSearchQuery(text) {
      var query = {
        $text: {
          $search: text
        }
      };
      var meta_score = {
        $meta: "textScore"
      };
      var sort = [["score", meta_score]];
      var project = {
        score: meta_score
      };
      return {
        query: query,
        project: project,
        sort: sort
      };
    }
    /**
     *
     * @param url
     * @param filters
     * @param page
     * @param moviesPerPage
     * @returns {Promise<*>}
     */

  }, {
    key: "getHandlers",
    value: function () {
      var _getHandlers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var _ref,
            _ref$url,
            url,
            _ref$filters,
            filters,
            _ref$page,
            page,
            queryParams,
            _queryParams,
            _queryParams$query,
            query,
            _queryParams$project,
            project,
            _queryParams$sort,
            sort,
            _args2 = arguments;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _ref = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {}, _ref$url = _ref.url, url = _ref$url === void 0 ? null : _ref$url, _ref$filters = _ref.filters, filters = _ref$filters === void 0 ? null : _ref$filters, _ref$page = _ref.page, page = _ref$page === void 0 ? 0 : _ref$page;
                queryParams = {};

                if (filters) {
                  if ("text" in filters) {
                    queryParams = this.nameSearchQuery(filters["name"]);
                  }
                }

                _queryParams = queryParams, _queryParams$query = _queryParams.query, query = _queryParams$query === void 0 ? {} : _queryParams$query, _queryParams$project = _queryParams.project, project = _queryParams$project === void 0 ? {} : _queryParams$project, _queryParams$sort = _queryParams.sort, sort = _queryParams$sort === void 0 ? {} : _queryParams$sort;
                _context2.next = 6;
                return handlers.find(query).project(project).sort(sort).toArray();

              case 6:
                return _context2.abrupt("return", _context2.sent);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getHandlers() {
        return _getHandlers.apply(this, arguments);
      }

      return getHandlers;
    }()
    /**
     *
     * @param {string} url
     * @returns {Promise<void>}
     */

  }, {
    key: "getHandlerByURL",
    value: function () {
      var _getHandlerByURL = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(url) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return handlers.find({
                  url: url
                }).toArray();

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getHandlerByURL(_x2) {
        return _getHandlerByURL.apply(this, arguments);
      }

      return getHandlerByURL;
    }()
    /**
     *
     * @param {Object} handler
     * @returns {Promise<void>}
     */

  }, {
    key: "postHandlers",
    value: function () {
      var _postHandlers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(handler) {
        var handlerInsert;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return handlers.insertOne(handler);

              case 3:
                handlerInsert = _context4.sent;
                _context4.next = 6;
                return handlerInsert.result;

              case 6:
                return _context4.abrupt("return", _context4.sent);

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](0);
                return _context4.abrupt("return", {
                  error: _context4.t0.message
                });

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 9]]);
      }));

      function postHandlers(_x3) {
        return _postHandlers.apply(this, arguments);
      }

      return postHandlers;
    }()
  }, {
    key: "getConfiguration",
    value: function () {
      var _getConfiguration = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", handlers.s.db.s.options);

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function getConfiguration() {
        return _getConfiguration.apply(this, arguments);
      }

      return getConfiguration;
    }()
  }, {
    key: "deleteHandler",
    value: function () {
      var _deleteHandler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(id) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return handlers.deleteOne({
                  _id: id.id
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

      function deleteHandler(_x4) {
        return _deleteHandler.apply(this, arguments);
      }

      return deleteHandler;
    }()
  }]);
  return HandlersDAO;
}();
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


exports["default"] = HandlersDAO;