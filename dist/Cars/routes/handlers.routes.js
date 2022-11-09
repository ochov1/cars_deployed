"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _handlersController = _interopRequireDefault(require("../Controllers/handlers.controller.js"));

var handlers = (0, _express.Router)();
handlers.route("/").get(_handlersController["default"].apiGetHandlers).post(_handlersController["default"].apiPostHandler).put(_handlersController["default"].apiUpdateHandler);
handlers.route("/:page").get(_handlersController["default"].apiGetHandlers);
handlers.route("/:id")["delete"](_handlersController["default"].apiDeleteHandler);
var _default = handlers;
exports["default"] = _default;