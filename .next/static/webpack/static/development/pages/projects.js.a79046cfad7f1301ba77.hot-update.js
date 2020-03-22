webpackHotUpdate("static/development/pages/projects.js",{

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
/* harmony import */ var _projects_ProjectRpi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../projects/ProjectRpi */ "./components/projects/ProjectRpi.js");
var _jsxFileName = "/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/layouts/ContentFragment.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 //import style




var ContentFragment = function ContentFragment(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.title && __jsx("div", {
    className: _contentFragment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.fragmentHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, props.title, ' ', __jsx("span", {
    className: _contentFragment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.time,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "(", props.time, ")")), props.link && __jsx("div", {
    className: _contentFragment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.linkContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("a", {
    className: _contentFragment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link,
    href: props.link,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "View")), props.subtitle && __jsx("div", {
    className: _contentFragment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.subHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, props.subtitle)), __jsx("div", {
    className: _contentFragment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, props.text), props.type === 'links' && __jsx("div", {
    className: _contentFragment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.linkContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, props.links.map(function (link, id) {
    return __jsx("a", {
      key: id,
      className: _contentFragment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link,
      href: link,
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "Video", '\t');
  })), props.children && __jsx("div", {
    className: _contentFragment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ItemsContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (ContentFragment);

/***/ })

})
//# sourceMappingURL=projects.js.a79046cfad7f1301ba77.hot-update.js.map