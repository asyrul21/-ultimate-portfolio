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
    className: "jsx-3125988913" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3125988913" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoLandscape", "intro1") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3125988913" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoLandscape", "intro2") || ""),
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
    className: "jsx-3125988913" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3125988913" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoLandscape", "main1") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3125988913" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoLandscape", "main2") || ""),
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
    className: "jsx-3125988913" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3125988913" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoLandscape", "tech1") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3125988913" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoLandscape", "tech2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Results",
    text: project.results,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3125988913" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3125988913" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "res1") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3125988913" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "res2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3125988913" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "res3") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }))), project.videos && __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Videos",
    text: "Some videos related to this project can be found here:",
    type: "links",
    links: project.videos,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3125988913",
    __self: this
  }, ".intro1.jsx-3125988913{background-image:url('/static/images/projects/rpi/rpilogo.jpg');}.intro2.jsx-3125988913{background-image:url('/static/images/projects/rpi/rpi.png');}.main1.jsx-3125988913{background-image:url('/static/images/projects/rpi/project.png');}.main2.jsx-3125988913{background-image:url('/static/images/projects/rpi/rpi5.png');}.tech1.jsx-3125988913{background-image:url('/static/images/projects/rpi/tech1.png');}.tech2.jsx-3125988913{background-image:url('/static/images/projects/rpi/osc2.png');}.tech3.jsx-3125988913{background-image:url('/static/images/projects/rpi/osc.jpg');}.res1.jsx-3125988913{background-image:url('/static/images/projects/rpi/rpi2.png');}.res2.jsx-3125988913{background-image:url('/static/images/projects/rpi/rpi1.png');}.res3.jsx-3125988913{background-image:url('/static/images/projects/rpi/res1.png');}.res4.jsx-3125988913{background-image:url('/static/images/projects/rpi/res2.png');}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9wcm9qZWN0cy9Qcm9qZWN0UnBpLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFEd0IsQUFJcUYsQUFLSixBQUtJLEFBS0gsQUFJQyxBQUlELEFBSUQsQUFJQyxBQUlBLEFBSUEsQUFJQSw0REFyQ2pFLEFBc0JBLENBWkEsQUFRQSxBQVFBLEFBSUEsQUFJQSxBQUlBLENBeEJBLEVBbkJBLEFBVUEiLCJmaWxlIjoiL1VzZXJzL2FzeXJ1bGhhZmV0enkvRG9jdW1lbnRzL0NTRGV2ZWxvcG1lbnQvV2ViL215VWx0aW1hdGVQb3J0Zm9saW8vdWx0aW1hdGVwb3J0Zm9saW8tbmV4dC9jb21wb25lbnRzL3Byb2plY3RzL1Byb2plY3RScGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhY3QgZnJvbSAncmVhY3QnXG5cbi8vaW1wb3J0IGxheW91dFxuaW1wb3J0IENvbnRlbnRGcmFnbWVudCBmcm9tICcuLi9sYXlvdXRzL0NvbnRlbnRGcmFnbWVudCdcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuXG5jb25zdCBQcm9qZWN0UnBpID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IHByb3BzLmRhdGFcbiAgICByZXR1cm4gKFxuICAgICAgICA8cmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8Q29udGVudEZyYWdtZW50IHRpdGxlPXtwcm9qZWN0LnRpdGxlfVxuICAgICAgICAgICAgICAgIHRpbWU9e3Byb2plY3QudGltZX0gdGV4dD17cHJvamVjdC5pbnRyb30+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b0xhbmRzY2FwZVwiLCBcImludHJvMVwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvTGFuZHNjYXBlXCIsIFwiaW50cm8yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29udGVudEZyYWdtZW50PlxuXG4gICAgICAgICAgICA8Q29udGVudEZyYWdtZW50IHN1YnRpdGxlPVwiTWFpbiBEZXZlbG9wbWVudFwiXG4gICAgICAgICAgICAgICAgdGV4dD17cHJvamVjdC5tYWlufT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvTGFuZHNjYXBlXCIsIFwibWFpbjFcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b0xhbmRzY2FwZVwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29udGVudEZyYWdtZW50PlxuXG4gICAgICAgICAgICA8Q29udGVudEZyYWdtZW50IHN1YnRpdGxlPVwiVGVjaG5vbG9neVwiXG4gICAgICAgICAgICAgICAgdGV4dD17cHJvamVjdC50ZWNobm9sb2d5fT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvTGFuZHNjYXBlXCIsIFwidGVjaDFcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b0xhbmRzY2FwZVwiLCBcInRlY2gyXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29udGVudEZyYWdtZW50PlxuXG4gICAgICAgICAgICA8Q29udGVudEZyYWdtZW50IHN1YnRpdGxlPVwiUmVzdWx0c1wiXG4gICAgICAgICAgICAgICAgdGV4dD17cHJvamVjdC5yZXN1bHRzfT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvUG9ydHJhaXRcIiwgXCJyZXMxXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcInJlczJcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b1BvcnRyYWl0XCIsIFwicmVzM1wiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbnRlbnRGcmFnbWVudD5cblxuICAgICAgICAgICAge3Byb2plY3QudmlkZW9zICYmXG4gICAgICAgICAgICAgICAgPENvbnRlbnRGcmFnbWVudCBzdWJ0aXRsZT1cIlZpZGVvc1wiXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9XCJTb21lIHZpZGVvcyByZWxhdGVkIHRvIHRoaXMgcHJvamVjdCBjYW4gYmUgZm91bmQgaGVyZTpcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibGlua3NcIiBsaW5rcz17cHJvamVjdC52aWRlb3N9PlxuICAgICAgICAgICAgICAgIDwvQ29udGVudEZyYWdtZW50PlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5pbnRybzEge1xuICAgICAgICAgICAgICAgICAgICAvL2ZsZXg6IDAuMTg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvcHJvamVjdHMvcnBpL3JwaWxvZ28uanBnJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmludHJvMiB7XG4gICAgICAgICAgICAgICAgICAgIC8vZmxleDogMC44MDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9wcm9qZWN0cy9ycGkvcnBpLnBuZycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5tYWluMSB7XG4gICAgICAgICAgICAgICAgICAgIC8vZmxleDogMC41NjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9wcm9qZWN0cy9ycGkvcHJvamVjdC5wbmcnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubWFpbjIge1xuICAgICAgICAgICAgICAgICAgICAvL2ZsZXg6IDAuMjA7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvcHJvamVjdHMvcnBpL3JwaTUucG5nJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnRlY2gxIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9wcm9qZWN0cy9ycGkvdGVjaDEucG5nJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnRlY2gyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9wcm9qZWN0cy9ycGkvb3NjMi5wbmcnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudGVjaDMge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL3Byb2plY3RzL3JwaS9vc2MuanBnJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnJlczEge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL3Byb2plY3RzL3JwaS9ycGkyLnBuZycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5yZXMyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9wcm9qZWN0cy9ycGkvcnBpMS5wbmcnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAucmVzMyB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvcHJvamVjdHMvcnBpL3JlczEucG5nJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnJlczQge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL3Byb2plY3RzL3JwaS9yZXMyLnBuZycpO1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvcmVhY3QuRnJhZ21lbnQgPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFJwaTsiXX0= */\n/*@ sourceURL=/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/projects/ProjectRpi.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectRpi);

/***/ })

})
//# sourceMappingURL=projects.js.1e086d311ae5a048128e.hot-update.js.map