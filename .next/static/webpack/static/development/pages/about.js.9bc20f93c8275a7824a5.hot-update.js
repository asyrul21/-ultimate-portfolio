webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/shared/skills/SkillBar.js":
/*!**********************************************!*\
  !*** ./components/shared/skills/SkillBar.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _skillbar_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./skillbar.module.scss */ "./components/shared/skills/skillbar.module.scss");
/* harmony import */ var _skillbar_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_skillbar_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-visibility-sensor */ "./node_modules/react-visibility-sensor/dist/visibility-sensor.js");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_9__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;
// import specific style here





var SkillBar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SkillBar, _React$Component);

  function SkillBar() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SkillBar);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SkillBar).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SkillBar, [{
    key: "render",
    // state = {
    //     visible: this.props.visible
    // }
    value: function render() {
      return __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["453718122", [this.props.visible ? this.props.stats : 5]]]) + " " + (_skillbar_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.skillBarContainer || "")
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["453718122", [this.props.visible ? this.props.stats : 5]]]) + " " + (_skillbar_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.skill || "")
      }, __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["453718122", [this.props.visible ? this.props.stats : 5]]]) + " " + 'span1'
      }, this.props.skill)), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["453718122", [this.props.visible ? this.props.stats : 5]]]) + " " + (_skillbar_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.statsContainer || "")
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["453718122", [this.props.visible ? this.props.stats : 5]]]) + " " + (classnames__WEBPACK_IMPORTED_MODULE_8___default()(_skillbar_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.stats, 'statsAnimate') || "")
      })), __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["453718122", [this.props.visible ? this.props.stats : 5]]]) + " " + 'span2'
      }, this.props.stats, "%"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "453718122",
        dynamic: [this.props.visible ? this.props.stats : 5]
      }, ".statsAnimate.__jsx-style-dynamic-selector{-webkit-animation:expand-__jsx-style-dynamic-selector 1s ease-in;animation:expand-__jsx-style-dynamic-selector 1s ease-in;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}.span1.__jsx-style-dynamic-selector{-webkit-animation:fadeIn-__jsx-style-dynamic-selector 0.5s ease-in forwards;animation:fadeIn-__jsx-style-dynamic-selector 0.5s ease-in forwards;-webkit-animation-delay:0.5s;animation-delay:0.5s;}.span2.__jsx-style-dynamic-selector{-webkit-animation:fadeIn-__jsx-style-dynamic-selector 0.5s ease-in forwards;animation:fadeIn-__jsx-style-dynamic-selector 0.5s ease-in forwards;-webkit-animation-delay:1s;animation-delay:1s;}@-webkit-keyframes expand-__jsx-style-dynamic-selector{from{width:1%;}to{width:".concat(this.props.visible ? this.props.stats : 5, "%;}}@keyframes expand-__jsx-style-dynamic-selector{from{width:1%;}to{width:").concat(this.props.visible ? this.props.stats : 5, "%;}}@-webkit-keyframes fadeIn-__jsx-style-dynamic-selector{to{opacity:1;}}@keyframes fadeIn-__jsx-style-dynamic-selector{to{opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9zaGFyZWQvc2tpbGxzL1NraWxsQmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CNEIsQUFHcUQsQUFNVyxBQUtBLEFBTTVCLEFBRzJCLEFBTTFCLFNBUlosQ0FTQSwwQkFOQSxzRkFwQjZCLHNCQU1SLEFBTTFCLDRDQVZDLEVBVUEsSUFMQSIsImZpbGUiOiIvVXNlcnMvYXN5cnVsaGFmZXR6eS9Eb2N1bWVudHMvQ1NEZXZlbG9wbWVudC9XZWIvbXlVbHRpbWF0ZVBvcnRmb2xpby91bHRpbWF0ZXBvcnRmb2xpby1uZXh0L2NvbXBvbmVudHMvc2hhcmVkL3NraWxscy9Ta2lsbEJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBzcGVjaWZpYyBzdHlsZSBoZXJlXG5pbXBvcnQgcmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc2tpbGxiYXJTdHlsZXMgZnJvbSAnLi9za2lsbGJhci5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBWaXNpYmlsaXR5U2Vuc29yIGZyb20gJ3JlYWN0LXZpc2liaWxpdHktc2Vuc29yJ1xuXG5jbGFzcyBTa2lsbEJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgLy8gc3RhdGUgPSB7XG4gICAgLy8gICAgIHZpc2libGU6IHRoaXMucHJvcHMudmlzaWJsZVxuICAgIC8vIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3NraWxsYmFyU3R5bGVzLnNraWxsQmFyQ29udGFpbmVyfSA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3NraWxsYmFyU3R5bGVzLnNraWxsfT48c3BhbiBjbGFzc05hbWU9J3NwYW4xJz57dGhpcy5wcm9wcy5za2lsbH08L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3NraWxsYmFyU3R5bGVzLnN0YXRzQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHNraWxsYmFyU3R5bGVzLnN0YXRzLCAnc3RhdHNBbmltYXRlJyl9PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc3BhbjInPnt0aGlzLnByb3BzLnN0YXRzfSU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAuc3RhdHNBbmltYXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZXhwYW5kIDFzIGVhc2UtaW47XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuaW1hdGlvbi1kZWxheTogMC41cztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAuc3BhbjF7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGZhZGVJbiAwLjVzIGVhc2UtaW4gZm9yd2FyZHM7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuNXM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLnNwYW4yIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNXMgZWFzZS1pbiBmb3J3YXJkcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMXNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGV4cGFuZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDElO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdG8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJHt0aGlzLnByb3BzLnZpc2libGUgPyB0aGlzLnByb3BzLnN0YXRzIDogNX0lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNraWxsQmFyO1xuXG4vLyBzdHlsZT17eyB3aWR0aDogYCR7cHJvcHMuc3RhdHN9JWAgfX1cbiAgICAgICAgICAgICAgIC8vIHdpZHRoOiAke3Byb3BzLnN0YXRzfSU7Il19 */\n/*@ sourceURL=/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/shared/skills/SkillBar.js */")));
    }
  }]);

  return SkillBar;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SkillBar); // style={{ width: `${props.stats}%` }}
// width: ${props.stats}%;

/***/ })

})
//# sourceMappingURL=about.js.9bc20f93c8275a7824a5.hot-update.js.map