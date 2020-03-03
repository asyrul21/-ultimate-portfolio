webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./components/shared/projects/AcademicProjects.js":
/*!********************************************************!*\
  !*** ./components/shared/projects/AcademicProjects.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _proprojects_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./proprojects.module.scss */ "./components/shared/projects/proprojects.module.scss");
/* harmony import */ var _proprojects_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_proprojects_module_scss__WEBPACK_IMPORTED_MODULE_2__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 //import style



var ProProjects = function ProProjects(props) {
  // console.log(props.data[0].title)
  var project = props.data;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-4133983565" + " " + (proprojectStyles.projectHeading || "")
  }, __jsx("h5", {
    className: "jsx-4133983565"
  }, project.title), __jsx("span", {
    className: "jsx-4133983565"
  }, project.time)), __jsx("div", {
    className: "jsx-4133983565" + " " + (proprojectStyles.photosContainer || "")
  }, project.images.map(function (image, idx) {
    return __jsx("div", {
      key: idx,
      style: {
        backgroundImage: 'url(' + image + ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      },
      className: "jsx-4133983565" + " " + (proprojectStyles.image || "")
    });
  })), __jsx("p", {
    className: "jsx-4133983565" + " " + (proprojectStyles.text || "")
  }, project.text), __jsx("div", {
    className: "jsx-4133983565" + " " + (proprojectStyles.attributes || "")
  }, __jsx("span", {
    className: "jsx-4133983565"
  }, "Role:"), __jsx("p", {
    className: "jsx-4133983565"
  }, project.role)), __jsx("div", {
    className: "jsx-4133983565" + " " + (proprojectStyles.attributes || "")
  }, __jsx("span", {
    className: "jsx-4133983565"
  }, "Main contribution:"), __jsx("p", {
    className: "jsx-4133983565"
  }, project.contribution)), __jsx("div", {
    className: "jsx-4133983565" + " " + (proprojectStyles.attributes || "")
  }, __jsx("span", {
    className: "jsx-4133983565"
  }, "Technology:"), __jsx("p", {
    className: "jsx-4133983565"
  }, "Technologies go here")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4133983565"
  }, "img.jsx-4133983565{width:100%;height:100%;object-fit:cover;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9zaGFyZWQvcHJvamVjdHMvQWNhZGVtaWNQcm9qZWN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2Q3dCLEFBR2dDLFdBQ0MsWUFDSyxpQkFDckIiLCJmaWxlIjoiL1VzZXJzL2FzeXJ1bGhhZmV0enkvRG9jdW1lbnRzL0NTRGV2ZWxvcG1lbnQvV2ViL215VWx0aW1hdGVQb3J0Zm9saW8vdWx0aW1hdGVwb3J0Zm9saW8tbmV4dC9jb21wb25lbnRzL3NoYXJlZC9wcm9qZWN0cy9BY2FkZW1pY1Byb2plY3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vL2ltcG9ydCBzdHlsZVxuaW1wb3J0IGFjYWRlbWljUHJvamVjdFN0eWxlcyBmcm9tICcuL3Byb3Byb2plY3RzLm1vZHVsZS5zY3NzJ1xuXG5jb25zdCBQcm9Qcm9qZWN0cyA9IChwcm9wcykgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKHByb3BzLmRhdGFbMF0udGl0bGUpXG4gICAgY29uc3QgcHJvamVjdCA9IHByb3BzLmRhdGFcbiAgICByZXR1cm4gKFxuICAgICAgICA8cmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHJvcHJvamVjdFN0eWxlcy5wcm9qZWN0SGVhZGluZ30+XG4gICAgICAgICAgICAgICAgPGg1Pntwcm9qZWN0LnRpdGxlfTwvaDU+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3Byb2plY3QudGltZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Byb3Byb2plY3RTdHlsZXMucGhvdG9zQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICB7cHJvamVjdC5pbWFnZXMubWFwKChpbWFnZSwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aWR4fSBjbGFzc05hbWU9e3Byb3Byb2plY3RTdHlsZXMuaW1hZ2V9IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKCcgKyBpbWFnZSArICcpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9e2ltYWdlfSAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtwcm9wcm9qZWN0U3R5bGVzLnRleHR9Pntwcm9qZWN0LnRleHR9PC9wPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHJvcHJvamVjdFN0eWxlcy5hdHRyaWJ1dGVzfT5cbiAgICAgICAgICAgICAgICA8c3Bhbj5Sb2xlOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8cD57cHJvamVjdC5yb2xlfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHJvcHJvamVjdFN0eWxlcy5hdHRyaWJ1dGVzfT5cbiAgICAgICAgICAgICAgICA8c3Bhbj5NYWluIGNvbnRyaWJ1dGlvbjo8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHA+e3Byb2plY3QuY29udHJpYnV0aW9ufTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHJvcHJvamVjdFN0eWxlcy5hdHRyaWJ1dGVzfT5cbiAgICAgICAgICAgICAgICA8c3Bhbj5UZWNobm9sb2d5Ojwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8cD5UZWNobm9sb2dpZXMgZ28gaGVyZTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9yZWFjdC5GcmFnbWVudD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb1Byb2plY3RzOyJdfQ== */\n/*@ sourceURL=/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/shared/projects/AcademicProjects.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ProProjects);

/***/ }),

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
/* harmony import */ var _AcademicProjects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AcademicProjects */ "./components/shared/projects/AcademicProjects.js");
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
  __jsx(_AcademicProjects__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "482345856"
  }, ".projectContainer.jsx-482345856{width:100%;margin-top:80px;margin-bottom:120px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9zaGFyZWQvcHJvamVjdHMvUHJvamVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQndCLEFBSWdDLFdBQ0ssZ0JBQ0ksb0JBRXhCIiwiZmlsZSI6Ii9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9zaGFyZWQvcHJvamVjdHMvUHJvamVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFjdCBmcm9tICdyZWFjdCdcblxuLy9pbXBvcnQgY29tcG9uZW50c1xuaW1wb3J0IFByb1Byb2plY3RzIGZyb20gJy4vUHJvUHJvamVjdHMnXG5pbXBvcnQgQWNhZGVtaWNQcm9qZWN0cyBmcm9tICcuL0FjYWRlbWljUHJvamVjdHMnXG5cbi8vIGltcG9ydCBkYXRhXG5pbXBvcnQgcHJvamVjdHNEYXRhIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9zdGF0aWMvZGF0YS9wcm9qZWN0cydcblxuY29uc3QgUHJvamVjdCA9IChwcm9wcykgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKHByb3BzLmlkKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9qZWN0Q29udGFpbmVyJz5cbiAgICAgICAgICAgIHsocHJvcHMuaWQgPT09ICdlc3JpJyB8fCBwcm9wcy5pZCA9PT0gJ215aXBjcycpICYmXG4gICAgICAgICAgICAgICAgPFByb1Byb2plY3RzIGRhdGE9e3Byb2plY3RzRGF0YS5wcm9Qcm9qZWN0c1tgJHtwcm9wcy5pZH1gXX0gLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHsocHJvcHMuaWQgPT09ICdycGknIHx8IHByb3BzLmlkID09PSAnY2hhdGJvdCcpICYmXG4gICAgICAgICAgICAgICAgLy8gPFByb1Byb2plY3RzIGRhdGE9e3Byb2plY3RzRGF0YS5wcm9Qcm9qZWN0c1tgJHtwcm9wcy5pZH1gXX0gLz5cbiAgICAgICAgICAgICAgICA8QWNhZGVtaWNQcm9qZWN0cyAvPlxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAucHJvamVjdENvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlcjogYmx1ZSAycHggc29saWQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA4MHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMjBweDtcbiAgICAgICAgICAgICAgICAgICAgLy8gbWluLWhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3QiXX0= */\n/*@ sourceURL=/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/shared/projects/Project.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ })

})
//# sourceMappingURL=projects.js.d95df8b30f36c205665e.hot-update.js.map