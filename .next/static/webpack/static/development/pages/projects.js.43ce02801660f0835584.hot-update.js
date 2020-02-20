webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./components/shared/ProjectsTabs.js":
/*!*******************************************!*\
  !*** ./components/shared/ProjectsTabs.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_projecttabs_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/projecttabs.module.scss */ "./components/shared/styles/projecttabs.module.scss");
/* harmony import */ var _styles_projecttabs_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_projecttabs_module_scss__WEBPACK_IMPORTED_MODULE_7__);






var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;




var ProjectTabs =
/*#__PURE__*/
function (_react$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ProjectTabs, _react$Component);

  function ProjectTabs() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProjectTabs);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ProjectTabs).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProjectTabs, [{
    key: "render",
    value: function render() {
      var _this = this;

      // console.log(this.props.data[0].key)
      return __jsx("div", {
        className: _styles_projecttabs_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.projectsContainer
      }, this.props.data.map(function (data) {
        return __jsx("div", {
          key: data.key,
          className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(_styles_projecttabs_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.projectTabContainer, _this.props.active === child.key ? _styles_projecttabs_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.active : null)
        }, __jsx("div", {
          className: _styles_projecttabs_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.tabBox,
          key: data.key,
          onClick: function onClick() {
            return _this.props.onChange(child.key);
          }
        }, child));
      }));
    }
  }]);

  return ProjectTabs;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ProjectTabs);

/***/ })

})
//# sourceMappingURL=projects.js.43ce02801660f0835584.hot-update.js.map