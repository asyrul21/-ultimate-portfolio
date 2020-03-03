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
    className: "jsx-220930188" + " " + "row"
  }, __jsx("div", {
    className: "jsx-220930188" + " " + "intro1"
  }), __jsx("div", {
    className: "jsx-220930188" + " " + "intro2"
  })), __jsx("div", {
    className: "jsx-220930188" + " " + "row"
  }, __jsx("div", {
    className: "jsx-220930188" + " " + "intro2"
  }), __jsx("div", {
    className: "jsx-220930188" + " " + "intro1"
  }))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Main Development",
    text: project.main
  }, __jsx("div", {
    className: "jsx-220930188"
  }, "Photos")), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Technology",
    text: project.technology
  }, __jsx("div", {
    className: "jsx-220930188" + " " + "row"
  }, __jsx("div", {
    className: "jsx-220930188" + " " + "main1"
  }), __jsx("div", {
    className: "jsx-220930188" + " " + "main2"
  }), __jsx("div", {
    className: "jsx-220930188" + " " + "main2"
  })), __jsx("div", {
    className: "jsx-220930188" + " " + "row"
  }, __jsx("div", {
    className: "jsx-220930188" + " " + "main2"
  }), __jsx("div", {
    className: "jsx-220930188" + " " + "main2"
  }), __jsx("div", {
    className: "jsx-220930188" + " " + "main1"
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "220930188"
  }, ".intro1.jsx-220930188{margin:0;height:200px;-webkit-flex:0.18;-ms-flex:0.18;flex:0.18;border:red solid 1px;background-image:url('/static/images/projects/rpi/intro1.png');background-size:cover;background-position:center;}.intro2.jsx-220930188{margin:0;height:200px;-webkit-flex:0.80;-ms-flex:0.80;flex:0.80;border:red solid 1px;background-image:url('/static/images/projects/rpi/intro2.png');background-size:cover;background-position:center;}.main1.jsx-220930188{margin:0;height:200px;-webkit-flex:0.5;-ms-flex:0.5;flex:0.5;border:red solid 1px;background-image:url('/static/images/projects/rpi/main.png');background-size:cover;background-position:center;}.intro2.jsx-220930188{margin:0;height:200px;-webkit-flex:0.24;-ms-flex:0.24;flex:0.24;border:red solid 1px;background-image:url('/static/images/projects/rpi/main2.png');background-size:cover;background-position:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9zaGFyZWQvcHJvamVjdHMvUHJvamVjdFJwaS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRHdCLEFBRzhCLEFBY0EsQUFhQSxBQWNBLFNBdkNJLEFBYUEsQUFjQSxBQWFBLGFBdENILEFBYUEsQUFjRCxBQWFDLHVDQVpXLEdBM0JBLEFBYUEsQUEyQkEsa0JBVndDLEdBM0JFLEFBYUEsQUEyQkQsMERBWnhDLElBYUEsQ0F4Q0EsQUFhQSxpQkFlSyxJQWFBLENBeENBLEFBYUEsc0JBZS9CLElBYUEsQ0F4Q0EsQUFhQSIsImZpbGUiOiIvVXNlcnMvYXN5cnVsaGFmZXR6eS9Eb2N1bWVudHMvQ1NEZXZlbG9wbWVudC9XZWIvbXlVbHRpbWF0ZVBvcnRmb2xpby91bHRpbWF0ZXBvcnRmb2xpby1uZXh0L2NvbXBvbmVudHMvc2hhcmVkL3Byb2plY3RzL1Byb2plY3RScGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhY3QgZnJvbSAncmVhY3QnXG5cbi8vaW1wb3J0IGxheW91dFxuaW1wb3J0IENvbnRlbnRGcmFnbWVudCBmcm9tICcuLi8uLi9sYXlvdXRzL0NvbnRlbnRGcmFnbWVudCdcblxuLy9pbXBvcnQgc3R5bGVcbi8vIGltcG9ydCBycGlTdHlsZXMgZnJvbSAnLi9ycGkubW9kdWxlLnNjc3MnXG5cbmNvbnN0IFByb2plY3RScGkgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvcHMuZGF0YVxuICAgIHJldHVybiAoXG4gICAgICAgIDxyZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxDb250ZW50RnJhZ21lbnQgdGl0bGU9e3Byb2plY3QudGl0bGV9XG4gICAgICAgICAgICAgICAgdGltZT17cHJvamVjdC50aW1lfSB0ZXh0PXtwcm9qZWN0LmludHJvfT5cblxuICAgICAgICAgICAgICAgIHsvKiBQaG90b3MgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRybzFcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRybzJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludHJvMlwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludHJvMVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Db250ZW50RnJhZ21lbnQ+XG5cbiAgICAgICAgICAgIDxDb250ZW50RnJhZ21lbnQgc3VidGl0bGU9XCJNYWluIERldmVsb3BtZW50XCJcbiAgICAgICAgICAgICAgICB0ZXh0PXtwcm9qZWN0Lm1haW59PlxuXG4gICAgICAgICAgICAgICAgey8qIFBob3RvcyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2PlBob3RvczwvZGl2PlxuICAgICAgICAgICAgPC9Db250ZW50RnJhZ21lbnQ+XG5cbiAgICAgICAgICAgIDxDb250ZW50RnJhZ21lbnQgc3VidGl0bGU9XCJUZWNobm9sb2d5XCJcbiAgICAgICAgICAgICAgICB0ZXh0PXtwcm9qZWN0LnRlY2hub2xvZ3l9PlxuXG4gICAgICAgICAgICAgICAgey8qIFBob3RvcyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4xXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbjJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluMlwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbjJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluMlwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4xXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbnRlbnRGcmFnbWVudD5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuaW50cm8xIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMC4xODtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiByZWQgc29saWQgMXB4O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vYmFja2dyb3VuZFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL3Byb2plY3RzL3JwaS9pbnRybzEucG5nJyk7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaW50cm8yIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aDogNTgwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDAuODA7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogcmVkIHNvbGlkIDFweDtcblxuICAgICAgICAgICAgICAgICAgICAvL2JhY2tncm91bmRcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9wcm9qZWN0cy9ycGkvaW50cm8yLnBuZycpO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm1haW4xIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMC41O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHJlZCBzb2xpZCAxcHg7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9iYWNrZ3JvdW5kXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvcHJvamVjdHMvcnBpL21haW4ucG5nJyk7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaW50cm8yIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aDogNTgwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDAuMjQ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogcmVkIHNvbGlkIDFweDtcblxuICAgICAgICAgICAgICAgICAgICAvL2JhY2tncm91bmRcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9wcm9qZWN0cy9ycGkvbWFpbjIucG5nJyk7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L3JlYWN0LkZyYWdtZW50PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFJwaTsiXX0= */\n/*@ sourceURL=/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/shared/projects/ProjectRpi.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectRpi);

/***/ })

})
//# sourceMappingURL=projects.js.27089d4124e4b3954e1f.hot-update.js.map