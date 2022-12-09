"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _server = _interopRequireDefault(require("./server.js"));
var http = _interopRequireWildcard(require("http"));
var _process = _interopRequireDefault(require("process"));
var _mongodb = require("mongodb");
var _carsDAO = _interopRequireDefault(require("./Cars/DAO/carsDAO"));
var _handlersDAO = _interopRequireDefault(require("./Cars/DAO/handlersDAO"));
var _logsDAO = _interopRequireDefault(require("./Cars/DAO/logsDAO"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _adsDAO = _interopRequireDefault(require("./Cars/DAO/adsDAO"));
var _carsDetailsDAO = _interopRequireDefault(require("./Cars/DAO/carsDetailsDAO"));
var _socket = require("socket.io");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
//import adsFetching from "./Cars/SideRuns/adsFetching";
function main() {
  return _main.apply(this, arguments);
}
function _main() {
  _main = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var environment, server, io, adsArray, port, server_host, DB_URI, client;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            environment = _process["default"].env.NODE_ENV || "dev";
            server = http.createServer(_server["default"]);
            io = new _socket.Server(server, {
              cors: {
                origin: _process["default"].env.FRONT_END_IP
              }
            });
            _dotenv["default"].config();
            io.on('connection', function (socket) {
              global.io = io;
            });
            adsArray = [];
            port = _process["default"].env.PORT || 4001;
            server_host = _process["default"].env.YOUR_HOST || '127.0.0.1';
            DB_URI = _process["default"].env.BD_URI_PROD;
            _context2.next = 11;
            return server.listen(port, "", function () {
              console.log("listening on port ".concat(port, " host ").concat(server_host));
            });
          case 11:
            _context2.prev = 11;
            _context2.next = 14;
            return _mongodb.MongoClient.connect(DB_URI);
          case 14:
            client = _context2.sent;
            if (!client) console.log("ERROR MongoDB");
            if (!client) {
              _context2.next = 29;
              break;
            }
            console.log("Connected to MongoDB");
            _context2.next = 20;
            return _carsDAO["default"].injectDB(client);
          case 20:
            _context2.next = 22;
            return _handlersDAO["default"].injectDB(client);
          case 22:
            _context2.next = 24;
            return _logsDAO["default"].injectDB(client);
          case 24:
            _context2.next = 26;
            return _carsDetailsDAO["default"].injectDB(client);
          case 26:
            _context2.next = 28;
            return _adsDAO["default"].injectDB(client);
          case 28:
            //await carsMiddlewares.cars();
            if (environment === "dev") try {

              // await adsFetching();
            } catch (e) {
              console.log(e.message);
            }
          case 29:
            _context2.next = 34;
            break;
          case 31:
            _context2.prev = 31;
            _context2.t0 = _context2["catch"](11);
            console.log(_context2.t0.message);
          case 34:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[11, 31]]);
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