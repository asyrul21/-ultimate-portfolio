webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./components/shared/projects/ProjectRpi.js":
/*!**************************************************!*\
  !*** ./components/shared/projects/ProjectRpi.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layouts/ContentFragment */ "./components/layouts/ContentFragment.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 //import layout

 //import style
// import rpiStyles from './rpi.module.scss'

var ProjectRpi = function ProjectRpi(props) {
  var project = props.data;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: project.title,
    time: project.time,
    text: project.intro
  }, __jsx("div", null, "Photos")), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_1__["default"], {
    subtitle: "Main Development",
    text: project.main
  }, __jsx("div", null, "Photos")), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_1__["default"], {
    subtitle: "Technology",
    text: project.technology
  }, __jsx("div", null)));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectRpi);

/***/ })

})
//# sourceMappingURL=projects.js.118c66d6fb952fb6a4b0.hot-update.js.map