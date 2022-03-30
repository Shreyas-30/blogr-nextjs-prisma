"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/post/[id]";
exports.ids = ["pages/api/post/[id]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// lib/prisma.ts\n\nlet prisma;\nif (false) {} else {\n    if (!global.prisma) {\n        global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEVBQWdCO0FBQzZCO0FBRTdDLEdBQUcsQ0FBQ0MsTUFBTTtBQUVWLEVBQUUsRUFMRixLQUt5QyxFQUFFLEVBRTFDLE1BQU0sQ0FBQztJQUNOLEVBQUUsR0FBR0MsTUFBTSxDQUFDRCxNQUFNLEVBQUUsQ0FBQztRQUNuQkMsTUFBTSxDQUFDRCxNQUFNLEdBQUcsR0FBRyxDQUFDRCx3REFBWTtJQUNsQyxDQUFDO0lBQ0RDLE1BQU0sR0FBR0MsTUFBTSxDQUFDRCxNQUFNO0FBQ3hCLENBQUM7QUFFRCxpRUFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tbmV4dC8uL2xpYi9wcmlzbWEudHM/OTgyMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaWIvcHJpc21hLnRzXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbmxldCBwcmlzbWE6IFByaXNtYUNsaWVudDtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xufSBlbHNlIHtcbiAgaWYgKCFnbG9iYWwucHJpc21hKSB7XG4gICAgZ2xvYmFsLnByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgfVxuICBwcmlzbWEgPSBnbG9iYWwucHJpc21hO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImdsb2JhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.ts\n");

/***/ }),

/***/ "(api)/./pages/api/post/[id].ts":
/*!********************************!*\
  !*** ./pages/api/post/[id].ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n\n// DELETE /api/post/:id\nasync function handle(req, res) {\n    const postId = req.query.id;\n    if (req.method === 'DELETE') {\n        const post = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post[\"delete\"]({\n            where: {\n                id: postId\n            }\n        });\n        res.json(post);\n    } else {\n        throw new Error(`The HTTP ${req.method} method is not supported at this route.`);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdC9baWRdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXdDO0FBRXhDLEVBQXVCO0FBQ1IsZUFBZUMsTUFBTSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQzlDLEtBQUssQ0FBQ0MsTUFBTSxHQUFHRixHQUFHLENBQUNHLEtBQUssQ0FBQ0MsRUFBRTtJQUMzQixFQUFFLEVBQUVKLEdBQUcsQ0FBQ0ssTUFBTSxLQUFLLENBQVEsU0FBRSxDQUFDO1FBQzVCLEtBQUssQ0FBQ0MsSUFBSSxHQUFHLEtBQUssQ0FBQ1Isa0VBQWtCLENBQUMsQ0FBQztZQUNyQ1UsS0FBSyxFQUFFLENBQUM7Z0JBQUNKLEVBQUUsRUFBRUYsTUFBTTtZQUFDLENBQUM7UUFDdkIsQ0FBQztRQUNERCxHQUFHLENBQUNRLElBQUksQ0FBQ0gsSUFBSTtJQUNmLENBQUMsTUFBTSxDQUFDO1FBQ04sS0FBSyxDQUFDLEdBQUcsQ0FBQ0ksS0FBSyxFQUNaLFNBQVMsRUFBRVYsR0FBRyxDQUFDSyxNQUFNLENBQUMsdUNBQXVDO0lBRWxFLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tbmV4dC8uL3BhZ2VzL2FwaS9wb3N0L1tpZF0udHM/MjFhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJpc21hIGZyb20gJy4uLy4uLy4uL2xpYi9wcmlzbWEnO1xuXG4vLyBERUxFVEUgL2FwaS9wb3N0LzppZFxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHBvc3RJZCA9IHJlcS5xdWVyeS5pZDtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdERUxFVEUnKSB7XG4gICAgY29uc3QgcG9zdCA9IGF3YWl0IHByaXNtYS5wb3N0LmRlbGV0ZSh7XG4gICAgICB3aGVyZTogeyBpZDogcG9zdElkIH0sXG4gICAgfSk7XG4gICAgcmVzLmpzb24ocG9zdCk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYFRoZSBIVFRQICR7cmVxLm1ldGhvZH0gbWV0aG9kIGlzIG5vdCBzdXBwb3J0ZWQgYXQgdGhpcyByb3V0ZS5gLFxuICAgICk7XG4gIH1cbn0iXSwibmFtZXMiOlsicHJpc21hIiwiaGFuZGxlIiwicmVxIiwicmVzIiwicG9zdElkIiwicXVlcnkiLCJpZCIsIm1ldGhvZCIsInBvc3QiLCJkZWxldGUiLCJ3aGVyZSIsImpzb24iLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/post/[id].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/post/[id].ts"));
module.exports = __webpack_exports__;

})();