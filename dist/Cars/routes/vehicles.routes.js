"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _vehiclesController = _interopRequireDefault(require("../Controllers/vehicles.controller.js"));

var vehicles = (0, _express.Router)();
vehicles.route("/page/:page").get(_vehiclesController["default"].getVehicles);
vehicles.route("/:id")["delete"](_vehiclesController["default"].discardVehicle);
vehicles.route("/start").get(_vehiclesController["default"].getStart);
vehicles.route("/search").post(_vehiclesController["default"].vehiclesFilters);
var _default = vehicles;
exports["default"] = _default;