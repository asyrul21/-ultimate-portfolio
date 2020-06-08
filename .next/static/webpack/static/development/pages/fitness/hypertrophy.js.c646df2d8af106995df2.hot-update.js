webpackHotUpdate("static/development/pages/fitness/hypertrophy.js",{

/***/ "./components/fitness/WorkoutContainer.js":
/*!************************************************!*\
  !*** ./components/fitness/WorkoutContainer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _workoutContainer_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./workoutContainer.module.scss */ "./components/fitness/workoutContainer.module.scss");
/* harmony import */ var _workoutContainer_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_workoutContainer_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var WorkoutContainer = function WorkoutContainer(props) {
  var color = '#D2E5EF';

  if (props.theme === green) {
    color = '#D4EFD2';
  } else if (props.theme === purple) {
    color = '#D8CCDE';
  }

  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_workoutContainer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container, props.itemsPerRow === 2 ? _workoutContainer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.twoItems : _workoutContainer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.threeItems)
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: _workoutContainer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title,
    style: {
      background: color
    }
  }, props.title), __jsx("div", {
    className: _workoutContainer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.items
  }, "This is the workout items", props.children)), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: _workoutContainer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.notes
  }, "This is the workout notes")));
};

/* harmony default export */ __webpack_exports__["default"] = (WorkoutContainer);

/***/ })

})
//# sourceMappingURL=hypertrophy.js.c646df2d8af106995df2.hot-update.js.map