webpackHotUpdate("static/development/pages/fitness/hypertrophy.js",{

/***/ "./components/shared/SuggestPages.js":
/*!*******************************************!*\
  !*** ./components/shared/SuggestPages.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_SuggestPages_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/SuggestPages.module.scss */ "./components/shared/styles/SuggestPages.module.scss");
/* harmony import */ var _styles_SuggestPages_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_SuggestPages_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // takes two props: moreOn and pages

var SuggestPages = function SuggestPages(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: _styles_SuggestPages_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container
  }, __jsx("p", {
    className: _styles_SuggestPages_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.header
  }, "More on ", props.moreOn, " :"), __jsx("p", null, props.links.map(function (link, idx) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      key: idx,
      href: link.link
    }, __jsx("a", {
      className: _styles_SuggestPages_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link
    }, link.text)));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SuggestPages);
{
  /* <a key={id} className={SuggestPagesStyles.link} href={link} target="_blank">Video{id + 1}{'\t'}</a> */
}

/***/ })

})
//# sourceMappingURL=hypertrophy.js.beb387359b8010f46a68.hot-update.js.map