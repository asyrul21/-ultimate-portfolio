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
    className: "jsx-303768935" + " " + "row"
  }, __jsx("div", {
    className: "jsx-303768935" + " " + "intro1"
  }), __jsx("div", {
    className: "jsx-303768935" + " " + "intro2"
  })), __jsx("div", {
    className: "jsx-303768935" + " " + "row"
  }, __jsx("div", {
    className: "jsx-303768935" + " " + "intro2"
  }), __jsx("div", {
    className: "jsx-303768935" + " " + "intro1"
  }))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Main Development",
    text: project.main
  }, __jsx("div", {
    className: "jsx-303768935"
  }, "Photos")), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Technology",
    text: project.technology
  }, __jsx("div", {
    className: "jsx-303768935" + " " + "row"
  }, __jsx("div", {
    className: "jsx-303768935" + " " + "intro1"
  }), __jsx("div", {
    className: "jsx-303768935" + " " + "intro2"
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "303768935"
  }, ".intro1.jsx-303768935{margin:0;height:200px;-webkit-flex:0.28;-ms-flex:0.28;flex:0.28;border:red solid 1px;}.intro2.jsx-303768935{margin:0;height:200px;-webkit-flex:0.70;-ms-flex:0.70;flex:0.70;border:red solid 1px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9zaGFyZWQvcHJvamVjdHMvUHJvamVjdFJwaS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQ3dCLEFBRzhCLEFBU0EsU0FQSSxBQVFBLGFBTkgsQUFRQSwwQ0FQVyxBQVFBLHFCQVB6QixBQVFBIiwiZmlsZSI6Ii9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9zaGFyZWQvcHJvamVjdHMvUHJvamVjdFJwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFjdCBmcm9tICdyZWFjdCdcblxuLy9pbXBvcnQgbGF5b3V0XG5pbXBvcnQgQ29udGVudEZyYWdtZW50IGZyb20gJy4uLy4uL2xheW91dHMvQ29udGVudEZyYWdtZW50J1xuXG4vL2ltcG9ydCBzdHlsZVxuLy8gaW1wb3J0IHJwaVN0eWxlcyBmcm9tICcuL3JwaS5tb2R1bGUuc2NzcydcblxuY29uc3QgUHJvamVjdFJwaSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBwcm9wcy5kYXRhXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPENvbnRlbnRGcmFnbWVudCB0aXRsZT17cHJvamVjdC50aXRsZX1cbiAgICAgICAgICAgICAgICB0aW1lPXtwcm9qZWN0LnRpbWV9IHRleHQ9e3Byb2plY3QuaW50cm99PlxuXG4gICAgICAgICAgICAgICAgey8qIFBob3RvcyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludHJvMVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludHJvMlwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50cm8yXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50cm8xXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbnRlbnRGcmFnbWVudD5cblxuICAgICAgICAgICAgPENvbnRlbnRGcmFnbWVudCBzdWJ0aXRsZT1cIk1haW4gRGV2ZWxvcG1lbnRcIlxuICAgICAgICAgICAgICAgIHRleHQ9e3Byb2plY3QubWFpbn0+XG5cbiAgICAgICAgICAgICAgICB7LyogUGhvdG9zICovfVxuICAgICAgICAgICAgICAgIDxkaXY+UGhvdG9zPC9kaXY+XG4gICAgICAgICAgICA8L0NvbnRlbnRGcmFnbWVudD5cblxuICAgICAgICAgICAgPENvbnRlbnRGcmFnbWVudCBzdWJ0aXRsZT1cIlRlY2hub2xvZ3lcIlxuICAgICAgICAgICAgICAgIHRleHQ9e3Byb2plY3QudGVjaG5vbG9neX0+XG5cbiAgICAgICAgICAgICAgICB7LyogUGhvdG9zICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50cm8xXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50cm8yXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbnRlbnRGcmFnbWVudD5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuaW50cm8xIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMC4yODtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiByZWQgc29saWQgMXB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5pbnRybzIge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoOiA1ODBweDtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMC43MDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiByZWQgc29saWQgMXB4O1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvcmVhY3QuRnJhZ21lbnQ+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0UnBpOyJdfQ== */\n/*@ sourceURL=/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/shared/projects/ProjectRpi.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectRpi);

/***/ })

})
//# sourceMappingURL=projects.js.0a3eef4565ddbcc72a13.hot-update.js.map