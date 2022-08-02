/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var express = __webpack_require__(/*! express */ \"express\");\nvar app = express();\nvar router = __webpack_require__(/*! ./router/index */ \"./router/index.js\");\n\napp.listen(3000, function () {\n  console.log(\"start!! express server on port 3000\");\n});\n\napp.use(express.static(\"public\"));\napp.set(\"view engine\", \"ejs\");\napp.use(router);\n\n\n//# sourceURL=webpack://nodejstest/./app.js?");

/***/ }),

/***/ "./router/index.js":
/*!*************************!*\
  !*** ./router/index.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var express = __webpack_require__(/*! express */ \"express\");\nvar router = express.Router();\nvar path = __webpack_require__(/*! path */ \"path\");\nvar HelloWorld = __webpack_require__(/*! ./sample/HelloWorld.js */ \"./router/sample/HelloWorld.js\");\n\nrouter.get(\"/\", function (req, res) {\n  res.sendFile(path.join(__dirname, \"../public/main.html\"));\n});\n\nrouter.use(\"/helloworld\", HelloWorld);\n\nmodule.exports = router;\n\n\n//# sourceURL=webpack://nodejstest/./router/index.js?");

/***/ }),

/***/ "./router/sample/HelloWorld.js":
/*!*************************************!*\
  !*** ./router/sample/HelloWorld.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var express = __webpack_require__(/*! express */ \"express\");\nvar router = express.Router();\n\nrouter.get(\"/\", function (req, res) {\n  res.render(\"helloSample.ejs\");\n});\n\nrouter.post(\"/\", function (req, res) {\n  res.render(\"helloSample.ejs\");\n});\n\nmodule.exports = router;\n\n\n//# sourceURL=webpack://nodejstest/./router/sample/HelloWorld.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app.js");
/******/ 	
/******/ })()
;