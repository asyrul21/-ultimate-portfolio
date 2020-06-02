webpackHotUpdate("static/development/pages/admin/login.js",{

/***/ "./components/admin/ContentsList.js":
/*!******************************************!*\
  !*** ./components/admin/ContentsList.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ContentsList_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContentsList.module.scss */ "./components/admin/ContentsList.module.scss");
/* harmony import */ var _ContentsList_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ContentsList_module_scss__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ContentsList = function ContentsList(props) {
  console.log(props.data);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: _ContentsList_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.addButton
  }, "Add New Content"), __jsx("div", {
    className: _ContentsList_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container
  }, props.data.map(function (item, idx) {
    return __jsx("div", {
      key: idx,
      className: _ContentsList_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.list
    }, __jsx("p", {
      className: _ContentsList_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.text
    }, item.key), __jsx("p", {
      className: _ContentsList_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.text
    }, item.title), __jsx("p", {
      className: _ContentsList_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.text
    }, item.category));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ContentsList);

/***/ })

})
//# sourceMappingURL=login.js.463dd3a787ac29904095.hot-update.js.map