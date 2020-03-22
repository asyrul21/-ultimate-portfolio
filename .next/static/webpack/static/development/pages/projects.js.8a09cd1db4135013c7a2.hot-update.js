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
        backgroundSize: 'cover',
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
  }, "img.jsx-4133983565{width:100%;height:100%;object-fit:cover;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9zaGFyZWQvcHJvamVjdHMvUHJvUHJvamVjdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUR3QixBQUdnQyxXQUNDLFlBQ0ssaUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9zaGFyZWQvcHJvamVjdHMvUHJvUHJvamVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhY3QgZnJvbSAncmVhY3QnXG5cbi8vaW1wb3J0IHN0eWxlXG5pbXBvcnQgcHJvcHJvamVjdFN0eWxlcyBmcm9tICcuL3Byb3Byb2plY3RzLm1vZHVsZS5zY3NzJ1xuXG5jb25zdCBQcm9Qcm9qZWN0cyA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBwcm9wcy5kYXRhXG4gICAgLy8gY29uc29sZS5sb2cocHJvamVjdC50ZWNobm9sb2d5KVxuICAgIHJldHVybiAoXG4gICAgICAgIDxyZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcm9qZWN0U3R5bGVzLnByb2plY3RIZWFkZXJ9PlxuICAgICAgICAgICAgICAgIDxoNT57cHJvamVjdC50aXRsZX08L2g1PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHJvcHJvamVjdFN0eWxlcy50aW1lfT5cbiAgICAgICAgICAgICAgICB7cHJvamVjdC50aW1lfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcm9qZWN0U3R5bGVzLnBob3Rvc0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAge3Byb2plY3QuaW1hZ2VzLm1hcCgoaW1hZ2UsIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkeH0gY2xhc3NOYW1lPXtwcm9wcm9qZWN0U3R5bGVzLmltYWdlfSBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybCgnICsgaW1hZ2UgKyAnKScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0J1xuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPXtpbWFnZX0gLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17cHJvcHJvamVjdFN0eWxlcy50ZXh0fT57cHJvamVjdC50ZXh0fTwvcD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Byb3Byb2plY3RTdHlsZXMuYXR0cmlidXRlc30+XG4gICAgICAgICAgICAgICAgPHNwYW4+Um9sZTo8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHA+e3Byb2plY3Qucm9sZX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Byb3Byb2plY3RTdHlsZXMuYXR0cmlidXRlc30+XG4gICAgICAgICAgICAgICAgPHNwYW4+TWFpbiBjb250cmlidXRpb246PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxwPntwcm9qZWN0LmNvbnRyaWJ1dGlvbn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Byb3Byb2plY3RTdHlsZXMuYXR0cmlidXRlc30+XG4gICAgICAgICAgICAgICAgPHNwYW4+VGVjaG5vbG9neTo8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Byb3Byb2plY3RTdHlsZXMudGVjaG5vbG9neUNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LnRlY2hub2xvZ3kubWFwKCh0ZWNoLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXtpZHh9Pnt0ZWNofTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9yZWFjdC5GcmFnbWVudCA+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9Qcm9qZWN0czsiXX0= */\n/*@ sourceURL=/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/shared/projects/ProProjects.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ProProjects);

/***/ })

})
//# sourceMappingURL=projects.js.8a09cd1db4135013c7a2.hot-update.js.map