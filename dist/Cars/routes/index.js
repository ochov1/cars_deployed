"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _carsRoutes = _interopRequireDefault(require("./cars.routes.js"));

var _vehicles = _interopRequireDefault(require("./vehicles.routes"));

var routes = function routes(app) {
  app.use("/api/v1/cars", _carsRoutes["default"]); //app.use("/api/v1/handlers", handlers);

  app.use("/api/v1/vehicles", _vehicles["default"]);
  app.use("*", function (req, res) {
    return res.status(404).json({
      error: "not found"
    });
  });
};

var _default = routes;
exports["default"] = _default;