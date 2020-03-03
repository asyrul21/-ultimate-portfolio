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

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ContentFragment = function ContentFragment(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Hello!", props.title, __jsx("div", null, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (ContentFragment);

/***/ }),

/***/ "./components/shared/projects/AcademicProjects.js":
false,

/***/ "./components/shared/projects/Project.js":
/*!***********************************************!*\
  !*** ./components/shared/projects/Project.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProProjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProProjects */ "./components/shared/projects/ProProjects.js");
/* harmony import */ var _ProjectRpi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectRpi */ "./components/shared/projects/ProjectRpi.js");
/* harmony import */ var _public_static_data_projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/static/data/projects */ "./public/static/data/projects.json");
var _public_static_data_projects__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/data/projects */ "./public/static/data/projects.json", 1);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 //import components


 // import data



var Project = function Project(props) {
  // console.log(props.id)
  return __jsx("div", {
    className: "jsx-482345856" + " " + 'projectContainer'
  }, (props.id === 'esri' || props.id === 'myipcs') && __jsx(_ProProjects__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: _public_static_data_projects__WEBPACK_IMPORTED_MODULE_4__.proProjects["".concat(props.id)]
  }), (props.id === 'rpi' || props.id === 'chatbot') && // <ProProjects data={projectsData.proProjects[`${props.id}`]} />
  __jsx(_ProjectRpi__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "482345856"
  }, ".projectContainer.jsx-482345856{width:100%;margin-top:80px;margin-bottom:120px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9zaGFyZWQvcHJvamVjdHMvUHJvamVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQndCLEFBSWdDLFdBQ0ssZ0JBQ0ksb0JBRXhCIiwiZmlsZSI6Ii9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9zaGFyZWQvcHJvamVjdHMvUHJvamVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFjdCBmcm9tICdyZWFjdCdcblxuLy9pbXBvcnQgY29tcG9uZW50c1xuaW1wb3J0IFByb1Byb2plY3RzIGZyb20gJy4vUHJvUHJvamVjdHMnXG5pbXBvcnQgUHJvamVjdFJwaSBmcm9tICcuL1Byb2plY3RScGknXG5cbi8vIGltcG9ydCBkYXRhXG5pbXBvcnQgcHJvamVjdHNEYXRhIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9zdGF0aWMvZGF0YS9wcm9qZWN0cydcblxuY29uc3QgUHJvamVjdCA9IChwcm9wcykgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKHByb3BzLmlkKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0Q29udGFpbmVyJz5cbiAgICAgICAgICAgIHsocHJvcHMuaWQgPT09ICdlc3JpJyB8fCBwcm9wcy5pZCA9PT0gJ215aXBjcycpICYmXG4gICAgICAgICAgICAgICAgPFByb1Byb2plY3RzIGRhdGE9e3Byb2plY3RzRGF0YS5wcm9Qcm9qZWN0c1tgJHtwcm9wcy5pZH1gXX0gLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHsocHJvcHMuaWQgPT09ICdycGknIHx8IHByb3BzLmlkID09PSAnY2hhdGJvdCcpICYmXG4gICAgICAgICAgICAgICAgLy8gPFByb1Byb2plY3RzIGRhdGE9e3Byb2plY3RzRGF0YS5wcm9Qcm9qZWN0c1tgJHtwcm9wcy5pZH1gXX0gLz5cbiAgICAgICAgICAgICAgICA8UHJvamVjdFJwaSAvPlxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAucHJvamVjdENvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlcjogYmx1ZSAycHggc29saWQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA4MHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMjBweDtcbiAgICAgICAgICAgICAgICAgICAgLy8gbWluLWhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3QiXX0= */\n/*@ sourceURL=/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/shared/projects/Project.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ }),

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
  return __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Using Raspberry Pi 3 to Drive CNC Machine"
  }, __jsx("div", null, "Photos"));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectRpi);

/***/ })

})
//# sourceMappingURL=projects.js.84c3535b9885fa7640c2.hot-update.js.map