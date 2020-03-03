webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./components/shared/projects/ProjectRpi.js":
/*!**************************************************!*\
  !*** ./components/shared/projects/ProjectRpi.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layouts/ContentFragment */ "./components/layouts/ContentFragment.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 //import layout

 //import style
// import rpiStyles from './rpi.module.scss'

var ProjectRpi = function ProjectRpi(props) {
  var project = props.data;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: project.title,
    time: project.time,
    text: project.intro
  }, __jsx("div", {
    className: "jsx-1571093519"
  }, "Photos")), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Main Development",
    text: project.main
  }, __jsx("div", {
    className: "jsx-1571093519"
  }, "Photos")), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Technology",
    text: project.technology
  }, __jsx("div", {
    className: "jsx-1571093519" + " " + "row"
  }, __jsx("div", {
    className: "jsx-1571093519" + " " + "intro1"
  }), __jsx("div", {
    className: "jsx-1571093519" + " " + "intro2"
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1571093519"
  }, ".intro1.jsx-1571093519{height:200;width:150;border:red solid 1px;}.intro2.jsx-1571093519{height:200;width:150;border:red solid 1px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9zaGFyZWQvcHJvamVjdHMvUHJvamVjdFJwaS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ3dCLEFBR2dDLEFBTUEsV0FMRCxBQU1BLFVBTFcsQUFNQSxxQkFMekIsQUFNQSIsImZpbGUiOiIvVXNlcnMvYXN5cnVsaGFmZXR6eS9Eb2N1bWVudHMvQ1NEZXZlbG9wbWVudC9XZWIvbXlVbHRpbWF0ZVBvcnRmb2xpby91bHRpbWF0ZXBvcnRmb2xpby1uZXh0L2NvbXBvbmVudHMvc2hhcmVkL3Byb2plY3RzL1Byb2plY3RScGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhY3QgZnJvbSAncmVhY3QnXG5cbi8vaW1wb3J0IGxheW91dFxuaW1wb3J0IENvbnRlbnRGcmFnbWVudCBmcm9tICcuLi8uLi9sYXlvdXRzL0NvbnRlbnRGcmFnbWVudCdcblxuLy9pbXBvcnQgc3R5bGVcbi8vIGltcG9ydCBycGlTdHlsZXMgZnJvbSAnLi9ycGkubW9kdWxlLnNjc3MnXG5cbmNvbnN0IFByb2plY3RScGkgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvcHMuZGF0YVxuICAgIHJldHVybiAoXG4gICAgICAgIDxyZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxDb250ZW50RnJhZ21lbnQgdGl0bGU9e3Byb2plY3QudGl0bGV9XG4gICAgICAgICAgICAgICAgdGltZT17cHJvamVjdC50aW1lfSB0ZXh0PXtwcm9qZWN0LmludHJvfT5cblxuICAgICAgICAgICAgICAgIHsvKiBQaG90b3MgKi99XG4gICAgICAgICAgICAgICAgPGRpdj5QaG90b3M8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29udGVudEZyYWdtZW50PlxuXG4gICAgICAgICAgICA8Q29udGVudEZyYWdtZW50IHN1YnRpdGxlPVwiTWFpbiBEZXZlbG9wbWVudFwiXG4gICAgICAgICAgICAgICAgdGV4dD17cHJvamVjdC5tYWlufT5cblxuICAgICAgICAgICAgICAgIHsvKiBQaG90b3MgKi99XG4gICAgICAgICAgICAgICAgPGRpdj5QaG90b3M8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29udGVudEZyYWdtZW50PlxuXG4gICAgICAgICAgICA8Q29udGVudEZyYWdtZW50IHN1YnRpdGxlPVwiVGVjaG5vbG9neVwiXG4gICAgICAgICAgICAgICAgdGV4dD17cHJvamVjdC50ZWNobm9sb2d5fT5cblxuICAgICAgICAgICAgICAgIHsvKiBQaG90b3MgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRybzFcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRybzJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29udGVudEZyYWdtZW50PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5pbnRybzEge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiByZWQgc29saWQgMXB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5pbnRybzIge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiByZWQgc29saWQgMXB4O1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvcmVhY3QuRnJhZ21lbnQ+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0UnBpOyJdfQ== */\n/*@ sourceURL=/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/shared/projects/ProjectRpi.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectRpi);

/***/ })

})
//# sourceMappingURL=projects.js.c0c03a2c3fd9783c35dd.hot-update.js.map