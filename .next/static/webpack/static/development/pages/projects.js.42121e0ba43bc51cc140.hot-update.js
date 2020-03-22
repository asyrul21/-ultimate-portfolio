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
        backgroundRepeat: 'noRepeat'
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
  }, "img.jsx-4133983565{width:100%;height:100%;object-fit:cover;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9zaGFyZWQvcHJvamVjdHMvUHJvUHJvamVjdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUR3QixBQUdnQyxXQUNDLFlBQ0ssaUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9zaGFyZWQvcHJvamVjdHMvUHJvUHJvamVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhY3QgZnJvbSAncmVhY3QnXG5cbi8vaW1wb3J0IHN0eWxlXG5pbXBvcnQgcHJvcHJvamVjdFN0eWxlcyBmcm9tICcuL3Byb3Byb2plY3RzLm1vZHVsZS5zY3NzJ1xuXG5jb25zdCBQcm9Qcm9qZWN0cyA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBwcm9wcy5kYXRhXG4gICAgLy8gY29uc29sZS5sb2cocHJvamVjdC50ZWNobm9sb2d5KVxuICAgIHJldHVybiAoXG4gICAgICAgIDxyZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcm9qZWN0U3R5bGVzLnByb2plY3RIZWFkZXJ9PlxuICAgICAgICAgICAgICAgIDxoNT57cHJvamVjdC50aXRsZX08L2g1PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHJvcHJvamVjdFN0eWxlcy50aW1lfT5cbiAgICAgICAgICAgICAgICB7cHJvamVjdC50aW1lfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcm9qZWN0U3R5bGVzLnBob3Rvc0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAge3Byb2plY3QuaW1hZ2VzLm1hcCgoaW1hZ2UsIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkeH0gY2xhc3NOYW1lPXtwcm9wcm9qZWN0U3R5bGVzLmltYWdlfSBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybCgnICsgaW1hZ2UgKyAnKScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvbnRhaW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICdub1JlcGVhdCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17aW1hZ2V9IC8+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3Byb3Byb2plY3RTdHlsZXMudGV4dH0+e3Byb2plY3QudGV4dH08L3A+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcm9qZWN0U3R5bGVzLmF0dHJpYnV0ZXN9PlxuICAgICAgICAgICAgICAgIDxzcGFuPlJvbGU6PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxwPntwcm9qZWN0LnJvbGV9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcm9qZWN0U3R5bGVzLmF0dHJpYnV0ZXN9PlxuICAgICAgICAgICAgICAgIDxzcGFuPk1haW4gY29udHJpYnV0aW9uOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8cD57cHJvamVjdC5jb250cmlidXRpb259PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcm9qZWN0U3R5bGVzLmF0dHJpYnV0ZXN9PlxuICAgICAgICAgICAgICAgIDxzcGFuPlRlY2hub2xvZ3k6PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcm9qZWN0U3R5bGVzLnRlY2hub2xvZ3lDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC50ZWNobm9sb2d5Lm1hcCgodGVjaCwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGtleT17aWR4fT57dGVjaH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvcmVhY3QuRnJhZ21lbnQgPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvUHJvamVjdHM7Il19 */\n/*@ sourceURL=/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/shared/projects/ProProjects.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ProProjects);

/***/ })

})
//# sourceMappingURL=projects.js.42121e0ba43bc51cc140.hot-update.js.map