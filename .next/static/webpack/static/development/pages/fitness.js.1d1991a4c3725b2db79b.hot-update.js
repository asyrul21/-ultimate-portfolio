webpackHotUpdate("static/development/pages/fitness.js",{

/***/ "./components/shared/Tabs.js":
/*!***********************************!*\
  !*** ./components/shared/Tabs.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_tabs_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/tabs.module.scss */ "./components/shared/styles/tabs.module.scss");
/* harmony import */ var _styles_tabs_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_tabs_module_scss__WEBPACK_IMPORTED_MODULE_7__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Tabs = /*#__PURE__*/function (_react$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Tabs, _react$Component);

  var _super = _createSuper(Tabs);

  function Tabs() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Tabs);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Tabs, [{
    key: "render",
    value: function render() {
      var _this = this;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx("div", {
        className: "jsx-1205692785" + " " + (_styles_tabs_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.tabContainer || "")
      }, this.props.children.map(function (child, idx) {
        return (// passing child state to parent
          __jsx("a", {
            key: idx,
            onClick: function onClick() {
              return _this.props.onChange(child.key);
            },
            className: "jsx-1205692785" + " " + ((_this.props.active === child.key ? _styles_tabs_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.active : null) || "")
          }, child)
        );
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1205692785"
      }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9zaGFyZWQvVGFicy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQjRCIiwiZmlsZSI6Ii9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9zaGFyZWQvVGFicy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHRhYnNTdHlsZXMgZnJvbSAnLi9zdHlsZXMvdGFicy5tb2R1bGUuc2NzcydcblxuY2xhc3MgVGFicyBleHRlbmRzIHJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0YWJzU3R5bGVzLnRhYkNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVuLm1hcCgoY2hpbGQsIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwYXNzaW5nIGNoaWxkIHN0YXRlIHRvIHBhcmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGtleT17aWR4fSBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uQ2hhbmdlKGNoaWxkLmtleSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5hY3RpdmUgPT09IGNoaWxkLmtleSA/IHRhYnNTdHlsZXMuYWN0aXZlIDogbnVsbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8LyBkaXYgPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgLnRhYkl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L3JlYWN0LkZyYWdtZW50PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJzO1xuXG5cbi8vIGhhbmRsZUNsaWNrKGl0ZW0pIHtcbi8vICAgICBsZXQgbmV3U3RhdGUgPSB7fVxuLy8gICAgIE9iamVjdC5rZXlzKHRoaXMuc3RhdGUpLm1hcCgoa2V5LCB2YWx1ZSkgPT4ge1xuLy8gICAgICAgICBpZiAoa2V5ID09PSBgJHtpdGVtfUFjdGl2ZWApIHtcbi8vICAgICAgICAgICAgIG5ld1N0YXRlW2Ake2tleX1gXSA9IHRydWU7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgZWxzZSB7XG4vLyAgICAgICAgICAgICBuZXdTdGF0ZVtgJHtrZXl9YF0gPSBmYWxzZTtcbi8vICAgICAgICAgfVxuLy8gICAgIH0pXG4vLyAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4vLyB9Il19 */\n/*@ sourceURL=/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/shared/Tabs.js */"));
    }
  }]);

  return Tabs;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Tabs); // handleClick(item) {
//     let newState = {}
//     Object.keys(this.state).map((key, value) => {
//         if (key === `${item}Active`) {
//             newState[`${key}`] = true;
//         }
//         else {
//             newState[`${key}`] = false;
//         }
//     })
//     this.setState(newState);
// }

/***/ })

})
//# sourceMappingURL=fitness.js.1d1991a4c3725b2db79b.hot-update.js.map