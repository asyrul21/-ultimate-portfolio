webpackHotUpdate("static/development/pages/travel.js",{

/***/ "./pages/travel.js":
/*!*************************!*\
  !*** ./pages/travel.js ***!
  \*************************/
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
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/Link */ "./node_modules/next/Link.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_layouts_ContentLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/layouts/ContentLayout */ "./components/layouts/ContentLayout.js");
/* harmony import */ var _components_layouts_ContentContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/layouts/ContentContainer */ "./components/layouts/ContentContainer.js");
/* harmony import */ var _components_shared_ContentHead__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/shared/ContentHead */ "./components/shared/ContentHead.js");
/* harmony import */ var _components_shared_Tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/shared/Tabs */ "./components/shared/Tabs.js");
/* harmony import */ var _components_shared_InnerTabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/shared/InnerTabs */ "./components/shared/InnerTabs.js");
/* harmony import */ var _components_shared_fitnessitems_FitnessItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/shared/fitnessitems/FitnessItem */ "./components/shared/fitnessitems/FitnessItem.js");






var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;


 // import layouts


 //import components






var Travel =
/*#__PURE__*/
function (_react$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Travel, _react$Component);

  function Travel() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Travel);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Travel).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Travel, [{
    key: "render",
    value: function render() {
      var _this = this;

      return __jsx("div", null, __jsx(_components_layouts_ContentLayout__WEBPACK_IMPORTED_MODULE_8__["default"], null, __jsx("section", null, __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('hero', fitnessStyles.fitnessHero)
      }), __jsx(_components_layouts_ContentContainer__WEBPACK_IMPORTED_MODULE_9__["default"], null, __jsx(Fade, {
        delay: 200
      }, __jsx(_components_shared_ContentHead__WEBPACK_IMPORTED_MODULE_10__["default"], {
        data: contentHeadData.fitness
      })), __jsx(Fade, {
        delay: 300
      }, __jsx(_components_shared_Tabs__WEBPACK_IMPORTED_MODULE_11__["default"], {
        onChange: this.handleChange,
        active: this.state.activeTab
      }, __jsx("span", {
        key: "Achievements"
      }, "Achievements"), __jsx("span", {
        key: "Programs"
      }, "Programs"), __jsx("span", {
        key: "Diet"
      }, "Diet"))), this.state.activeTab === 'Achievements' && __jsx(Fade, {
        duration: 500
      }, __jsx(_components_shared_InnerTabs__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onChange: function onChange(active) {
          _this.setState({
            activeItem: active
          });
        },
        active: this.state.activeItem,
        data: fitnessData.slugs.Achievements
      })), this.state.activeTab === 'Programs' && __jsx(Fade, {
        duration: 500
      }, __jsx(_components_shared_InnerTabs__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onChange: function onChange(active) {
          _this.setState({
            activeItem: active
          });
        },
        active: this.state.activeItem,
        data: fitnessData.slugs.Programs
      })), this.state.activeTab === 'Diet' && __jsx(Fade, {
        duration: 500
      }, __jsx(_components_shared_InnerTabs__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onChange: function onChange(active) {
          _this.setState({
            activeItem: active
          });
        },
        active: this.state.activeItem,
        data: fitnessData.slugs.Diet
      })), this.state.activeItem !== '' && __jsx(Fade, {
        duration: 500
      }, __jsx(_components_shared_fitnessitems_FitnessItem__WEBPACK_IMPORTED_MODULE_13__["default"], {
        id: this.state.activeItem
      }))))));
    }
  }]);

  return Travel;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Travel);

/***/ })

})
//# sourceMappingURL=travel.js.7ad2cfedb4bec1e2d9bb.hot-update.js.map