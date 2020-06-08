webpackHotUpdate("static/development/pages/fitness/races.js",{

/***/ "./components/layouts/ContentFragment.js":
/*!***********************************************!*\
  !*** ./components/layouts/ContentFragment.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contentFragment_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contentFragment.module.scss */ "./components/layouts/contentFragment.module.scss");
/* harmony import */ var _contentFragment_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_contentFragment_module_scss__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 //import style



var ContentFragment = function ContentFragment(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.title && __jsx("div", {
    className: _contentFragment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.fragmentHeader
  }, props.title, ' ', props.time && __jsx("span", {
    className: _contentFragment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.time
  }, "(", props.time, ")")), props.link && __jsx("div", {
    className: _contentFragment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.linkContainer
  }, __jsx("a", {
    className: _contentFragment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link,
    href: props.link,
    target: "_blank"
  }, props.linkText ? props.linkText : 'View')), props.subtitle && __jsx("div", {
    className: _contentFragment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.subHeader
  }, props.subtitle), __jsx("div", {
    className: _contentFragment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.text
  }, __jsx("p", null, props.text)), props.type === 'links' && __jsx("div", {
    className: _contentFragment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.linkContainer
  }, props.links.map(function (link, id) {
    return __jsx("a", {
      key: id,
      className: _contentFragment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link,
      href: link,
      target: "_blank"
    }, "Video", id + 1, '\t');
  })), props.children && __jsx("div", {
    className: _contentFragment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ItemsContainer
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (ContentFragment);

/***/ })

})
//# sourceMappingURL=races.js.ac1da39fbba349446588.hot-update.js.map