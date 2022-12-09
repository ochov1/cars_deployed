"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _process = _interopRequireDefault(require("process"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _index = _interopRequireDefault(require("./Cars/routes/index"));
_process["default"].setMaxListeners(0);
//import middleware from "./Cars/Middlewares/middlewares";

var allowList = _process["default"].env.ALLOWED_FRONT_END;
var corsOptions = function corsOptions(req, callback) {
  var corsOptions;
  if (allowList.indexOf(req.header('Origin')) !== -1) {
    corsOptions = {
      credentials: true,
      origin: true,
      methods: ['GET', 'PUT', 'POST', 'SEARCH', 'PATCH', 'PUT', 'DELETE']
    }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = {
      credentials: true,
      origin: false
    }; // disable CORS for this request
  }

  callback(null, corsOptions);
};
var app = (0, _express["default"])();
_process["default"].env.NODE_ENV !== "production" && app.use((0, _morgan["default"])("dev"));
app.use((0, _cors["default"])(corsOptions));
if (_process["default"].env.NODE_ENV === "dev") {
  //middleware(app);
}
app.use("/", _express["default"]["static"]("build"));
(0, _index["default"])(app);
var _default = app;
exports["default"] = _default;