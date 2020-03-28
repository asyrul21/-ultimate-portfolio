webpackHotUpdate("static/development/pages/travel.js",{

/***/ "./components/shared/BoxCategories.js":
/*!********************************************!*\
  !*** ./components/shared/BoxCategories.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_boxCategories_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/boxCategories.module.scss */ "./components/shared/styles/boxCategories.module.scss");
/* harmony import */ var _styles_boxCategories_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_boxCategories_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/shared/BoxCategories.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var BoxCategories = function BoxCategories(props) {
  console.log(props.data);
  return __jsx("div", {
    className: _styles_boxCategories_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.categoriesContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.data.travel.slugs.map(function (item, idx) {
    return __jsx("div", {
      className: _styles_boxCategories_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.box,
      style: {
        backgroundImage: 'url(' + item.slugImage + ')'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      className: _styles_boxCategories_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.darkBackground,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("div", {
      className: _styles_boxCategories_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.textContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, item.destination), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, item.country))));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BoxCategories);

/***/ })

})
//# sourceMappingURL=travel.js.06cf1f0bf00ff42aa422.hot-update.js.map