webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/shared/skills/SkillBars.js":
/*!***********************************************!*\
  !*** ./components/shared/skills/SkillBars.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _skillbar_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./skillbar.module.scss */ "./components/shared/skills/skillbar.module.scss");
/* harmony import */ var _skillbar_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_skillbar_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-visibility-sensor */ "./node_modules/react-visibility-sensor/dist/visibility-sensor.js");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _SkillBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SkillBar */ "./components/shared/skills/SkillBar.js");









var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;
// import specific style here





var SkillBars =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SkillBars, _React$Component);

  function SkillBars() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SkillBars);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SkillBars)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      visible: false
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SkillBars, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_10___default.a, {
        partialVisibility: true,
        onChange: function onChange(isVisible) {
          if (!_this2.state.visible) {
            _this2.setState({
              visible: isVisible
            });
          }
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1197167109", [this.state.visible ? 1 : 0.25]]]) + " " + 'skillbarsContainer'
      }, __jsx(_SkillBar__WEBPACK_IMPORTED_MODULE_11__["default"], {
        visible: this.state.visible,
        skill: "Python",
        stats: "80"
      }), __jsx(_SkillBar__WEBPACK_IMPORTED_MODULE_11__["default"], {
        visible: this.state.visible,
        skill: "JavaScript",
        stats: "80"
      }), __jsx(_SkillBar__WEBPACK_IMPORTED_MODULE_11__["default"], {
        visible: this.state.visible,
        skill: "React",
        stats: "70"
      }), __jsx(_SkillBar__WEBPACK_IMPORTED_MODULE_11__["default"], {
        visible: this.state.visible,
        skill: "Express",
        stats: "70"
      }), __jsx(_SkillBar__WEBPACK_IMPORTED_MODULE_11__["default"], {
        visible: this.state.visible,
        skill: "Figma",
        stats: "60"
      }), __jsx(_SkillBar__WEBPACK_IMPORTED_MODULE_11__["default"], {
        visible: this.state.visible,
        skill: "C#",
        stats: "75"
      }), __jsx(_SkillBar__WEBPACK_IMPORTED_MODULE_11__["default"], {
        visible: this.state.visible,
        skill: "C/C++",
        stats: "80"
      }), __jsx(_SkillBar__WEBPACK_IMPORTED_MODULE_11__["default"], {
        visible: this.state.visible,
        skill: "Guitar",
        stats: "60"
      }), __jsx(_SkillBar__WEBPACK_IMPORTED_MODULE_11__["default"], {
        visible: this.state.visible,
        skill: "Gardening",
        stats: "10"
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1197167109",
        dynamic: [this.state.visible ? 1 : 0.25]
      }, ".skillbarsContainer.__jsx-style-dynamic-selector{padding:0;margin:0;height:420px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;opacity:".concat(this.state.visible ? 1 : 0.25, ";-webkit-transition:opacity 500ms linear;transition:opacity 500ms linear;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9zaGFyZWQvc2tpbGxzL1NraWxsQmFycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ2lDLEFBR3VDLFVBQ0QsU0FDSSxhQUVBLDBFQUNTLDhFQUNRLG1IQUVPLHFDQUNMLHdFQUNwQyIsImZpbGUiOiIvVXNlcnMvYXN5cnVsaGFmZXR6eS9Eb2N1bWVudHMvQ1NEZXZlbG9wbWVudC9XZWIvbXlVbHRpbWF0ZVBvcnRmb2xpby91bHRpbWF0ZXBvcnRmb2xpby1uZXh0L2NvbXBvbmVudHMvc2hhcmVkL3NraWxscy9Ta2lsbEJhcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgc3BlY2lmaWMgc3R5bGUgaGVyZVxuaW1wb3J0IHJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHNraWxsYmFyU3R5bGVzIGZyb20gJy4vc2tpbGxiYXIubW9kdWxlLnNjc3MnO1xuaW1wb3J0IFZpc2liaWxpdHlTZW5zb3IgZnJvbSAncmVhY3QtdmlzaWJpbGl0eS1zZW5zb3InXG5cbmltcG9ydCBTa2lsbEJhciBmcm9tICcuL1NraWxsQmFyJ1xuXG5jbGFzcyBTa2lsbEJhcnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxWaXNpYmlsaXR5U2Vuc29yXG4gICAgICAgICAgICAgICAgcGFydGlhbFZpc2liaWxpdHlcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGlzVmlzaWJsZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUudmlzaWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZpc2libGU6IGlzVmlzaWJsZSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2tpbGxiYXJzQ29udGFpbmVyJyA+XG4gICAgICAgICAgICAgICAgICAgIDxTa2lsbEJhciB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpc2libGV9IHNraWxsPSdQeXRob24nIHN0YXRzPSc4MCcgLz5cbiAgICAgICAgICAgICAgICAgICAgPFNraWxsQmFyIHZpc2libGU9e3RoaXMuc3RhdGUudmlzaWJsZX0gc2tpbGw9J0phdmFTY3JpcHQnIHN0YXRzPSc4MCcgLz5cbiAgICAgICAgICAgICAgICAgICAgPFNraWxsQmFyIHZpc2libGU9e3RoaXMuc3RhdGUudmlzaWJsZX0gc2tpbGw9J1JlYWN0JyBzdGF0cz0nNzAnIC8+XG4gICAgICAgICAgICAgICAgICAgIDxTa2lsbEJhciB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpc2libGV9IHNraWxsPSdFeHByZXNzJyBzdGF0cz0nNzAnIC8+XG4gICAgICAgICAgICAgICAgICAgIDxTa2lsbEJhciB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpc2libGV9IHNraWxsPSdGaWdtYScgc3RhdHM9JzYwJyAvPlxuICAgICAgICAgICAgICAgICAgICA8U2tpbGxCYXIgdmlzaWJsZT17dGhpcy5zdGF0ZS52aXNpYmxlfSBza2lsbD0nQyMnIHN0YXRzPSc3NScgLz5cbiAgICAgICAgICAgICAgICAgICAgPFNraWxsQmFyIHZpc2libGU9e3RoaXMuc3RhdGUudmlzaWJsZX0gc2tpbGw9J0MvQysrJyBzdGF0cz0nODAnIC8+XG4gICAgICAgICAgICAgICAgICAgIDxTa2lsbEJhciB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpc2libGV9IHNraWxsPSdHdWl0YXInIHN0YXRzPSc2MCcgLz5cbiAgICAgICAgICAgICAgICAgICAgPFNraWxsQmFyIHZpc2libGU9e3RoaXMuc3RhdGUudmlzaWJsZX0gc2tpbGw9J0dhcmRlbmluZycgc3RhdHM9JzEwJyAvPlxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiBzdHlsaW5nIHVzaW5nIENTUyBpbiBKUyAqL31cbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD4ge2BcbiAgICAgICAgICAgICAgICAgICAgICAgIC5za2lsbGJhcnNDb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDIwcHg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogJHt0aGlzLnN0YXRlLnZpc2libGUgPyAxIDogMC4yNX07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcyBsaW5lYXI7ICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGUgPlxuICAgICAgICAgICAgICAgIDwvZGl2ID5cbiAgICAgICAgICAgIDwvVmlzaWJpbGl0eVNlbnNvcj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2tpbGxCYXJzOyJdfQ== */\n/*@ sourceURL=/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/shared/skills/SkillBars.js */"))));
    }
  }]);

  return SkillBars;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SkillBars);

/***/ })

})
//# sourceMappingURL=about.js.663b92ff9691a3c6de12.hot-update.js.map