webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./components/projects/ProjectRpi.js":
/*!*******************************************!*\
  !*** ./components/projects/ProjectRpi.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/ContentFragment */ "./components/layouts/ContentFragment.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/projects/ProjectRpi.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 //import layout




var ProjectRpi = function ProjectRpi(props) {
  var project = props.data;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: project.title,
    time: project.time,
    text: project.intro,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-67976010" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-67976010" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoLandscape", "intro1") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-67976010" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoLandscape", "intro2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Main Development",
    text: project.main,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-67976010" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-67976010" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoLandscape", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-67976010" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoLandscape", "main1") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Technology",
    text: project.technology,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-67976010" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-67976010" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoLandscape", "tech1") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-67976010" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "tech2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-67976010" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "tech3") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Results",
    text: project.results,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-67976010" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-67976010" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "res1") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-67976010" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoLandscape", "res2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-67976010" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "res1") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }))), project.videos && __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Videos",
    text: "Some videos related to this project can be found here:",
    type: "links",
    links: project.videos,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "67976010",
    __self: this
  }, ".intro1.jsx-67976010{background-image:url('/static/images/projects/rpi/rpilogo.jpg');}.intro2.jsx-67976010{background-image:url('/static/images/projects/rpi/rpi.png');}.main1.jsx-67976010{background-image:url('/static/images/projects/rpi/rpi3.jpg');}.main2.jsx-67976010{background-image:url('/static/images/projects/rpi/rpi4.png');}.tech1.jsx-67976010{background-image:url('/static/images/projects/rpi/tech1.png');}.tech2.jsx-67976010{background-image:url('/static/images/projects/rpi/linux.png');}.tech3.jsx-67976010{background-image:url('/static/images/projects/rpi/osc.jpg');}.res1.jsx-67976010{background-image:url('/static/images/projects/rpi/rpi2.png');}.res2.jsx-67976010{background-image:url('/static/images/projects/rpi/rpi1.png');}.res3.jsx-67976010{background-image:url('/static/images/projects/rpi/osc.jpg');}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9wcm9qZWN0cy9Qcm9qZWN0UnBpLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNEd0IsQUFJcUYsQUFLSixBQUtDLEFBS0EsQUFJQyxBQUlBLEFBSUYsQUFJQyxBQUlBLEFBSUQsNERBakNoRSxBQXNCQSxBQVlBLENBN0JBLEFBS0EsQUFnQkEsQUFJQSxDQWhCQSxBQUlBLEVBdkJBIiwiZmlsZSI6Ii9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9wcm9qZWN0cy9Qcm9qZWN0UnBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vL2ltcG9ydCBsYXlvdXRcbmltcG9ydCBDb250ZW50RnJhZ21lbnQgZnJvbSAnLi4vbGF5b3V0cy9Db250ZW50RnJhZ21lbnQnXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcblxuY29uc3QgUHJvamVjdFJwaSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBwcm9wcy5kYXRhXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPENvbnRlbnRGcmFnbWVudCB0aXRsZT17cHJvamVjdC50aXRsZX1cbiAgICAgICAgICAgICAgICB0aW1lPXtwcm9qZWN0LnRpbWV9IHRleHQ9e3Byb2plY3QuaW50cm99PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9MYW5kc2NhcGVcIiwgXCJpbnRybzFcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b0xhbmRzY2FwZVwiLCBcImludHJvMlwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbnRlbnRGcmFnbWVudD5cblxuICAgICAgICAgICAgPENvbnRlbnRGcmFnbWVudCBzdWJ0aXRsZT1cIk1haW4gRGV2ZWxvcG1lbnRcIlxuICAgICAgICAgICAgICAgIHRleHQ9e3Byb2plY3QubWFpbn0+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b0xhbmRzY2FwZVwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9MYW5kc2NhcGVcIiwgXCJtYWluMVwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbnRlbnRGcmFnbWVudD5cblxuICAgICAgICAgICAgPENvbnRlbnRGcmFnbWVudCBzdWJ0aXRsZT1cIlRlY2hub2xvZ3lcIlxuICAgICAgICAgICAgICAgIHRleHQ9e3Byb2plY3QudGVjaG5vbG9neX0+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b0xhbmRzY2FwZVwiLCBcInRlY2gxXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcInRlY2gyXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcInRlY2gzXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29udGVudEZyYWdtZW50PlxuXG4gICAgICAgICAgICA8Q29udGVudEZyYWdtZW50IHN1YnRpdGxlPVwiUmVzdWx0c1wiXG4gICAgICAgICAgICAgICAgdGV4dD17cHJvamVjdC5yZXN1bHRzfT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvUG9ydHJhaXRcIiwgXCJyZXMxXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9MYW5kc2NhcGVcIiwgXCJyZXMyXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcInJlczFcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Db250ZW50RnJhZ21lbnQ+XG5cbiAgICAgICAgICAgIHtwcm9qZWN0LnZpZGVvcyAmJlxuICAgICAgICAgICAgICAgIDxDb250ZW50RnJhZ21lbnQgc3VidGl0bGU9XCJWaWRlb3NcIlxuICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiU29tZSB2aWRlb3MgcmVsYXRlZCB0byB0aGlzIHByb2plY3QgY2FuIGJlIGZvdW5kIGhlcmU6XCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImxpbmtzXCIgbGlua3M9e3Byb2plY3QudmlkZW9zfT5cbiAgICAgICAgICAgICAgICA8L0NvbnRlbnRGcmFnbWVudD5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuaW50cm8xIHtcbiAgICAgICAgICAgICAgICAgICAgLy9mbGV4OiAwLjE4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL3Byb2plY3RzL3JwaS9ycGlsb2dvLmpwZycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5pbnRybzIge1xuICAgICAgICAgICAgICAgICAgICAvL2ZsZXg6IDAuODA7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvcHJvamVjdHMvcnBpL3JwaS5wbmcnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubWFpbjEge1xuICAgICAgICAgICAgICAgICAgICAvL2ZsZXg6IDAuNTY7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvcHJvamVjdHMvcnBpL3JwaTMuanBnJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm1haW4yIHtcbiAgICAgICAgICAgICAgICAgICAgLy9mbGV4OiAwLjIwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL3Byb2plY3RzL3JwaS9ycGk0LnBuZycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC50ZWNoMSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvcHJvamVjdHMvcnBpL3RlY2gxLnBuZycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC50ZWNoMiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvcHJvamVjdHMvcnBpL2xpbnV4LnBuZycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC50ZWNoMyB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvcHJvamVjdHMvcnBpL29zYy5qcGcnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAucmVzMSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvcHJvamVjdHMvcnBpL3JwaTIucG5nJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnJlczIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL3Byb2plY3RzL3JwaS9ycGkxLnBuZycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5yZXMzIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9wcm9qZWN0cy9ycGkvb3NjLmpwZycpO1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvcmVhY3QuRnJhZ21lbnQgPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFJwaTsiXX0= */\n/*@ sourceURL=/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/projects/ProjectRpi.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectRpi);

/***/ })

})
//# sourceMappingURL=projects.js.6cd8cf2dd2e59feefc0b.hot-update.js.map