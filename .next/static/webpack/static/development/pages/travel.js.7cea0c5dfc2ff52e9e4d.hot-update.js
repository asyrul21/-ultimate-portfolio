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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_boxCategories_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/boxCategories.module.scss */ "./components/shared/styles/boxCategories.module.scss");
/* harmony import */ var _styles_boxCategories_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_boxCategories_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // accepts an array of slug data

var BoxCategories = function BoxCategories(props) {
  var delay = 0;
  return __jsx("div", {
    className: _styles_boxCategories_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.categoriesContainer
  }, props.data.map(function (item, idx) {
    if (idx !== 0) delay += 200;
    return __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
      delay: delay,
      key: idx
    }, __jsx("div", {
      key: idx,
      className: _styles_boxCategories_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.box,
      style: {
        backgroundImage: 'url(' + item.slugImage + ')'
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "".concat(props.page, "/").concat(item.key)
    }, __jsx("a", {
      className: _styles_boxCategories_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.darkBackground
    }, __jsx("div", {
      className: _styles_boxCategories_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.textContainer
    }, __jsx("h3", null, item.title), __jsx("p", {
      className: _styles_boxCategories_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.sub
    }, item.sub))))));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BoxCategories);

/***/ })

})
//# sourceMappingURL=travel.js.7cea0c5dfc2ff52e9e4d.hot-update.js.map