webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./components/shared/projects/ProProjects.js":
/*!***************************************************!*\
  !*** ./components/shared/projects/ProProjects.js ***!
  \***************************************************/
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
var _jsxFileName = "/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/shared/projects/ProProjects.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 //import style



var ProProjects = function ProProjects(props) {
  var project = props.data; // console.log(project.technology)

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4133983565" + " " + (_proprojects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.projectHeader || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("h5", {
    className: "jsx-4133983565",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, project.title)), __jsx("div", {
    className: "jsx-4133983565" + " " + (_proprojects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.time || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, project.time), __jsx("div", {
    className: "jsx-4133983565" + " " + (_proprojects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.photosContainer || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, project.images.map(function (image, idx) {
    return __jsx("div", {
      key: idx,
      style: {
        backgroundImage: 'url(' + image + ')',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
      },
      className: "jsx-4133983565" + " " + (_proprojects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.image || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    });
  })), __jsx("p", {
    className: "jsx-4133983565" + " " + (_proprojects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.text || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, project.text), __jsx("div", {
    className: "jsx-4133983565" + " " + (_proprojects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.attributes || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-4133983565",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Role:"), __jsx("p", {
    className: "jsx-4133983565",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, project.role)), __jsx("div", {
    className: "jsx-4133983565" + " " + (_proprojects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.attributes || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-4133983565",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Main contribution:"), __jsx("p", {
    className: "jsx-4133983565",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, project.contribution)), __jsx("div", {
    className: "jsx-4133983565" + " " + (_proprojects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.attributes || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-4133983565",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Technology:"), __jsx("div", {
    className: "jsx-4133983565" + " " + (_proprojects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.technologyContainer || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, project.technology.map(function (tech, idx) {
    return __jsx("p", {
      key: idx,
      className: "jsx-4133983565",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, tech);
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4133983565",
    __self: this
  }, "img.jsx-4133983565{width:100%;height:100%;object-fit:cover;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9zaGFyZWQvcHJvamVjdHMvUHJvUHJvamVjdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUR3QixBQUdnQyxXQUNDLFlBQ0ssaUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9zaGFyZWQvcHJvamVjdHMvUHJvUHJvamVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhY3QgZnJvbSAncmVhY3QnXG5cbi8vaW1wb3J0IHN0eWxlXG5pbXBvcnQgcHJvcHJvamVjdFN0eWxlcyBmcm9tICcuL3Byb3Byb2plY3RzLm1vZHVsZS5zY3NzJ1xuXG5jb25zdCBQcm9Qcm9qZWN0cyA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBwcm9wcy5kYXRhXG4gICAgLy8gY29uc29sZS5sb2cocHJvamVjdC50ZWNobm9sb2d5KVxuICAgIHJldHVybiAoXG4gICAgICAgIDxyZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcm9qZWN0U3R5bGVzLnByb2plY3RIZWFkZXJ9PlxuICAgICAgICAgICAgICAgIDxoNT57cHJvamVjdC50aXRsZX08L2g1PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHJvcHJvamVjdFN0eWxlcy50aW1lfT5cbiAgICAgICAgICAgICAgICB7cHJvamVjdC50aW1lfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcm9qZWN0U3R5bGVzLnBob3Rvc0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAge3Byb2plY3QuaW1hZ2VzLm1hcCgoaW1hZ2UsIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkeH0gY2xhc3NOYW1lPXtwcm9wcm9qZWN0U3R5bGVzLmltYWdlfSBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybCgnICsgaW1hZ2UgKyAnKScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvbnRhaW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9e2ltYWdlfSAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtwcm9wcm9qZWN0U3R5bGVzLnRleHR9Pntwcm9qZWN0LnRleHR9PC9wPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHJvcHJvamVjdFN0eWxlcy5hdHRyaWJ1dGVzfT5cbiAgICAgICAgICAgICAgICA8c3Bhbj5Sb2xlOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8cD57cHJvamVjdC5yb2xlfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHJvcHJvamVjdFN0eWxlcy5hdHRyaWJ1dGVzfT5cbiAgICAgICAgICAgICAgICA8c3Bhbj5NYWluIGNvbnRyaWJ1dGlvbjo8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHA+e3Byb2plY3QuY29udHJpYnV0aW9ufTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHJvcHJvamVjdFN0eWxlcy5hdHRyaWJ1dGVzfT5cbiAgICAgICAgICAgICAgICA8c3Bhbj5UZWNobm9sb2d5Ojwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHJvcHJvamVjdFN0eWxlcy50ZWNobm9sb2d5Q29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAge3Byb2plY3QudGVjaG5vbG9neS5tYXAoKHRlY2gsIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e2lkeH0+e3RlY2h9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L3JlYWN0LkZyYWdtZW50ID5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb1Byb2plY3RzOyJdfQ== */\n/*@ sourceURL=/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/shared/projects/ProProjects.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ProProjects);

/***/ })

})
//# sourceMappingURL=projects.js.a9fd2dce90b228f6a950.hot-update.js.map