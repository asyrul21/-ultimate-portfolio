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


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 //import style



var ProProjects = function ProProjects(props) {
  // console.log(props.data[0].title)
  var project = props.data;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-4133983565" + " " + (_proprojects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.projectHeading || "")
  }, __jsx("h5", {
    className: "jsx-4133983565"
  }, project.title), __jsx("span", {
    className: "jsx-4133983565"
  }, project.time)), __jsx("p", {
    className: "jsx-4133983565" + " " + (_proprojects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.text || "")
  }, project.text), __jsx("div", {
    className: "jsx-4133983565" + " " + (_proprojects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.photosContainer || "")
  }, project.images.map(function (image, idx) {
    return __jsx("div", {
      key: idx,
      style: {
        backgroundImage: 'url(' + image + ')'
      },
      className: "jsx-4133983565" + " " + (_proprojects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.image || "")
    });
  })), __jsx("div", {
    className: "jsx-4133983565" + " " + (_proprojects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.attributes || "")
  }, __jsx("span", {
    className: "jsx-4133983565"
  }, "Role:"), __jsx("p", {
    className: "jsx-4133983565"
  }, project.role)), __jsx("div", {
    className: "jsx-4133983565" + " " + (_proprojects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.attributes || "")
  }, __jsx("span", {
    className: "jsx-4133983565"
  }, "Main contribution:"), __jsx("p", {
    className: "jsx-4133983565"
  }, project.contribution)), __jsx("div", {
    className: "jsx-4133983565" + " " + (_proprojects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.attributes || "")
  }, __jsx("span", {
    className: "jsx-4133983565"
  }, "Technology:"), __jsx("p", {
    className: "jsx-4133983565"
  }, "Technologies go here")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4133983565"
  }, "img.jsx-4133983565{width:100%;height:100%;object-fit:cover;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9zaGFyZWQvcHJvamVjdHMvUHJvUHJvamVjdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEN3QixBQUdnQyxXQUNDLFlBQ0ssaUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9zaGFyZWQvcHJvamVjdHMvUHJvUHJvamVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhY3QgZnJvbSAncmVhY3QnXG5cbi8vaW1wb3J0IHN0eWxlXG5pbXBvcnQgcHJvcHJvamVjdFN0eWxlcyBmcm9tICcuL3Byb3Byb2plY3RzLm1vZHVsZS5zY3NzJ1xuXG5jb25zdCBQcm9Qcm9qZWN0cyA9IChwcm9wcykgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKHByb3BzLmRhdGFbMF0udGl0bGUpXG4gICAgY29uc3QgcHJvamVjdCA9IHByb3BzLmRhdGFcbiAgICByZXR1cm4gKFxuICAgICAgICA8cmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHJvcHJvamVjdFN0eWxlcy5wcm9qZWN0SGVhZGluZ30+XG4gICAgICAgICAgICAgICAgPGg1Pntwcm9qZWN0LnRpdGxlfTwvaDU+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3Byb2plY3QudGltZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17cHJvcHJvamVjdFN0eWxlcy50ZXh0fT57cHJvamVjdC50ZXh0fTwvcD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Byb3Byb2plY3RTdHlsZXMucGhvdG9zQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICB7cHJvamVjdC5pbWFnZXMubWFwKChpbWFnZSwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aWR4fSBjbGFzc05hbWU9e3Byb3Byb2plY3RTdHlsZXMuaW1hZ2V9IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKCcgKyBpbWFnZSArICcpJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPXtpbWFnZX0gLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcm9qZWN0U3R5bGVzLmF0dHJpYnV0ZXN9PlxuICAgICAgICAgICAgICAgIDxzcGFuPlJvbGU6PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxwPntwcm9qZWN0LnJvbGV9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcm9qZWN0U3R5bGVzLmF0dHJpYnV0ZXN9PlxuICAgICAgICAgICAgICAgIDxzcGFuPk1haW4gY29udHJpYnV0aW9uOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8cD57cHJvamVjdC5jb250cmlidXRpb259PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcm9qZWN0U3R5bGVzLmF0dHJpYnV0ZXN9PlxuICAgICAgICAgICAgICAgIDxzcGFuPlRlY2hub2xvZ3k6PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxwPlRlY2hub2xvZ2llcyBnbyBoZXJlPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L3JlYWN0LkZyYWdtZW50PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvUHJvamVjdHM7Il19 */\n/*@ sourceURL=/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/shared/projects/ProProjects.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ProProjects);

/***/ })

})
//# sourceMappingURL=projects.js.84b62c03bea3288a7d62.hot-update.js.map