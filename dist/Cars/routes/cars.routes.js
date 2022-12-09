"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _carsController = _interopRequireDefault(require("../Controllers/cars.controller.js"));
var cars = (0, _express.Router)();
/**
 * standard CRUD operations
 */
cars.route("/").get(_carsController["default"].getAllCars).post(_carsController["default"].postCars).put(_carsController["default"].putCars);

/**
 * Collection Operations.
 * getting pages collection
 */
cars.route("/:page").get(_carsController["default"].getCars);
cars.route("/handler/:id").get(_carsController["default"].getCarsByHandler);
cars.route("/:id")["delete"](_carsController["default"].deleteCars);
var _default = cars;
exports["default"] = _default;