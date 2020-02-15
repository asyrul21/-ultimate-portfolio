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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["1678789997", [this.props.visible ? this.props.stats : 5]]]) + " " + (_skillbar_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.skillBarContainer || "")
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["1678789997", [this.props.visible ? this.props.stats : 5]]]) + " " + (_skillbar_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.skill || "")
      }, __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["1678789997", [this.props.visible ? this.props.stats : 5]]])
      }, this.props.skill)), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["1678789997", [this.props.visible ? this.props.stats : 5]]]) + " " + (_skillbar_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.statsContainer || "")
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["1678789997", [this.props.visible ? this.props.stats : 5]]]) + " " + (classnames__WEBPACK_IMPORTED_MODULE_8___default()(_skillbar_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.stats, 'statsAnimate') || "")
      })), __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["1678789997", [this.props.visible ? this.props.stats : 5]]]) + " " + 'span2'
      }, this.props.stats, "%"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1678789997",
        dynamic: [this.props.visible ? this.props.stats : 5]
      }, ".statsAnimate.__jsx-style-dynamic-selector{-webkit-animation:expand-__jsx-style-dynamic-selector 1s ease-in;animation:expand-__jsx-style-dynamic-selector 1s ease-in;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}span.__jsx-style-dynamic-selector{-webkit-animation:fadeIn-__jsx-style-dynamic-selector 0.5s ease-in forwards;animation:fadeIn-__jsx-style-dynamic-selector 0.5s ease-in forwards;}.span2.__jsx-style-dynamic-selector{-webkit-animation-delay:1s;animation-delay:1s;}@-webkit-keyframes expand-__jsx-style-dynamic-selector{from{width:1%;}to{width:".concat(this.props.visible ? this.props.stats : 5, "%;}}@keyframes expand-__jsx-style-dynamic-selector{from{width:1%;}to{width:").concat(this.props.visible ? this.props.stats : 5, "%;}}@-webkit-keyframes fadeIn-__jsx-style-dynamic-selector{to{opacity:1;}}@keyframes fadeIn-__jsx-style-dynamic-selector{to{opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9zaGFyZWQvc2tpbGxzL1NraWxsQmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CNEIsQUFHcUQsQUFNZSxBQU1oRCxBQUlnQixBQUcyQixBQU0xQixTQVJaLENBU0EsMEJBTkEsVUFSSiw0RUFYaUMsc0JBT2pDLDRDQUxBIiwiZmlsZSI6Ii9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9zaGFyZWQvc2tpbGxzL1NraWxsQmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHNwZWNpZmljIHN0eWxlIGhlcmVcbmltcG9ydCByZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBza2lsbGJhclN0eWxlcyBmcm9tICcuL3NraWxsYmFyLm1vZHVsZS5zY3NzJztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IFZpc2liaWxpdHlTZW5zb3IgZnJvbSAncmVhY3QtdmlzaWJpbGl0eS1zZW5zb3InXG5cbmNsYXNzIFNraWxsQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICAvLyBzdGF0ZSA9IHtcbiAgICAvLyAgICAgdmlzaWJsZTogdGhpcy5wcm9wcy52aXNpYmxlXG4gICAgLy8gfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2tpbGxiYXJTdHlsZXMuc2tpbGxCYXJDb250YWluZXJ9ID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2tpbGxiYXJTdHlsZXMuc2tpbGx9PjxzcGFuPnt0aGlzLnByb3BzLnNraWxsfTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2tpbGxiYXJTdHlsZXMuc3RhdHNDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc2tpbGxiYXJTdHlsZXMuc3RhdHMsICdzdGF0c0FuaW1hdGUnKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzcGFuMic+e3RoaXMucHJvcHMuc3RhdHN9JTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0c0FuaW1hdGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBleHBhbmQgMXMgZWFzZS1pbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5pbWF0aW9uLWRlbGF5OiAwLjVzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gMC41cyBlYXNlLWluIGZvcndhcmRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuaW1hdGlvbi1kZWxheTogMC41cztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAuc3BhbjIge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxc1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgZXhwYW5kIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb20ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMSU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0byB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAke3RoaXMucHJvcHMudmlzaWJsZSA/IHRoaXMucHJvcHMuc3RhdHMgOiA1fSU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2tpbGxCYXI7XG5cbi8vIHN0eWxlPXt7IHdpZHRoOiBgJHtwcm9wcy5zdGF0c30lYCB9fVxuICAgICAgICAgICAgICAgLy8gd2lkdGg6ICR7cHJvcHMuc3RhdHN9JTsiXX0= */\n/*@ sourceURL=/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/shared/skills/SkillBar.js */")));
    }
  }]);

  return SkillBar;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SkillBar); // style={{ width: `${props.stats}%` }}
// width: ${props.stats}%;

/***/ })

})
//# sourceMappingURL=about.js.beb8ae663eb1a1dda3c3.hot-update.js.map